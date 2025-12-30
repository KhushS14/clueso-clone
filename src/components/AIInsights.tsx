import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";





export default function AIInsights() {
    
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState("");
  const [highlights, setHighlights] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/ai/insights", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        transcript: "User signs up and creates a video"
      })
    })
      .then(res => res.json())
      .then(data => {
        setSummary(data.summary);
        setHighlights(data.highlights || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
     
      <div className="p-6 rounded-xl border bg-card">
        <p className="text-muted-foreground">
          Analyzing video with AI…
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl border bg-card">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="text-pink-500" />
        <h2 className="text-lg font-semibold">
          AI Insights (Mock)
        </h2>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        {summary}
      </p>

      <ul className="list-disc pl-5 space-y-1 text-sm">
        {highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
