🎧 CLARO — Your Daily Clarity. Delivered.
==========================================

> **"I don't want another app to open. I want someone to just TELL me what to focus on while I'm on the train."** — Real user feedback that built Claro

[![Live App](https://img.shields.io/badge/🌐_Live_App-Claro-F59E0B?style=for-the-badge)](https://lovable.dev/projects/6599c25f-f37a-414f-967f-a6e83fce56c2)
[![GitHub](https://img.shields.io/badge/GitHub-tinatamangsl%2Fclaro--app-blue?style=for-the-badge&logo=github)](https://github.com/tinatamangsl/claro-app)
[![Hackathon](https://img.shields.io/badge/🏆_OpenClaw_Hackathon-2026-10B981?style=for-the-badge)](https://github.com/tinatamangsl/claro-app)

---

## The Problem: Cognitive Overhead is Killing Morning Productivity

**78% of professionals** spend their first 30 minutes at work just figuring out what to work on. **61% of women** report managing multiple life domains simultaneously — career, home, side projects, relationships. The average knowledge worker loses **2.1 hours/day** to cognitive overhead and context-switching.

> Natasha is 34. Black British. Senior Product Consultant in London. She commutes 45 minutes each way on the Overground. Every morning she opens 7 different apps before she knows what to work on first.
> **That's not a productivity problem. That's a clarity problem.**

---

## The Solution: Claro

Claro is a **voice-first cognitive clarity companion** for ambitious, multi-passionate professionals.

It calls your phone during your commute and reads your top 3 priorities aloud — so you can go from sleep to peak performance in 60 seconds, **without opening a single app**.

---

## 🏗️ Tech Stack

| Layer | Technology | Role |
|---|---|---|
| **Voice Calls** | Telnyx + ClawdTalk | Outbound call engine + two-way voice reply |
| **Voice AI** | Resemble AI Chatterbox | Personalised TTS — Lucy voice, 6 languages |
| **AI Agent** | ClawHouse | Hosts Claro AI agent — webchat + two-way voice |
| **Frontend** | React + TypeScript + Vite | SPA with glassmorphism design |
| **Backend** | Express.js + SQLite | REST API + persistence |
| **Styling** | Tailwind CSS + shadcn/ui | Glassmorphism design system |
| **Builder** | Lovable | Rapid UI development + GitHub sync |

---

## ✨ Features

### 🎧 1. Voice Commute Briefing
Telnyx calls your phone — you hear your top 3 priorities in a warm AI voice. 45 seconds. Powered by **Resemble AI Chatterbox TTS** — 6 languages. Calls delivered via **Telnyx + ClawdTalk**.

### 🔄 2. ClawdTalk Two-Way Voice Reply
After briefing, speak your update — "Move contractor call to tomorrow" — and Claro reschedules it. Powered by **ClawdTalk**. First app to demo bidirectional voice task management on a commute.

### 🤖 3. ClawHouse AI Agent
Persistent "Ask Claro" floating agent on every page — hosted on **ClawHouse**. Ask questions, get briefings, update tasks via voice or chat.

### 🧠 4. Context Modes
- 🚆 **Commute** — short, punchy, 3 priorities max
- 🧠 **Deep Focus** — full context, long-form detail
- ☕ **Café Mode** — creative tasks first
- ✈️ **Airport** — offline-friendly, travel tasks

### 🌸 5. Cycle Intelligence (NOVEL FEATURE)
Claro aligns your work priorities with your hormonal cycle phases:

| Phase | Days | Work Strategy |
|---|---|---|
| 🌙 Menstrual | 1–5 | Solo deep work, planning, reflection |
| 🌱 Follicular | 6–13 | Brainstorm, start projects, creative sprints |
| ☀️ Ovulation | 14–17 | Presentations, negotiations, pitches — peak fluency |
| 🍂 Early Luteal | 18–24 | Execution, QA, documentation, closing loops |
| 🌊 Late Luteal | 25–28 | Structured tasks only. Protect focus. |

**Hypothesis:** Users aligning priorities to cycle phase will report 25% lower cognitive friction.

### ⚡ 6. Peak Energy Timeline
CSS/SVG gradient wave from 6am–10pm. 6 colour-coded energy zones with live time marker.

### 🗺️ 7. Working Memory Breadcrumbs
Horizontal timeline of last 5 tasks worked on. "Claro remembers your context so you don't have to."

### 🌍 8. Multilingual Voice
6 languages: 🇬🇧 English · 🇵🇱 Polish · 🇮🇳 Hindi · 🇩🇪 German · 🇫🇷 French · 🇪🇸 Spanish

### 🎯 9. Goals + Tasks + Habits + Community
SMART/OKR goals, Eisenhower matrix, habit streaks, accountability hub with buddy system.

---

## 📊 Product Hypothesis & Success Metrics

| Metric | Target (30 days) |
|---|---|
| Morning cognitive overhead | < 5 min (down from 31 min avg) |
| Top-3 daily completion rate | ≥ 68% (up from 42% baseline) |
| User retention (D30) | ≥ 55% |
| Voice briefing adoption | ≥ 70% of active users |
| NPS | ≥ 60 |
| Cycle phase alignment | ≥ 40% set cycle day in week 1 |

---

## 🚀 Getting Started

```bash
git clone https://github.com/tinatamangsl/claro-app.git
cd claro-app
npm install
npm run dev
# App at http://localhost:5000
```

### Environment Variables

```env
TELNYX_API_KEY=your_key
TELNYX_PHONE_NUMBER=+12223334444
RESEMBLE_API_KEY=your_key
CLAWHOUSE_AGENT_ID=tinatamang-slsl-claro-ai
PORT=5000
```

---

## 🏆 Judging Criteria

| Criterion | How Claro Wins |
|---|---|
| **UX Quality** | Production-grade glassmorphism. Real data. Real persona. Feels funded. |
| **Real-World Impact** | Solves a validated problem. Cycle Intelligence is genuinely novel. |
| **Creative ClawdTalk use** | Bidirectional voice — Natasha speaks back and tasks update in real time. |
| **Multi-sponsor integration** | 4 sponsors deeply integrated: Resemble AI + ClawdTalk + ClawHouse + Telnyx. |

---

## 🛠️ Sponsor Credits

| Sponsor | How Used |
|---|---|
| **Telnyx** | Outbound phone calls during commute. Promo: `CLAW_HACKATHON_26` |
| **ClawdTalk** | Two-way voice reply — speak updates, tasks reschedule automatically |
| **Resemble AI** | Lucy voice persona, 6-language Chatterbox TTS for briefings |
| **ClawHouse** | Live AI agent (tinatamang-slsl-claro-ai) with persistent webchat on every page |
| **Lovable** | Frontend builder with GitHub 2-way sync |

---

> *"Built with clarity, for the beautifully busy."* — Claro 2026
>
> **🏆 OpenClaw Hackathon 2026 — Built by Tina Gurung**
