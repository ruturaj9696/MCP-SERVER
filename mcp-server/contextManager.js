// contextManager.js

export function getContext(question) {
    const lowerQ = question.toLowerCase();
  
    if (lowerQ.includes('chatgpt')) {
      return 'ChatGPT is a language model developed by OpenAI to assist with natural language understanding.';
    }
  
    if (lowerQ.includes('llm')) {
      return 'Large Language Models (LLMs) are AI systems trained on large datasets to understand and generate human language.';
    }
  
    return 'General AI knowledge.';
  }
