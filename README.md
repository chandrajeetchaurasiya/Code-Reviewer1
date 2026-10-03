# CodeReviewer

An AI-powered code review web application that allows developers to submit JavaScript code and receive structured feedback using **Google Gemini 2.5 Flash**.

## 🚀 Features

* 📝 JavaScript code editor
* 🎨 Syntax highlighting with PrismJS
* 🤖 AI-powered code review
* 📋 Structured feedback
* 📖 Markdown-rendered responses
* 🔌 REST API with Express.js
* ⚡ React + Vite frontend
* 🔐 Secure backend API key handling

## 🛠️ Tech Stack

**Frontend:** React, Vite, Axios, PrismJS, React Markdown, CSS

**Backend:** Node.js, Express.js, CORS, dotenv

**AI:** Google Gemini 2.5 Flash

## 🏗️ Architecture

```text
React Frontend
      ↓
Axios
      ↓
Express.js Backend
      ↓
AI Service
      ↓
Google Gemini
      ↓
Code Review
```

## ⚙️ Setup

```bash
git clone https://github.com/chandrajeetchaurasiya/Code-Reviewer1.git
cd Code-Reviewer1
```

### Backend

```bash
cd Backend
npm install
```

Create `.env`:

```env
GOOGLE_GEMINI_KEY=your_gemini_api_key
```

Start backend:

```bash
npm run dev
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

## 🔌 API

```text
POST /ai/get-review
```

Request:

```json
{
  "code": "function sum(a, b) { return a + b; }"
}
```

## 📌 Current Limitations

* JavaScript-focused editor
* No authentication
* No database or review history
* Automated tests not yet implemented
* Mobile responsiveness can be improved

## 🚀 Future Improvements

* Authentication
* Review history
* Database integration
* Multiple programming languages
* Automated testing
* API rate limiting
* Mobile responsiveness

## 👨‍💻 Author

**Chandrajeet Chaurasiya**

GitHub: `chandrajeetchaurasiya`

## 📄 License

ISC License
