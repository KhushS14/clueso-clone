import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

type AIInsights = {
  sentiment: string;
  score: number;
  issues: string[];
  suggestion: string;
};

export default function FeedbackForm() {
  const [type, setType] = useState("bug");
  const [message, setMessage] = useState("");

  const [insights, setInsights] = useState<AIInsights | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // 🔮 LIVE AI ANALYSIS (DEBOUNCED)
  useEffect(() => {
    if (message.trim().length < 20) {
      setInsights(null);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setAnalyzing(true);

        const res = await fetch(
          "https://assignment1-red-mu.vercel.app/api/ai/feedback-insights",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: message }),
          }
        );

        const data = await res.json();

        // guard against backend error
        if (data?.error) {
          setInsights(null);
          return;
        }

        setInsights(data);
      } catch (err) {
        console.error("AI insight error:", err);
        setInsights(null);
      } finally {
        setAnalyzing(false);
      }
    }, 800);

    return () => clearTimeout(timeout);
  }, [message]);

  // ✅ SUBMIT FEEDBACK
  const submitFeedback = async () => {
    if (!message.trim()) return;

    setSubmitting(true);

    try {
      await fetch("https://assignment1-red-mu.vercel.app/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          message,
          insights,
        }),
      });

      // reset form
      setMessage("");
      setInsights(null);
    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-4">
      <h2 className="text-lg font-semibold">Send Feedback</h2>

      {/* Feedback Type */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full rounded-md border border-border bg-background p-2"
      >
        <option value="bug">🐞 Bug</option>
        <option value="feature">✨ Feature Request</option>
        <option value="ui">🎨 UI / UX</option>
        <option value="general">💬 General</option>
      </select>

      {/* Message */}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your feedback..."
        className="w-full min-h-[120px] rounded-md border border-border bg-background p-3"
      />

      {/* 🔮 LIVE AI INSIGHTS */}
      <div className="rounded-lg border bg-muted p-4">
        {analyzing && (
          <p className="text-sm text-muted-foreground">
            🤖 Analyzing feedback…
          </p>
        )}

        {insights && !analyzing && (
          <div className="space-y-2 text-sm">
            <p>
              <strong>Sentiment:</strong> {insights.sentiment}
            </p>
            <p>
              <strong>Score:</strong> {insights.score}/5
            </p>

            <div>
              <strong>Key Issues:</strong>
              <ul className="list-disc ml-5">
                {insights.issues.map((issue) => (
                  <li key={issue}>{issue}</li>
                ))}
              </ul>
            </div>

            <p>
              <strong>Suggestion:</strong> {insights.suggestion}
            </p>
          </div>
        )}

        {!insights && !analyzing && message.length < 20 && (
          <p className="text-sm text-muted-foreground">
            Type at least 20 characters to see AI insights
          </p>
        )}
      </div>

      <Button onClick={submitFeedback} disabled={submitting}>
        {submitting ? "Submitting..." : "Submit"}
      </Button>
    </div>
  );
}
