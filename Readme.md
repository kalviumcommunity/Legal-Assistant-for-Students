# ⚖️ Legal Assistant for Students 🧠📚

An AI-powered legal helpdesk built with LLM, RAG, and Function Calling — designed specifically to help students understand their rights, policies, and processes in colleges/universities. Just ask your question in natural language, and get answers backed by real legal sources.

---

## 🚀 Features

* 🔍 Ask questions like:

  * "Can I take a medical leave during exams?"
  * "What are the rules for hostel eviction?"
  * "How do I file an RTI against my college?"

* 📚 Powered by **RAG** (Retrieval-Augmented Generation)

  * Fetches answers from UGC guidelines, Indian RTI Act, exam rules, college PDFs

* 🧠 Uses **Prompt Engineering** to simplify legal answers for students

* 📦 Gives **Structured Output** with references, documents required, and next steps

* ⚙️ Supports **Function Calling**:

  * Get last dates
  * Download forms
  * Fetch specific law sections
  * Email reminders for form submission

---

## 🤖 Zero-Shot Prompting Approach

This project uses **Zero-Shot Prompting** to handle any student legal or policy-related query without predefined training examples.

**How it works:**

* The model is given clear task instructions instead of examples.
* RAG fetches relevant legal context and injects it into the prompt.
* The model outputs structured JSON answers with summary, documents, steps, and references.

**Zero-Shot Prompt Template Example:**

```
You are an AI-powered legal assistant for students.
Your task: Answer any student’s legal or policy-related query clearly and concisely.

Requirements:
1. Use the provided context from laws, policies, or college PDFs.
2. Respond in structured JSON with:
   - summary
   - documents_required
   - steps
   - official_reference
3. If unsure, respond with:
{
  "summary": "Not enough information available.",
  "suggestion": "Consult your college admin or legal advisor."
}
```

By combining **Zero-Shot Prompting** with **RAG**, the assistant avoids hallucinations and always provides actionable, reference-backed answers.

---

## 📦 Sample Prompt & Output

**Prompt:**

> "I missed my exam due to illness. What can I do?"

**Response:**

```json
{
  "summary": "You are eligible for a medical re-exam if a valid medical certificate is submitted within 7 days.",
  "documents_required": [
    "Medical Certificate",
    "Leave Application"
  ],
  "steps": [
    "Get certificate from a registered doctor",
    "Submit to your department head",
    "Apply for re-exam slot online"
  ],
  "official_reference": "UGC Guidelines 2021, Clause 6.3"
}
```

---

## Future Enhancements

* Multilingual support
* Voice input/output
* College-specific dynamic document retrieval
* Anonymous query mode
