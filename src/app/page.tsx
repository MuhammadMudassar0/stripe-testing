"use client";

import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { FormEvent, useEffect, useMemo, useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
);
const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

type AchPaymentMethod = {
  id: string;
  bankName: string;
  last4: string;
  accountType: string;
  accountHolderType: string;
};

function AchSetupForm({ onSuccess }: { onSuccess: (message: string) => void }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError("");

    const { error: stripeError, setupIntent } = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: window.location.href,
      },
      redirect: "if_required",
    });

    if (stripeError) {
      console.error("[ACH] confirmSetup error", stripeError);
      setError(stripeError.message || "Failed to confirm ACH setup.");
      setLoading(false);
      return;
    }

    console.log("[ACH] confirmSetup success", {
      setupIntentId: setupIntent?.id,
      setupIntentStatus: setupIntent?.status,
      paymentMethod: setupIntent?.payment_method,
    });

    onSuccess(
      `ACH setup completed. SetupIntent status: ${setupIntent?.status ?? "unknown"}`,
    );
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement
        options={{
          layout: "tabs",
          paymentMethodOrder: ["us_bank_account"],
        }}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={loading || !stripe}
        className="w-full rounded-md bg-black px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-500"
      >
        {loading ? "Confirming..." : "Confirm ACH setup"}
      </button>
    </form>
  );
}

export default function Home() {
  const [clientSecret, setClientSecret] = useState("");
  const [loadingIntent, setLoadingIntent] = useState(false);
  const [loadingPaymentMethods, setLoadingPaymentMethods] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [paymentMethods, setPaymentMethods] = useState<AchPaymentMethod[]>([]);
  const [activeCustomerId, setActiveCustomerId] = useState("");

  const isMissingPublishableKey =
    !process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripeElementsOptions = useMemo(
    () => ({ clientSecret }),
    [clientSecret],
  );

  const createSetupIntent = async () => {
    setError("");
    setStatus("");
    setLoadingIntent(true);

    try {
      const response = await fetch(`${apiBaseUrl}/ach/setup-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create setup intent.");
      }

      const payload = (await response.json()) as {
        setupIntent?: {
          clientSecret?: string;
          id?: string;
          status?: string;
          customerId?: string;
        };
      };

      const secret = payload.setupIntent?.clientSecret;
      if (!secret) {
        throw new Error("No clientSecret returned from backend.");
      }
      console.log("Received clientSecret from backend:", secret);
      console.log("[ACH] setup intent payload", payload);

      setClientSecret(secret);
      setActiveCustomerId(payload.setupIntent?.customerId ?? "");
      setStatus(
        `SetupIntent created: ${payload.setupIntent?.id ?? "unknown"} (${payload.setupIntent?.status ?? "unknown"})`,
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error.");
    } finally {
      setLoadingIntent(false);
    }
  };

  const fetchPaymentMethods = async () => {
    setLoadingPaymentMethods(true);

    try {
      const response = await fetch(`${apiBaseUrl}/ach/payment-methods`);
      if (!response.ok) {
        throw new Error("Failed to fetch ACH payment methods.");
      }

      const payload = (await response.json()) as {
        customerId?: string;
        paymentMethods?: AchPaymentMethod[];
      };
      console.log("[ACH] payment methods payload", payload);
      setActiveCustomerId(payload.customerId ?? "");
      setPaymentMethods(payload.paymentMethods ?? []);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unexpected fetch list error.",
      );
    } finally {
      setLoadingPaymentMethods(false);
    }
  };

  useEffect(() => {
    if (!isMissingPublishableKey) {
      void createSetupIntent();
      void fetchPaymentMethods();
    }
  }, [isMissingPublishableKey]);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col gap-6 px-4 py-10">
      <h1 className="text-2xl font-semibold">
        Testing ACH Payment Method Test
      </h1>
      <p className="text-sm text-gray-600">
        This page creates an ACH setup intent from your Nest backend and
        confirms it using Stripe Elements.
      </p>

      {isMissingPublishableKey && (
        <p className="rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700">
          Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY in frontend env.
        </p>
      )}

      {loadingIntent && (
        <p className="rounded-md border border-blue-300 bg-blue-50 p-3 text-sm text-blue-700">
          Creating ACH setup intent...
        </p>
      )}

      {status && (
        <p className="rounded-md border border-green-300 bg-green-50 p-3 text-sm text-green-700">
          {status}
        </p>
      )}
      {error && (
        <p className="rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </p>
      )}

      {clientSecret && !isMissingPublishableKey && (
        <div className="rounded-lg border p-4">
          <Elements stripe={stripePromise} options={stripeElementsOptions}>
            <AchSetupForm
              onSuccess={(message) => {
                setStatus(message);
                // Stripe ACH attach can be slightly delayed; refresh once immediately and once after delay.
                void fetchPaymentMethods();
                setTimeout(() => {
                  void fetchPaymentMethods();
                }, 1500);
                void createSetupIntent();
              }}
            />
          </Elements>
        </div>
      )}

      <div className="rounded-lg border p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Saved ACH methods</h2>
          <button
            onClick={() => void fetchPaymentMethods()}
            type="button"
            className="rounded-md border px-3 py-1.5 text-sm"
            disabled={loadingPaymentMethods}
          >
            {loadingPaymentMethods ? "Refreshing..." : "Refresh"}
          </button>
        </div>
        <p className="mb-3 text-xs text-gray-500">
          Debug customer id: {activeCustomerId || "N/A"}
        </p>

        {paymentMethods.length === 0 ? (
          <p className="text-sm text-gray-600">No ACH methods saved yet.</p>
        ) : (
          <ul className="space-y-2">
            {paymentMethods.map((paymentMethod) => (
              <li key={paymentMethod.id} className="rounded-md border p-3">
                <p className="font-medium">{paymentMethod.bankName}</p>
                <p className="text-sm text-gray-700">
                  **** {paymentMethod.last4} | {paymentMethod.accountType} |{" "}
                  {paymentMethod.accountHolderType}
                </p>
                <p className="text-xs text-gray-500">{paymentMethod.id}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
