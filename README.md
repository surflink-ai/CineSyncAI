# CineSync – Collaborative AI-Powered Pre-Production Platform

CineSync is a full-stack web application that helps teams collaboratively plan documentaries and short films — powered by real-time tools and AI automation.

## Features

- **Collaborative Pre-Production Tools**
  - Script editor with live Markdown editing
  - Shot list builder
  - Storyboard uploader
  - Scheduling, crew, budget management

- **Supabase Realtime Sync**
  - Every update is shared live across all team members

- **AI Producer Assistant**
  - Input an idea, receive a full production plan
  - Title suggestions, treatment, structure, research, crew & location recs

- **Task Tracking**
  - Kanban-style board with assignees, due dates, priorities, and alerts

- **In-App Notifications**
  - Real-time toast alerts for task updates and comments

- **User Presence**
  - See who is online in your project in real time

## Tech Stack

- **Frontend:** React + TailwindCSS + Vite
- **Backend:** Node.js + Express + Supabase + OpenAI
- **Database:** Supabase (PostgreSQL with Realtime)
- **AI Integration:** GPT-4 via OpenAI API

## Getting Started

### Local Setup

```bash
# Backend
cd backend
npm install
cp .env.example .env
# add your API keys
node server.js
```

```bash
# Frontend
cd frontend
npm install
npm run dev
```

### .env Variables Required

```
DATABASE_URL=your_supabase_postgres_url
JWT_SECRET=your_jwt_secret
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key
```

### Replit Deployment

To deploy on Replit:

1. Upload this project
2. Use `.replit` file to start the backend (`cd backend && node server.js`)
3. Add env variables via Secrets
4. Access it at `https://your-project-name.replit.app`

## License

MIT License

---

Built by filmmakers, for filmmakers.