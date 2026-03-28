"use client";
/* eslint-disable */
import { useState } from "react";

const sections = [
  {
    id: "sequences",
    title: "📐 Part 1: Sequences",
    color: "#6C63FF",
    content: [
      {
        type: "intro",
        text: "A sequence is a list of numbers that follow a pattern. Each number in the list is called a term.",
      },
      {
        type: "concept",
        title: "🔑 Key Words",
        points: [
          "Term – each number in the sequence",
          "Common difference (d) – the number you add or subtract each time (for linear sequences)",
          "nth term – a formula that gives you any term in the sequence",
        ],
      },
      {
        type: "concept",
        title: "Linear Sequences (add the same number each time)",
        points: [
          "Example: 3, 7, 11, 15, 19, … → you add 4 each time",
          "The nth term formula = dn + (first term − d)",
          "Here d = 4, first term = 3, so nth term = 4n + (3 − 4) = 4n − 1",
        ],
      },
      {
        type: "worked",
        title: "✏️ Worked Example 1 – Finding the nth term",
        steps: [
          "Sequence: 5, 8, 11, 14, 17, …",
          "Step 1: Find the common difference → 8 − 5 = 3, so d = 3",
          "Step 2: Write 3n. When n=1, 3×1 = 3. But the first term is 5.",
          "Step 3: Difference = 5 − 3 = 2, so add 2",
          "✅ nth term = 3n + 2",
          "Check: n=1 → 3(1)+2 = 5 ✓, n=2 → 3(2)+2 = 8 ✓",
        ],
      },
      {
        type: "worked",
        title: "✏️ Worked Example 2 – Finding a specific term",
        steps: [
          "nth term = 3n + 2. Find the 10th term.",
          "Step 1: Replace n with 10",
          "Step 2: 3(10) + 2 = 30 + 2 = 32",
          "✅ The 10th term is 32",
        ],
      },
      {
        type: "concept",
        title:
          "Quadratic Sequences (differences change, but 2nd differences are equal)",
        points: [
          "Example: 2, 5, 10, 17, 26, …",
          "1st differences: 3, 5, 7, 9 (not the same)",
          "2nd differences: 2, 2, 2 (same! → it's quadratic)",
          "General form: an² + bn + c",
          "The value of 'a' = (2nd difference) ÷ 2",
        ],
      },
      {
        type: "worked",
        title: "✏️ Worked Example 3 – Quadratic Sequence",
        steps: [
          "Sequence: 3, 8, 15, 24, 35, …",
          "1st differences: 5, 7, 9, 11",
          "2nd differences: 2, 2, 2 → so a = 2÷2 = 1, meaning n²",
          "Subtract n² from each term: 3−1=2, 8−4=4, 15−9=6, 24−16=8",
          "Leftovers: 2, 4, 6, 8, … → this is 2n",
          "✅ nth term = n² + 2n",
          "Check: n=1 → 1+2=3 ✓, n=3 → 9+6=15 ✓",
        ],
      },
    ],
  },
  {
    id: "expanding",
    title: "✖️ Part 2: Expanding Brackets",
    color: "#E05C5C",
    content: [
      {
        type: "intro",
        text: "Expanding means removing brackets by multiplying. Think of it as distributing what's outside the bracket to everything inside.",
      },
      {
        type: "concept",
        title: "Single Bracket",
        points: [
          "Multiply the term outside by EVERY term inside",
          "Example: 3(x + 4) = 3×x + 3×4 = 3x + 12",
          "Example: x(2x − 5) = 2x² − 5x",
        ],
      },
      {
        type: "worked",
        title: "✏️ Worked Example 4 – Single Bracket",
        steps: [
          "Expand: 4(3x − 2)",
          "Step 1: Multiply 4 × 3x = 12x",
          "Step 2: Multiply 4 × (−2) = −8",
          "✅ Answer: 12x − 8",
        ],
      },
      {
        type: "concept",
        title: "Double Brackets – FOIL Method",
        points: [
          "FOIL stands for: First, Outer, Inner, Last",
          "Multiply each pair in order, then collect like terms",
          "(x + 3)(x + 5):",
          "  First: x × x = x²",
          "  Outer: x × 5 = 5x",
          "  Inner: 3 × x = 3x",
          "  Last: 3 × 5 = 15",
          "  Add all: x² + 5x + 3x + 15 = x² + 8x + 15",
        ],
      },
      {
        type: "worked",
        title: "✏️ Worked Example 5 – Double Brackets",
        steps: [
          "Expand: (x − 4)(x + 2)",
          "First: x × x = x²",
          "Outer: x × 2 = 2x",
          "Inner: −4 × x = −4x",
          "Last: −4 × 2 = −8",
          "Add: x² + 2x − 4x − 8",
          "✅ Answer: x² − 2x − 8",
        ],
      },
      {
        type: "concept",
        title: "Special Case – Difference of Two Squares",
        points: [
          "(a + b)(a − b) = a² − b²",
          "The middle terms cancel out!",
          "Example: (x + 5)(x − 5) = x² − 25",
        ],
      },
      {
        type: "worked",
        title: "✏️ Worked Example 6 – Perfect Square",
        steps: [
          "Expand: (x + 3)²  = (x + 3)(x + 3)",
          "First: x² | Outer: 3x | Inner: 3x | Last: 9",
          "Add: x² + 3x + 3x + 9",
          "✅ Answer: x² + 6x + 9",
        ],
      },
    ],
  },
  {
    id: "factorising",
    title: "🔢 Part 3: Factorising",
    color: "#2E9E6B",
    content: [
      {
        type: "intro",
        text: "Factorising is the OPPOSITE of expanding. You put the expression BACK into brackets. It's like finding what was multiplied together.",
      },
      {
        type: "concept",
        title: "Step 1 – Always look for a Common Factor first",
        points: [
          "Find the biggest number/letter that goes into all terms",
          "Example: 6x + 10 → common factor is 2 → 2(3x + 5)",
          "Example: x² + 4x → common factor is x → x(x + 4)",
        ],
      },
      {
        type: "worked",
        title: "✏️ Worked Example 7 – Common Factor",
        steps: [
          "Factorise: 12x² − 8x",
          "Step 1: What's the biggest factor of 12 and 8? → 4",
          "Step 2: What's the biggest power of x in both? → x",
          "Step 3: So take out 4x",
          "✅ Answer: 4x(3x − 2)",
          "Check by expanding: 4x × 3x = 12x², 4x × (−2) = −8x ✓",
        ],
      },
      {
        type: "concept",
        title: "Step 2 – Factorising Quadratics (x² + bx + c)",
        points: [
          "You need two numbers that MULTIPLY to give c and ADD to give b",
          "Then write as (x + ?)(x + ?)",
          "Example: x² + 7x + 12 → need two numbers × = 12, + = 7 → 3 and 4",
          "Answer: (x + 3)(x + 4)",
        ],
      },
      {
        type: "worked",
        title: "✏️ Worked Example 8 – Factorising a Quadratic",
        steps: [
          "Factorise: x² − 5x + 6",
          "Step 1: Need two numbers that multiply to +6 and add to −5",
          "Step 2: Try: (−2) × (−3) = +6 ✓ and (−2) + (−3) = −5 ✓",
          "✅ Answer: (x − 2)(x − 3)",
          "Check: (x−2)(x−3) = x²−3x−2x+6 = x²−5x+6 ✓",
        ],
      },
      {
        type: "worked",
        title: "✏️ Worked Example 9 – With Negatives",
        steps: [
          "Factorise: x² + 2x − 15",
          "Step 1: Need two numbers that multiply to −15 and add to +2",
          "Step 2: Try: 5 × (−3) = −15 ✓ and 5 + (−3) = +2 ✓",
          "✅ Answer: (x + 5)(x − 3)",
        ],
      },
      {
        type: "concept",
        title: "Difference of Two Squares – Factorising",
        points: [
          "If you see a² − b², always factorise as (a + b)(a − b)",
          "Example: x² − 49 = (x + 7)(x − 7)",
          "Example: x² − 16 = (x + 4)(x − 4)",
        ],
      },
    ],
  },
  {
    id: "solving",
    title: "🎯 Part 4: Solving Quadratic Equations",
    color: "#D97706",
    content: [
      {
        type: "intro",
        text: "A quadratic equation looks like ax² + bx + c = 0. Solving means finding the value(s) of x that make the equation true. There are 3 main methods.",
      },
      {
        type: "concept",
        title: "Method 1 – Factorising (easiest when it works)",
        points: [
          "Rearrange so everything = 0",
          "Factorise the left side",
          "Set each bracket = 0 and solve",
          "You usually get TWO answers (two solutions)",
        ],
      },
      {
        type: "worked",
        title: "✏️ Worked Example 10 – Solving by Factorising",
        steps: [
          "Solve: x² + 5x + 6 = 0",
          "Step 1: Factorise → (x + 2)(x + 3) = 0",
          "Step 2: Either (x + 2) = 0 → x = −2",
          "Step 3: Or (x + 3) = 0 → x = −3",
          "✅ Solutions: x = −2 or x = −3",
        ],
      },
      {
        type: "concept",
        title: "Method 2 – The Quadratic Formula (always works!)",
        points: [
          "For ax² + bx + c = 0:",
          "x = [−b ± √(b² − 4ac)] ÷ 2a",
          "The part inside the square root (b² − 4ac) is called the discriminant",
          "If discriminant > 0: two solutions",
          "If discriminant = 0: one solution",
          "If discriminant < 0: no real solutions",
        ],
      },
      {
        type: "worked",
        title: "✏️ Worked Example 11 – Quadratic Formula",
        steps: [
          "Solve: 2x² + 5x − 3 = 0",
          "a = 2, b = 5, c = −3",
          "Discriminant = 5² − 4(2)(−3) = 25 + 24 = 49",
          "√49 = 7",
          "x = (−5 + 7) ÷ 4 = 2 ÷ 4 = 0.5",
          "x = (−5 − 7) ÷ 4 = −12 ÷ 4 = −3",
          "✅ Solutions: x = 0.5 or x = −3",
        ],
      },
      {
        type: "concept",
        title: "Method 3 – Completing the Square",
        points: [
          "Rewrite x² + bx + c in the form (x + p)² + q",
          "p = b/2, then q = c − p²",
          "Example: x² + 6x + 5",
          "p = 3, so (x+3)² − 9 + 5 = (x+3)² − 4",
          "To solve: (x+3)² = 4 → x+3 = ±2 → x=−1 or x=−5",
        ],
      },
      {
        type: "worked",
        title: "✏️ Worked Example 12 – Completing the Square",
        steps: [
          "Solve: x² + 8x + 7 = 0",
          "Step 1: (x + 4)² − 16 + 7 = 0",
          "Step 2: (x + 4)² − 9 = 0",
          "Step 3: (x + 4)² = 9",
          "Step 4: x + 4 = ±3",
          "x = −4 + 3 = −1 or x = −4 − 3 = −7",
          "✅ Solutions: x = −1 or x = −7",
        ],
      },
    ],
  },
];

const practiceQuestions = [
  {
    q: "Find the nth term of the sequence: 2, 5, 8, 11, 14, …",
    a: "nth term = 3n − 1",
    hint: "Find the common difference first.",
  },
  {
    q: "Find the nth term of the sequence: 1, 4, 9, 16, 25, …",
    a: "nth term = n²",
    hint: "Check 2nd differences.",
  },
  {
    q: "Expand: 5(2x − 3)",
    a: "10x − 15",
    hint: "Multiply 5 by each term inside.",
  },
  { q: "Expand: (x + 6)(x − 2)", a: "x² + 4x − 12", hint: "Use FOIL." },
  {
    q: "Expand: (x − 5)²",
    a: "x² − 10x + 25",
    hint: "Write it as (x−5)(x−5) then FOIL.",
  },
  {
    q: "Factorise: 15x² + 10x",
    a: "5x(3x + 2)",
    hint: "Find common factor of both terms.",
  },
  {
    q: "Factorise: x² + 9x + 20",
    a: "(x + 4)(x + 5)",
    hint: "Find two numbers that × to 20 and + to 9.",
  },
  {
    q: "Factorise: x² − x − 12",
    a: "(x − 4)(x + 3)",
    hint: "Find two numbers that × to −12 and + to −1.",
  },
  {
    q: "Solve: x² − 7x + 10 = 0",
    a: "x = 2 or x = 5",
    hint: "Factorise first, then set each bracket to 0.",
  },
  {
    q: "Solve using the quadratic formula: x² + 3x − 4 = 0",
    a: "x = 1 or x = −4",
    hint: "a=1, b=3, c=−4. Calculate discriminant first.",
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("sequences");
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [hinted, setHinted] = useState<Record<number, boolean>>({});

  const toggleReveal = (i: number) =>
    setRevealed((r) => ({ ...r, [i]: !r[i] }));
  const toggleHint = (i: number) =>
    setHinted((h) => ({ ...h, [i]: !h[i] }));

  const current = sections.find((s) => s.id === activeSection);

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        background: "#0f1117",
        minHeight: "100vh",
        color: "#e2e8f0",
        padding: "0 0 40px 0",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1e1b4b, #312e81)",
          padding: "24px 20px 20px",
          textAlign: "center",
          borderBottom: "2px solid #6C63FF",
        }}
      >
        <div
          style={{
            fontSize: 13,
            color: "#a5b4fc",
            letterSpacing: 2,
            marginBottom: 6,
          }}
        >
          GCSE MATHS · YEAR 9
        </div>
        <h1 style={{ margin: 0, fontSize: 26, color: "#fff", fontWeight: 800 }}>
          Unit 2: Quadratics
        </h1>
        <p style={{ margin: "8px 0 0", color: "#c7d2fe", fontSize: 14 }}>
          Sequences · Expanding · Factorising · Solving
        </p>
      </div>

      {/* Nav */}
      <div
        style={{
          display: "flex",
          gap: 8,
          padding: "16px 16px 0",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            style={{
              padding: "10px 16px",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 700,
              background: activeSection === s.id ? s.color : "#1e2130",
              color: activeSection === s.id ? "#fff" : "#94a3b8",
              boxShadow:
                activeSection === s.id ? `0 0 14px ${s.color}55` : "none",
              transition: "all 0.2s",
            }}
          >
            {s.title}
          </button>
        ))}
        <button
          onClick={() => setActiveSection("practice")}
          style={{
            padding: "10px 16px",
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
            fontSize: 13,
            fontWeight: 700,
            background: activeSection === "practice" ? "#F59E0B" : "#1e2130",
            color: activeSection === "practice" ? "#fff" : "#94a3b8",
            boxShadow:
              activeSection === "practice" ? "0 0 14px #F59E0B55" : "none",
          }}
        >
          📝 Practice Questions
        </button>
      </div>

      <div style={{ maxWidth: 720, margin: "20px auto", padding: "0 16px" }}>
        {activeSection !== "practice" && current && (
          <div>
            <h2
              style={{ color: current.color, fontSize: 22, marginBottom: 16 }}
            >
              {current.title}
            </h2>
            {current.content.map((block, i) => {
              if (block.type === "intro")
                return (
                  <div
                    key={i}
                    style={{
                      background: "#1a1f2e",
                      borderLeft: `4px solid ${current.color}`,
                      borderRadius: 10,
                      padding: "14px 18px",
                      marginBottom: 16,
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "#cbd5e1",
                    }}
                  >
                    {block.text}
                  </div>
                );
              if (block.type === "concept")
                return (
                  <div
                    key={i}
                    style={{
                      background: "#1a1f2e",
                      borderRadius: 10,
                      padding: "16px 18px",
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: 10,
                        fontSize: 15,
                      }}
                    >
                      {block.title}
                    </div>
                    {(block.points ?? []).map((p, j) => (
                      <div
                        key={j}
                        style={{
                          color: "#cbd5e1",
                          fontSize: 14,
                          lineHeight: 1.8,
                          paddingLeft: p.startsWith(" ") ? 20 : 0,
                        }}
                      >
                        {!p.startsWith(" ") && (
                          <span
                            style={{ color: current.color, marginRight: 8 }}
                          >
                            ▸
                          </span>
                        )}
                        {p}
                      </div>
                    ))}
                  </div>
                );
              if (block.type === "worked")
                return (
                  <div
                    key={i}
                    style={{
                      background: "#1a2535",
                      border: `1px solid ${current.color}44`,
                      borderRadius: 10,
                      padding: "16px 18px",
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        color: current.color,
                        marginBottom: 12,
                        fontSize: 15,
                      }}
                    >
                      {block.title}
                    </div>
                    {(block.steps ?? []).map((s, j) => (
                      <div
                        key={j}
                        style={{
                          display: "flex",
                          gap: 10,
                          marginBottom: 6,
                          fontSize: 14,
                          color: s.startsWith("✅") ? "#4ade80" : "#e2e8f0",
                          fontWeight: s.startsWith("✅") ? 700 : 400,
                        }}
                      >
                        {!s.startsWith("✅") && (
                          <span
                            style={{
                              color: "#64748b",
                              minWidth: 20,
                              fontSize: 13,
                            }}
                          >
                            {j + 1}.
                          </span>
                        )}
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                );
              return null;
            })}
          </div>
        )}

        {activeSection === "practice" && (
          <div>
            <h2 style={{ color: "#F59E0B", fontSize: 22, marginBottom: 6 }}>
              📝 Practice Questions
            </h2>
            <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 20 }}>
              Try each question yourself, then click "Show Hint" or "Show
              Answer".
            </p>
            {practiceQuestions.map((q, i) => (
              <div
                key={i}
                style={{
                  background: "#1a1f2e",
                  borderRadius: 12,
                  padding: "18px",
                  marginBottom: 16,
                  border: "1px solid #2d3748",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      background: "#F59E0B",
                      color: "#000",
                      fontWeight: 800,
                      borderRadius: 8,
                      minWidth: 30,
                      height: 30,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      color: "#e2e8f0",
                      fontWeight: 600,
                      lineHeight: 1.5,
                    }}
                  >
                    {q.q}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <button
                    onClick={() => toggleHint(i)}
                    style={{
                      padding: "7px 14px",
                      borderRadius: 8,
                      border: "1px solid #374151",
                      background: "#252a3a",
                      color: "#94a3b8",
                      cursor: "pointer",
                      fontSize: 13,
                    }}
                  >
                    💡 {hinted[i] ? "Hide Hint" : "Show Hint"}
                  </button>
                  <button
                    onClick={() => toggleReveal(i)}
                    style={{
                      padding: "7px 14px",
                      borderRadius: 8,
                      border: "1px solid #374151",
                      background: revealed[i] ? "#166534" : "#252a3a",
                      color: revealed[i] ? "#4ade80" : "#94a3b8",
                      cursor: "pointer",
                      fontSize: 13,
                    }}
                  >
                    ✅ {revealed[i] ? "Hide Answer" : "Show Answer"}
                  </button>
                </div>
                {hinted[i] && (
                  <div
                    style={{
                      marginTop: 10,
                      padding: "10px 14px",
                      background: "#1e2d1e",
                      borderRadius: 8,
                      color: "#86efac",
                      fontSize: 13,
                    }}
                  >
                    💡 Hint: {q.hint}
                  </div>
                )}
                {revealed[i] && (
                  <div
                    style={{
                      marginTop: 10,
                      padding: "10px 14px",
                      background: "#14532d",
                      borderRadius: 8,
                      color: "#4ade80",
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    ✅ {q.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
