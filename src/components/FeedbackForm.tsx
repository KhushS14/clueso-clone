import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FeedbackForm() {
  const [type, setType] = useState("bug");
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
        className="w-full min-h-[100px] rounded-md border border-border bg-background p-3"
      />

      <Button onClick={submitFeedback} disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </Button>
    </div>
  );
}
