export async function getAIInsights(transcript: string) {
  const res = await fetch("http://localhost:5000/api/ai/insights", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ transcript }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch AI insights");
  }

  return res.json();
}
