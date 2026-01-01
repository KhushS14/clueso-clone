
Clueso Clone – Full Stack Web Application

A full-stack web application built using React (TypeScript) for the frontend and Node.js + Express for the backend.
The project demonstrates a clean client–server architecture, RESTful API communication, and modular code structure suitable for real-world applications.

## Vercel 
  Live Demo - https://assignment1-red-mu.vercel.app/
## Table of Contents


Overview

Features

Tech Stack

Project Architecture

Folder Structure

Architecture Flow

Installation & Setup

Environment Variables

Running the Project Locally

Deployment

Design Decisions & Assumptions

Future Improvements


## Overview

This project is developed to demonstrate:

Full-stack development skills

Clear separation of frontend and backend

REST API communication

Scalable and maintainable project structure

The frontend provides the user interface, while the backend handles business logic and API requests.


## Features

🔹 Modular frontend architecture

🔹 RESTful backend APIs

🔹 Clean separation of concerns

🔹 Static asset handling (thumbnails/images)

🔹 Ready for cloud deployment (Vercel)

🔹 Scalable folder structure
## Tech Stack

Frontend

React

TypeScript

Vite

Tailwind CSS

React Router

Backend

Node.js

Express.js

REST APIs

Other Tools

Vercel (Deployment)

Git & GitHub

npm


## Folder Structure


```bash
  Assignment1/
├── backend/                 # Server-side application
│   ├── routes/              # API route definitions
│   ├── controllers/         # Business logic & request handling
│   ├── app.js / index.js    # Express app entry point
│   └── package.json         # Backend dependencies
│
├── frontend/                # Client-side application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Application pages
│   │   ├── services/        # API communication logic
│   │   ├── App.tsx          # Root React component
│   │   └── main.tsx         # Frontend entry point
│   └── package.json         # Frontend dependencies
│
├── public/
│   └── thumbnails/          # Static assets (images)
│
├── vercel.json              # Deployment configuration
├── package.json             # Root-level scripts
├── .gitignore               # Ignored files
└── README.md                # Project documentation

```
## Architecture Flow

```bash
User
 ↓
React Frontend
 ↓ HTTP Request
Node.js + Express Backend
 ↓
MongoDB (Store / Fetch Data)
 ↓
Groq AI API (Process Intelligence)
 ↓
Backend (Format + Save Response)
 ↓ HTTP Response
React Frontend (UI Update)


```

## Installation & Setup

Prerequisites

Node.js (v16 or higher)

npm or yarn

Git



    
## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform


## Clone the project

```bash
 git clone https://github.com/KhushS14/Assignment1.git
cd Assignment1

```


## Environment Variables 

Create a .env file in the backend folder and add:

```bash
PORT=5000

```
Never commit .env files to GitHub.


## Start the Backend

```bash
 cd backend
npm install
npm start

```

## Start the Frontend

```bash
 cd frontend
npm install
npm run dev

```


## Deployment

The project is configured for Vercel deployment
vercel.json manages routing and build settings
Frontend and backend can be deployed independently or as a full-stack app


## Design Decisions & Assumptions

Client–Server architecture chosen for scalability
REST APIs used for simplicity and compatibility
TypeScript used in frontend for better type safety.
Backend kept lightweight using Express.
Static assets stored separately for better performance.

## Future Improvements

Add database integration (MongoDB / PostgreSQL)
Authentication & authorization
API validation and error handling
Unit and integration tests
Dockerization
CI/CD pipeline


## Authors
Khush Suvarna

Github - [https://github.com/KhushS14]

