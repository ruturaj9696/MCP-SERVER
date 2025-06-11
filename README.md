```
# 🧠 MCP Server — A Simple Context-Aware AI Assistant

This is a minimal implementation of an **MCP Server (Model Context Protocol)** — designed to provide relevant context to your questions before passing them to an LLM (Large Language Model).

> 🛠️ Built out of curiosity to understand how MCP Servers actually work in AI pipelines.

---

## 📌 What It Does

When you send a question like:

```

What is ChatGPT?

```

The server:

1. Detects keywords like `"chatgpt"` or `"llm"` using `contextManager.js`
2. Provides relevant context such as:
   > "ChatGPT is a language model developed by OpenAI..."
3. Combines the context and question into a prompt
4. Sends the prompt to **Mistral 7B** (a free model via OpenRouter)
5. Returns a more accurate and focused answer

---

## 📁 Project Structure

```

mcp-server/
├── index.js              # Main Express server
├── contextManager.js     # Returns context based on question keywords
├── .env                  # Contains your OpenRouter API key
├── package.json
└── README.md

````

---

## 🚀 How to Run

### 1. Clone the repo

```bash
git clone https://github.com/your-username/mcp-server.git
cd mcp-server
````

### 2. Install dependencies

```bash
npm install
```

### 3. Add your OpenRouter API key

Create a `.env` file:

```env
OPENROUTER_API_KEY=sk-or-xxxxxxxxxxxxxxxxxx
```

> ✅ You can get a free key at: [https://openrouter.ai](https://openrouter.ai)

### 4. Start the server

```bash
npm start
```

You’ll see:

```
🚀 MCP Server (OpenRouter + Mistral) running at http://localhost:3000
```

---

## 📬 How to Use the API

### POST `/ask`

**Request Body:**

```json
{
  "question": "What is ChatGPT?"
}
```

**Response:**

```json
{
  "answer": "ChatGPT is a language model developed by OpenAI..."
}
```

---

## 📘 contextManager.js

Currently supports basic keywords:

* `chatgpt` → ChatGPT context
* `llm` → LLM context
* anything else → General AI context

> You can expand this file to handle custom business contexts, FAQs, or even live data!

---

## 🤖 Free Model Used

* **Model:** `mistralai/mistral-7b-instruct`
* **Provider:** [OpenRouter](https://openrouter.ai)

---

## ✨ Contributions

PRs are welcome! Fork the repo, improve the context manager, or add new model support.

---

## 🔗 Author

Made with ❤️ by [Ruturaj Deshmukh](https://www.linkedin.com/in/ruturaj-deshmukh-2a4b73222/)
