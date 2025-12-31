import Groq from "groq-sdk";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // ✅ CORS HEADERS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { text } = req.body;

    if (!text || text.length < 20) {
      return res.status(400).json({ error: "Text too short" });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: "Return ONLY valid JSON. No explanation.",
        },
        {
          role: "user",
          content: `
{
  "sentiment": "positive | neutral | negative",
  "score": number,
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

    const raw = completion.choices[0].message.content || "";
    const json = raw.match(/\{[\s\S]*\}/);

    if (!json) throw new Error("Invalid JSON from Groq");

    return res.status(200).json(JSON.parse(json[0]));
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return res.status(500).json({ error: message });
  }
}
