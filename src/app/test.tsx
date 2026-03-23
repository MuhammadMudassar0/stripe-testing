"use client";
/* eslint-disable */

import { useState, useCallback } from "react";

const sections = [
  {
    id: "foundation",
    title: "Foundation: Number Skills",
    notes: [
      {
        heading: "Multiplication with Negatives",
        content:
          "Same signs → Positive\nDifferent signs → Negative\n\n(+) × (+) = (+)    e.g. 3 × 4 = 12\n(+) × (−) = (−)    e.g. 3 × (−4) = −12\n(−) × (−) = (+)    e.g. (−3) × (−4) = 12",
      },
      {
        heading: "Division with Negatives",
        content:
          "Same rule as multiplication:\nSame signs → Positive\nDifferent signs → Negative\n\n12 ÷ 4 = 3\n(−12) ÷ 4 = −3\n(−12) ÷ (−4) = 3",
      },
      {
        heading: "Multiplying Fractions",
        content:
          "Multiply tops together, multiply bottoms together:\n\n  2     4      2 × 4      8\n --- × --- = ------- = ----\n  3     5      3 × 5     15\n\nAlways simplify if you can!",
      },
      {
        heading: "Dividing Fractions (KFC: Keep Flip Change)",
        content:
          "Keep the first fraction\nFlip the second fraction\nChange ÷ to ×\n\n  2     4      2     5     10      5\n --- ÷ --- = --- × --- = ---- = ---\n  3     5      3     4     12      6",
      },
    ],
    questions: [
      {
        q: "(−5) × 3 = ?",
        a: "-15",
        hint: "Different signs → negative. 5 × 3 = 15, so answer is −15",
      },
      {
        q: "(−8) ÷ (−2) = ?",
        a: "4",
        hint: "Same signs → positive. 8 ÷ 2 = 4",
      },
      {
        q: "6 × (−7) = ?",
        a: "-42",
        hint: "Different signs → negative. 6 × 7 = 42",
      },
      {
        q: "(−4) × (−9) = ?",
        a: "36",
        hint: "Same signs → positive. 4 × 9 = 36",
      },
      {
        q: "1/2 × 3/4 = ? (write as a fraction e.g. 3/8)",
        a: "3/8",
        hint: "Multiply tops: 1×3=3. Multiply bottoms: 2×4=8",
      },
      {
        q: "2/5 × 5/6 = ? (simplify your answer)",
        a: "1/3",
        hint: "2×5=10, 5×6=30 → 10/30 = 1/3",
      },
      {
        q: "3/4 ÷ 1/2 = ? (write as a fraction or whole number)",
        a: "3/2",
        hint: "Keep 3/4, flip 1/2 to 2/1, multiply: 3/4 × 2/1 = 6/4 = 3/2",
      },
      {
        q: "5/6 ÷ 2/3 = ? (simplify)",
        a: "5/4",
        hint: "Keep 5/6, flip 2/3 to 3/2, multiply: 5/6 × 3/2 = 15/12 = 5/4",
      },
    ],
  },
  {
    id: "1.1",
    title: "1.1 Reciprocals",
    notes: [
      {
        heading: "What is a Reciprocal?",
        content:
          "The reciprocal of a number is what you multiply it by to get 1.\n\nIn simple terms: FLIP the number!\n\nA number × its reciprocal = 1  (ALWAYS)",
      },
      {
        heading: "Reciprocal of a Whole Number",
        content:
          "Any whole number can be written as a fraction over 1.\n\n5 = 5/1  →  reciprocal = 1/5\n\nCheck: 5 × 1/5 = 5/5 = 1  ✓\n\n3 = 3/1  →  reciprocal = 1/3\n8 = 8/1  →  reciprocal = 1/8",
      },
      {
        heading: "Reciprocal of a Fraction",
        content:
          "Just flip the fraction!\n\n  3              4\n ---  →  reciprocal =  ---\n  4              3\n\nCheck: 3/4 × 4/3 = 12/12 = 1  ✓\n\n  2              7\n ---  →  reciprocal =  ---\n  7              2",
      },
      {
        heading: "Reciprocal of a Decimal",
        content:
          "Method: divide 1 by the decimal\n\n0.5 → 1 ÷ 0.5 = 2\n0.25 → 1 ÷ 0.25 = 4\n0.2 → 1 ÷ 0.2 = 5\n\nOR convert to a fraction first:\n0.5 = 1/2  →  flip  →  2/1 = 2",
      },
      {
        heading: "⚠️ Special Case: Zero has NO reciprocal",
        content:
          "0 has NO reciprocal because nothing multiplied by 0 gives 1.\n\n0 × ? = 1  ← impossible!\n\nDividing by zero is undefined in mathematics.",
      },
      {
        heading: "Reciprocals of Negative Numbers",
        content:
          "The negative sign stays!\n\n−3 = −3/1  →  reciprocal = −1/3\n\n  −2              −5       5\n ----  →  reciprocal = ---- = − ---\n   5               2       2\n\nCheck: (−2/5) × (−5/2) = 10/10 = 1  ✓",
      },
    ],
    questions: [
      {
        q: "What is the reciprocal of 4?",
        a: "1/4",
        hint: "4 = 4/1, flip it → 1/4",
      },
      {
        q: "What is the reciprocal of 1/3?",
        a: "3",
        hint: "Flip 1/3 → 3/1 = 3",
      },
      { q: "What is the reciprocal of 2/7?", a: "7/2", hint: "Flip 2/7 → 7/2" },
      {
        q: "What is the reciprocal of 0.5?",
        a: "2",
        hint: "1 ÷ 0.5 = 2, or 0.5 = 1/2, flip → 2",
      },
      {
        q: "What is the reciprocal of 1?",
        a: "1",
        hint: "1 = 1/1, flip → 1/1 = 1. It's its own reciprocal!",
      },
      {
        q: "What is the reciprocal of 0.25?",
        a: "4",
        hint: "1 ÷ 0.25 = 4, or 0.25 = 1/4, flip → 4",
      },
      {
        q: "Does 0 have a reciprocal? (yes/no)",
        a: "no",
        hint: "Nothing × 0 = 1, so no reciprocal exists",
      },
      {
        q: "What is the reciprocal of −5?",
        a: "-1/5",
        hint: "−5 = −5/1, flip → −1/5. The negative stays!",
      },
      { q: "What is the reciprocal of 3/8?", a: "8/3", hint: "Flip 3/8 → 8/3" },
      {
        q: "What is 7 × 1/7?",
        a: "1",
        hint: "A number × its reciprocal always = 1",
      },
      {
        q: "What is the reciprocal of −2/3?",
        a: "-3/2",
        hint: "Flip 2/3 → 3/2, keep the negative → −3/2",
      },
      {
        q: "What is the reciprocal of 0.1?",
        a: "10",
        hint: "0.1 = 1/10, flip → 10",
      },
    ],
  },
  {
    id: "1.1-challenge",
    title: "1.1 Challenge Problems",
    notes: [
      {
        heading: "Why Reciprocals Matter",
        content:
          "Dividing by a number is the SAME as multiplying by its reciprocal.\n\n12 ÷ 4  =  12 × 1/4  =  3\n\nThis is why 'Keep Flip Change' works for dividing fractions!",
      },
      {
        heading: "Reciprocal Patterns",
        content:
          "• The reciprocal of a reciprocal gives back the original number\n  reciprocal of 5 is 1/5, reciprocal of 1/5 is 5\n\n• Numbers greater than 1 have reciprocals less than 1 (and vice versa)\n  5 → 1/5       1/3 → 3\n\n• 1 and −1 are the only numbers that are their own reciprocals",
      },
    ],
    questions: [
      {
        q: "If the reciprocal of x is 1/9, what is x?",
        a: "9",
        hint: "Reciprocal of x is 1/9, so x must be 9 (flip 1/9)",
      },
      {
        q: "Calculate: 3/5 ÷ 9/10 using reciprocals (simplify)",
        a: "2/3",
        hint: "3/5 × 10/9 = 30/45 = 2/3",
      },
      {
        q: "The reciprocal of a number is 0.125. What is the number?",
        a: "8",
        hint: "0.125 = 1/8, flip → 8",
      },
      {
        q: "What is the reciprocal of 1.5? (give as a fraction)",
        a: "2/3",
        hint: "1.5 = 3/2, flip → 2/3",
      },
      {
        q: "Is it true that a number is always bigger than its reciprocal? (yes/no)",
        a: "no",
        hint: "Try 1/3: its reciprocal is 3, which is bigger. Only true for numbers > 1",
      },
      {
        q: "Calculate: 2/3 × (reciprocal of 2/3)",
        a: "1",
        hint: "Any number × its reciprocal = 1, always!",
      },
    ],
  },
];

function parseFrac(s: string) {
  s = s.trim().replace(/\s/g, "");
  const neg = s.startsWith("-");
  if (neg) s = s.slice(1);
  let val;
  if (s.includes("/")) {
    const [n, d] = s.split("/").map(Number);
    if (!d || isNaN(n) || isNaN(d)) return NaN;
    val = n / d;
  } else {
    val = parseFloat(s);
  }
  return neg ? -val : val;
}

function checkAnswer(userAns: string, correctAns: string) {
  const u = userAns.trim().toLowerCase();
  const c = correctAns.trim().toLowerCase();
  if (u === c) return true;
  if (c === "yes" || c === "no") return u === c;
  const uv = parseFrac(u),
    cv = parseFrac(c);
  if (isNaN(uv) || isNaN(cv)) return false;
  return Math.abs(uv - cv) < 0.001;
}

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});
  const [showNotes, setShowNotes] = useState(true);

  const section = sections[currentSection];

  const handleSubmit = useCallback(
    (sIdx: number, qIdx: number) => {
      const key = `${sIdx}-${qIdx}`;
      const userAns = answers[key] || "";
      const correct = checkAnswer(userAns, section.questions[qIdx].a);
      setResults((p) => ({ ...p, [key]: correct }));
    },
    [answers, section],
  );

  const toggleHint = useCallback((sIdx: number, qIdx: number) => {
    const key = `${sIdx}-${qIdx}`;
    setShowHints((p) => ({ ...p, [key]: !p[key] }));
  }, []);

  const score = section.questions.reduce((acc, _, i) => {
    const key = `${currentSection}-${i}`;
    return acc + (results[key] === true ? 1 : 0);
  }, 0);
  const attempted = section.questions.reduce((acc, _, i) => {
    const key = `${currentSection}-${i}`;
    return acc + (results[key] !== undefined ? 1 : 0);
  }, 0);

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        maxWidth: 720,
        margin: "0 auto",
        padding: "16px",
      }}
    >
      {/* Section Navigation */}
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}
      >
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrentSection(i)}
            style={{
              padding: "8px 14px",
              borderRadius: 8,
              border:
                i === currentSection
                  ? "2px solid var(--text-color, #333)"
                  : "1px solid #ccc",
              background:
                i === currentSection
                  ? "var(--text-color, #333)"
                  : "transparent",
              color: i === currentSection ? "#fff" : "var(--text-color, #555)",
              fontWeight: i === currentSection ? 700 : 400,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            {s.title}
          </button>
        ))}
      </div>

      <h2 style={{ fontSize: 22, marginBottom: 4 }}>{section.title}</h2>

      {/* Notes Toggle */}
      <button
        onClick={() => setShowNotes((p) => !p)}
        style={{
          padding: "6px 16px",
          borderRadius: 6,
          border: "1px solid #ccc",
          background: showNotes ? "#e8f5e9" : "transparent",
          cursor: "pointer",
          fontSize: 13,
          marginBottom: 16,
          fontWeight: 500,
        }}
      >
        {showNotes ? "📖 Hide Notes" : "📖 Show Notes"}
      </button>

      {/* Notes Section */}
      {showNotes && (
        <div style={{ marginBottom: 24 }}>
          {section.notes.map((note, i) => (
            <div
              key={i}
              style={{
                background: "var(--card-bg, #f7f9fc)",
                border: "1px solid #e0e4ea",
                borderRadius: 10,
                padding: 16,
                marginBottom: 10,
              }}
            >
              <h3
                style={{
                  fontSize: 15,
                  margin: "0 0 8px",
                  color: "var(--text-color, #1a1a2e)",
                }}
              >
                {note.heading}
              </h3>
              <pre
                style={{
                  fontFamily: "monospace",
                  fontSize: 13.5,
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.6,
                  margin: 0,
                  color: "var(--text-color, #333)",
                }}
              >
                {note.content}
              </pre>
            </div>
          ))}
        </div>
      )}

      {/* Questions */}
      <h3 style={{ fontSize: 17, marginBottom: 12 }}>
        Practice Questions{" "}
        {attempted > 0 && (
          <span style={{ fontSize: 14, fontWeight: 400, color: "#666" }}>
            ({score}/{attempted} correct)
          </span>
        )}
      </h3>

      {section.questions.map((item, i) => {
        const key = `${currentSection}-${i}`;
        const result = results[key];
        const hintVisible = showHints[key];

        return (
          <div
            key={key}
            style={{
              padding: 14,
              marginBottom: 10,
              borderRadius: 10,
              border:
                result === true
                  ? "2px solid #4caf50"
                  : result === false
                    ? "2px solid #f44336"
                    : "1px solid #ddd",
              background:
                result === true
                  ? "#e8f5e930"
                  : result === false
                    ? "#ffebee30"
                    : "transparent",
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 8 }}>
              Q{i + 1}: {item.q}
            </div>
            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <input
                type="text"
                value={answers[key] || ""}
                onChange={(e) => {
                  setAnswers((p) => ({ ...p, [key]: e.target.value }));
                  setResults((p) => {
                    const n = { ...p };
                    delete n[key];
                    return n;
                  });
                }}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleSubmit(currentSection, i)
                }
                placeholder="Your answer..."
                style={{
                  padding: "8px 12px",
                  borderRadius: 6,
                  border: "1px solid #ccc",
                  fontSize: 14,
                  flex: 1,
                  minWidth: 120,
                }}
              />
              <button
                onClick={() => handleSubmit(currentSection, i)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 6,
                  border: "none",
                  background: "#1976d2",
                  color: "#fff",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: 13,
                }}
              >
                Check
              </button>
              <button
                onClick={() => toggleHint(currentSection, i)}
                style={{
                  padding: "8px 12px",
                  borderRadius: 6,
                  border: "1px solid #ccc",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: 13,
                }}
              >
                💡 Hint
              </button>
            </div>
            {result === true && (
              <div
                style={{
                  color: "#4caf50",
                  fontWeight: 600,
                  marginTop: 6,
                  fontSize: 13,
                }}
              >
                ✅ Correct!
              </div>
            )}
            {result === false && (
              <div style={{ color: "#f44336", marginTop: 6, fontSize: 13 }}>
                ❌ Not quite. Try again or check the hint.{" "}
                <span style={{ color: "#999" }}>(Answer: {item.a})</span>
              </div>
            )}
            {hintVisible && (
              <div
                style={{
                  marginTop: 8,
                  padding: 10,
                  background: "#fff8e1",
                  borderRadius: 6,
                  fontSize: 13,
                  color: "#6d4c00",
                  lineHeight: 1.5,
                }}
              >
                💡 {item.hint}
              </div>
            )}
          </div>
        );
      })}

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 24,
          gap: 12,
        }}
      >
        <button
          onClick={() => setCurrentSection((p) => Math.max(0, p - 1))}
          disabled={currentSection === 0}
          style={{
            padding: "10px 20px",
            borderRadius: 8,
            border: "1px solid #ccc",
            background: currentSection === 0 ? "#eee" : "#fff",
            cursor: currentSection === 0 ? "default" : "pointer",
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          ← Previous
        </button>
        <button
          onClick={() =>
            setCurrentSection((p) => Math.min(sections.length - 1, p + 1))
          }
          disabled={currentSection === sections.length - 1}
          style={{
            padding: "10px 20px",
            borderRadius: 8,
            border: "none",
            background:
              currentSection === sections.length - 1 ? "#ccc" : "#1976d2",
            color: "#fff",
            cursor:
              currentSection === sections.length - 1 ? "default" : "pointer",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Next →
        </button>
      </div>

      <p
        style={{
          textAlign: "center",
          color: "#999",
          fontSize: 12,
          marginTop: 20,
        }}
      >
        Covers: Foundation → 1.1 Reciprocals → 1.1 Challenge • More sections
        coming!
      </p>
    </div>
  );
}
