# 🌟 Claro — Your Daily Clarity

> *"Built with clarity, for the beautifully busy."*

**Talmang Hackathon 2026** | Voice AI Track | Built with Telnyx ClawTalk + Resemble AI

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Perplexity%20Computer-orange)](https://www.perplexity.ai/computer/a/claro-your-daily-clarity-oj54SvwZQjSn7m0MqSfFWw)
[![Built with Lovable](https://img.shields.io/badge/Built%20with-Lovable-pink)](https://lovable.dev)
[![Powered by Telnyx](https://img.shields.io/badge/Voice-Telnyx%20ClawTalk-blue)](https://telnyx.com)
[![Voice by Resemble AI](https://img.shields.io/badge/TTS-Resemble%20AI-purple)](https://resemble.ai)

---

## 🎯 The Problem

Every morning, Natasha — a Senior Product Consultant — opens 4 apps, scrolls through 12 notifications, and still starts work without clarity on her top 3 priorities. This cognitive overhead costs her 45 minutes of productive time every single day.

She's not alone. Millions of busy professionals face the same friction: **too much information, not enough clarity.**

---

## ✨ The Solution

**Claro** delivers a personalised 60-second voice briefing of your top 3 priorities — hands-free, during your commute. No screens. No scrolling. Just clarity.

Tap one button. Claro calls your phone. A warm AI voice reads your priorities. You arrive at work already focused.

---

## 🎬 Demo Video

> [📹 Watch the 5-minute demo](#) *(link to be added)*

**Demo flow:**
1. Natasha opens Claro dashboard — sees her 5 active goals, 8 pending tasks, 5/5 habit streak
2. Taps "Start Commute Briefing" on the Commute page
3. Her phone rings — Claro's voice reads: *"Good morning Natasha. Here are your top 3 priorities for today..."*
4. She confirms each priority with a tap
5. Arrives at work with zero cognitive load

---

## 🏗️ Architecture

```
User taps "Start Commute Briefing"
        ↓
Claro Frontend (React / Lovable)
        ↓
Backend API (ClawHouse / OpenClaw)
        ↓
Resemble AI — generates Claro's warm voice persona
        ↓
Telnyx ClawTalk — outbound call to user's phone
        ↓
User hears their top 3 priorities read aloud
        ↓
Tap-to-confirm each priority after briefing
```

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React + Lovable | Beautiful, production-ready UI |
| Voice Calls | **Telnyx ClawTalk** | Outbound AI voice calls to user's phone |
| Voice Persona | **Resemble AI Chatterbox TTS** | Warm, human "Claro" voice |
| Backend | ClawHouse (OpenClaw) | Serverless call trigger + script builder |
| Prototype | Perplexity Computer | Rapid full-stack prototyping |

---

## 👤 Meet Natasha — Our Demo User

Natasha Thompson is a Senior Product Consultant. She's:
- Leading a product workshop series (30% progress, due 1 May)
- Planning a summer trip to Portugal & Senegal (15%, due 15 Jul)
- Growing her startup advisory practice (65%, due 30 Jun)
- Renovating her kitchen & living room (40%, due 30 Sep)
- Writing a book — 500 words/day habit (6🔥 streak)

**Her commute insight** (gathered from LinkedIn community): *"I just need someone to tell me what matters today. While I'm on the Overground. Before I open Slack."*

Claro was built for Natasha. And for everyone like her.

---

## 🚀 Features

### Dashboard
- Personalised greeting with priority count
- 4 live stat cards: Active Goals, Avg Progress, Pending Tasks, Habits Today
- Overall goal progress bar
- Active Goals, Do Now tasks, Habit Streaks in one view

### Commute Mode (NEW)
- Transport-aware briefing card ("Your 8:12 Overground is in 18 mins")
- One-tap to trigger outbound AI voice call
- Claro reads top 3 Do Now priorities aloud via Telnyx + Resemble AI
- Tap-to-confirm each priority after hearing it

### Goals
- 5 active goals across career, personal, home categories
- Progress tracking with visual bars and deadlines

### Tasks (Eisenhower Matrix)
- 8 tasks across all 4 quadrants
- 3 urgent "Do Now" tasks surfaced to top

### Habits
- 5 daily habits with real streak tracking
- Morning journaling 17🔥, Evening walk 12🔥, No phone 9🔥

### Community
- Accountability partners
- Public pledge with "Witness It" button + live counter

### Profile
- Work style chips (Portfolio Professional)
- Peak hours, commute voice briefing as default
- "My Why" quote card

---

## 📦 Project Structure

```
claro-app/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── CommuteBriefing.jsx
│   │   ├── Goals.jsx
│   │   ├── Tasks.jsx
│   │   ├── Habits.jsx
│   │   ├── Community.jsx
│   │   └── Profile.jsx
│   ├── api/
│   │   ├── triggerBriefing.js    # Telnyx ClawTalk integration
│   │   └── generateScript.js     # Resemble AI voice script
│   ├── data/
│   │   └── natasha-seed.js       # Demo user data
│   └── App.jsx
├── backend/
│   ├── clawhouse.config.js       # ClawHouse deployment config
│   └── briefing-agent.js         # OpenClaw agent definition
├── package.json
└── README.md
```

---

## ⚙️ Setup & Run

### Prerequisites
- Node.js 18+
- Telnyx account + API key (free hackathon credits via Luma)
- Resemble AI account + API key (free hackathon credits)
- ClawHouse account

### Environment Variables

```bash
TELNYX_API_KEY=your_telnyx_api_key
TELNYX_PHONE_NUMBER=your_telnyx_number
RESEMBLE_API_KEY=your_resemble_api_key
RESEMBLE_VOICE_UUID=claro_voice_uuid
```

### Install & Run

```bash
git clone https://github.com/tinatamangsl/claro-app
cd claro-app
npm install
npm run dev
```

### Trigger a Voice Briefing (API)

```bash
curl -X POST http://localhost:3000/api/trigger-briefing \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "+447700000000",
    "priorities": [
      "Confirm kitchen contractor quote",
      "Write 500 words — Chapter 3",
      "Send Mira Tech product roadmap"
    ],
    "userName": "Natasha"
  }'
```

---

## 🏆 Judging Criteria Alignment

| Criteria | How Claro Wins |
|---------|---------------|
| **User Experience Quality** | Production-ready design, Natasha's real story, beautiful amber UI, seamless 6-tab navigation |
| **Real-World Problem Solving** | Solves daily cognitive overload for millions of busy professionals — validated by LinkedIn community feedback |
| **Creative Use of ClawTalk** | Not a chatbot — Claro CALLS YOUR PHONE during the demo. The phone rings. A warm voice reads your priorities. That's the wow moment. |

---

## 👩🏾‍💻 Built By

**Tina** — Product leader, hackathon builder, on a mission to make AI feel like a brilliant friend, not a tool.

*Talmang Hackathon 2026 · Submission deadline: 22 March 2026, 2pm Pacific*

---

*"The best productivity app is the one that talks to you."*
