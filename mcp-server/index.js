// index.js
import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import { getContext } from './contextManager.js';

dotenv.config();

const app = express();
app.use(express.json());

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

app.post('/ask', async (req, res) => {
  const { question } = req.body;

  if (!question) return res.status(400).json({ error: 'Question is required' });

  const context = getContext(question);
  const prompt = `Context: ${context}\n\nQuestion: ${question}`;

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'mistralai/mistral-7b-instruct', // ✅ Free model
        messages: [
          { role: 'system', content: 'You are an intelligent assistant.' },
          { role: 'user', content: prompt },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3000', // optional
          'X-Title': 'MCP-Server', // optional
        },
      }
    );

    const answer = response.data.choices[0].message.content;
    console.log(answer);
    res.json({ answer });
  } catch (err) {
    console.error(err?.response?.data || err.message);
    res.status(500).json({ error: 'OpenRouter API failed. Check API key or quota.' });
  }
});

app.listen(3000, () => {
  console.log('🚀 MCP Server (OpenRouter + Mistral) running at http://localhost:3000');
});
