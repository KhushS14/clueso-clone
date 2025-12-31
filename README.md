Clueso Clone – AI-Powered Feedback & Video Dashboard

A frontend-focused clone inspired by **Clueso**, built using **React, TypeScript, and Tailwind CSS**, featuring:
- User authentication UI
- Dashboard with video thumbnails
- AI-powered live feedback insights
- Clean, modern SaaS-style interface

This project demonstrates frontend architecture, state management, UI design, and AI integration concepts.

---

  Tech Stack

   Frontend
- **React + TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router**
- **TanStack React Query**
- **Lucide Icons**

   AI Integration
- **Groq API** (LLaMA 3.1 model) for real-time feedback analysis

   Deployment
- **Vercel** (SPA with rewrite rules)

---
  Project Setup & Installation

  Clone the Repository

git clone https://github.com/KhushS14/Assignment1.git
cd Assignment1/frontend

Install Dependencies
npm install

Environment Variables
 - Create a .env file in the frontend (or backend if applicable):
 - VITE_GROQ_API_KEY=your_groq_api_key_here
⚠️ Never commit .env files to GitHub

Running the Project Locally:
npm run dev


Architecture Overview:

1. High Level Architecture:

 Frontend (React + Vite)
│
├── Pages
│   ├── Auth (Login / Signup)
│   ├── Dashboard
│   ├── Create Video
│   └── Videos
│
├── Components
│   ├── FeedbackForm
│   ├── FeedbackList
│   ├── Loader
│   └── UI (Buttons, Cards, Inputs)
│
├── State Management
│   └── React Hooks (useState, useEffect)
│
├── AI Integration
│   └── /api/ai/feedback-insights (Groq API)
│
└── Routing
    └── React Router (SPA)
2. Feedback Flow (AI Insights):

 User types feedback
        ↓
Debounced API call
        ↓
Groq AI analyzes sentiment
        ↓
Insights displayed live
        ↓
On submit → Feedback added to Dashboard state
   
Author

Khush Suvarna
GitHub: KhushS14




