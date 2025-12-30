import { useEffect, useState } from "react";

interface Feedback {
  _id: string;
  type: string;
  message: string;
}

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/feedback")
      .then((res) => res.json())
      .then(setFeedbacks);
  }, []);

  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-4">
      <h2 className="text-lg font-semibold">User Feedback</h2>

      {feedbacks.length === 0 && (
        <p className="text-muted-foreground text-sm">
          No feedback yet.
        </p>
      )}

      {feedbacks.map((fb) => (
        <div
          key={fb._id}
          className="border border-border rounded-md p-3"
        >
          <span className="text-xs uppercase text-muted-foreground">
            {fb.type}
          </span>
          <p className="mt-1">{fb.message}</p>
        </div>
      ))}
    </div>
  );
}
