import { generateMockInsights } from "../services/ai.mock.js";

export const getAIInsights = (req, res) => {
  const { transcript } = req.body;

  if (!transcript) {
    return res.status(400).json({ error: "Transcript is required" });
  }

  const insights = generateMockInsights(transcript);

  res.json(insights);
};
