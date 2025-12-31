Clueso-clone 🚀

A full-stack web application: Modern AI-enhanced React dashboard with backend support.  
This project features a responsive UI,interactive dashboard, feedback tools, and real-time insights using AI APIs.

🌟 Live Demo
👉 : (https://assignment1-red-mu.vercel.app/)


 🧱 Tech Stack

| Layer        | Technology |
|-------------|------------|
| 🖥 Frontend | React, TypeScript, Vite |
| 🎨 Styling  | Tailwind CSS |
| 🔁 Routing  | React Router |
| 🧠 AI       | GROQ API |
| ⚙ Backend   | Node.js, Express.js |
| 🌐 API Type | REST |
| 🚀 Hosting  | Vercel |  

🚀 Features

✔ Responsive React UI  
✔ GPT-powered feedback insights  
✔ Video thumbnail dashboard  
✔ Client-server integration  
✔ Modular component design (UI, forms, state, loader)

 🧱 Architecture Overview:

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



 🗂 Project Structure

 Assignment1/
│
├── backend/                     # Backend (Node.js + Express)
│   ├── controllers/             # Request handling logic
│   │   └── feedback.controller.js
│   │
│   ├── routes/                  # API route definitions
│   │   └── feedback.routes.js
│   │
│   ├── services/                # Business logic / AI service calls
│   │   └── groq.service.js
│   │
│   ├── middleware/              # Custom middleware (auth, error handling)
│   │   └── error.middleware.js
│   │
│   ├── config/                  # Environment & app configuration
│   │   └── env.js
│   │
│   ├── server.js                # Express app entry point
│   └── package.json             # Backend dependencies
│
├── frontend/                    # Frontend (React + TypeScript + Vite)
│   ├── public/                  # Static assets
│   │   └── thumbnails/
│   │
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── ui/              # Buttons, Cards, Inputs
│   │   │   ├── dashboard/       # Dashboard-specific components
│   │   │   └── feedback/        # Feedback form & list
│   │   │
│   │   ├── pages/               # Application pages
│   │   │   ├── Login.tsx
│   │   │   ├── Signup.tsx
│   │   │   └── Dashboard.tsx
│   │   │
│   │   ├── services/            # API calls (Axios / Fetch)
│   │   │   └── api.ts
│   │   │
│   │   ├── hooks/               # Custom React hooks
│   │   │   └── useAuth.ts
│   │   │
│   │   ├── layouts/             # Layout components
│   │   │   └── DashboardLayout.tsx
│   │   │
│   │   ├── lib/                 # Utility functions
│   │   │   └── utils.ts
│   │   │
│   │   ├── App.tsx              # Root component
│   │   ├── main.tsx             # React entry point
│   │   └── routes.tsx           # App routing
│   │
│   ├── .env                     # Frontend environment variables
│   ├── package.json             # Frontend dependencies
│   └── vite.config.ts           # Vite configuration
│
├── .gitignore                   # Git ignore rules
├── README.md                    # Project documentation
└── package.json                 # Root scripts (optional)


⚙️ Installation

1.Clone the repo
   
git clone https://github.com/KhushS14/Assignment1.git
cd Assignment1

🖥 Frontend setup
cd frontend
npm install

🔐 Environment Variables
Create a .env file in the frontend folder:
   VITE_GROQ_API_KEY=your_groq_api_key_here
📦 Never commit sensitive keys to the repo!

🚀 Run Locally
npm run dev

👨‍💻 Author
    Khush Suvarna
👉 GitHub: https://github.com/KhushS14






  









