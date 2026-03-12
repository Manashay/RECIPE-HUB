import Groq from "groq-sdk";

export const generateAiRecipe = async (req, res) => {
  console.log("GROQ KEY:", process.env.GROQ_API_KEY);
  const { prompt } = req.body;

  if (!prompt) return res.status(400).json({ error: "Prompt is required" });

  try {
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(prompt)}`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: `You are a professional chef. The user wants: "${prompt}".
Return ONLY valid JSON (no markdown, no backticks) in this exact format:
{
  "title": "Recipe name",
  "description": "2 sentence description",
  "prepTime": "X mins",
  "cookTime": "X mins",
  "servings": "X",
  "difficulty": "Easy/Medium/Hard",
  "tags": ["tag1", "tag2"],
  "ingredients": ["ing 1", "ing 2"],
  "steps": ["Step 1", "Step 2"],
  "tips": "Pro tip",
  "links": [
    { "platform": "YouTube", "title": "Search Results", "url": "${youtubeUrl}", "icon": "▶" }
  ]
}`
        }
      ],
      temperature: 1,
      max_tokens: 1024,
    });

    const text = completion.choices[0].message.content.replace(/```json|```/g, "").trim();
    res.json(JSON.parse(text));

  } catch (error) {
    console.error("AI Error:", error.message);
    res.status(500).json({ error: "AI failed to generate recipe", detail: error.message });
  }
};