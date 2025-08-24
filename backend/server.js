const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Groq } = require("groq-sdk");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.post("/ask", async (req, res) => {
  const { prompt } = req.body;

  try {
    const modelName = process.env.MODEL_NAME || "llama3-8b-8192";

    const response = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: modelName,
    });

    res.json({ answer: response.choices[0].message.content });
  } catch (error) {
    console.error("Error from Groq:", error.message || error);
    res.status(500).json({ error: "Something went wrong on server." });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
