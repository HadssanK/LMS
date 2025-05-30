import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",  // React local dev server
  "https://my-ai-blog-qnbm.vercel.app", // Live frontend origin
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, mobile apps, or curl)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("❌ Blocked Origin:", origin); // 👈 debug on server
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["POST", "GET", "OPTIONS"],
    allowedHeaders: ["Content-Type", "x-goog-api-key"],
  })
);


app.use(express.json());

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.GOOGLE_API_KEY;

app.post("/api/generate", async (req, res) => {
  const { topic } = req.body;

  if (!topic) return res.status(400).json({ error: "Topic is required" });

  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent",
      {
        contents: [
          {
            parts: [{ text: `Write a blog article about: ${topic}` }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": API_KEY,
        },
      }
    );

    const generatedText = response.data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      return res.status(500).json({ error: "No content generated" });
    }

    res.json({ generated_text: generatedText });
  } catch (error) {
    console.error("❌ Error generating content:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to generate content from Gemini" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
