# ⚖️ Legal Assistant for Students 🧠📚

An AI-powered legal helpdesk built with LLM, RAG, and Function Calling — designed specifically to help students understand their rights, policies, and processes in colleges/universities. Just ask your question in natural language, and get answers backed by real legal sources.

---

## 🚀 Features

- 🔍 Ask questions like:
  - "Can I take a medical leave during exams?"
  - "What are the rules for hostel eviction?"
  - "How do I file an RTI against my college?"

- 📚 Powered by **RAG** (Retrieval-Augmented Generation)
  - Fetches answers from UGC guidelines, Indian RTI Act, exam rules, college PDFs

- 🧠 Uses **Prompt Engineering** to simplify legal answers for students

- 📦 Gives **Structured Output** with references, documents required, and next steps

- ⚙️ Supports **Function Calling**:
  - Get last dates
  - Download forms
  - Fetch specific law sections
  - Email reminders for form submission


## 📦 Sample Prompt & Output

**Prompt**:  
> "I missed my exam due to illness. What can I do?"

**Response**:
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
