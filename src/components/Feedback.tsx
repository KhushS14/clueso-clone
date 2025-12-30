import { useState } from "react";
import { Button } from "@/components/ui/button";

export function FeedbackForm() {
  const [type, setType] = useState("general");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitFeedback = async () => {
    if (!message.trim()) return;

    setLoading(true);

    await fetch("http://localhost:5000/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type,
        message,
      }),
    });

    setMessage("");
    setLoading(false);
  };

  return (
    <div className="p-6 rounded-xl border bg-card">
      <h2 className="text-lg font-semibold mb-4">Send Feedback</h2>

      {/* FEEDBACK TYPE */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full mb-3 rounded-md border bg-background px-3 py-2 text-sm"
      >
        <option value="general">General Feedback</option>
        <option value="bug">Bug Report</option>
        <option value="feature">Feature Request</option>
        <option value="ui">UI / UX Feedback</option>
      </select>

      {/* MESSAGE */}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your feedback here..."
        className="w-full min-h-[100px] rounded-md border bg-background px-3 py-2 text-sm mb-3"
      />

      <Button onClick={submitFeedback} disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </Button>
    </div>
  );
}
