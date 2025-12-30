
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

console.log("GROQ_API_KEY exists:", !!process.env.GROQ_API_KEY);

import express from "express";
import cors from "cors";
import Groq from "groq-sdk";



const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});


// ✅ Health check
app.get("/", (req, res) => {
  res.send("Backend running");
});

// ✅ REAL AI INSIGHTS ROUTE
app.post("/api/ai/feedback-insights", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || text.length < 20) {
      return res.status(400).json({ error: "Text too short" });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant", // ✅ FAST + FREE
      messages: [
        {
          role: "system",
          content:
            "You analyze feedback and return ONLY valid JSON. No explanation.",
        },
        {
          role: "user",
          content: `
Return JSON ONLY in this format:
{
  "sentiment": "positive | neutral | negative",
  "score": number (1-5),
  "issues": string[],
  "suggestion": string
}

Feedback:
"${text}"
          `,
        },
      ],
      temperature: 0.2,
    });

    const raw = completion.choices[0].message.content;

    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("No JSON found in Groq response");
    }

    const insights = JSON.parse(jsonMatch[0]);
    res.json(insights);

  } catch (error) {
    console.error("GROQ ERROR:", error);
    res.status(500).json({
      error: "AI analysis failed",
      details: error?.message || error,
    });
  }
});


// ✅ Feedback submit (optional)

// ✅ Start server (ONLY ONCE)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
