# Contributing to Claro

Thank you for your interest in contributing to **Claro — Your Daily Clarity**! 🎧

We welcome contributions of all kinds: bug fixes, new features, documentation improvements, and accessibility enhancements.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

---

## Code of Conduct

This project adheres to our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

---

## Getting Started

1. **Fork** the repository
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/claro-app.git
   cd claro-app
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Copy environment variables:**
   ```bash
   cp .env.example .env
   # Fill in your API keys
   ```
5. **Run the app locally:**
   ```bash
   npm run dev
   ```

---

## How to Contribute

### Bug Fixes
- Check the [issue tracker](https://github.com/tinatamangsl/claro-app/issues) for open bugs
- Comment on the issue to indicate you're working on it
- Submit a PR referencing the issue number

### New Features
- Open a [feature request](https://github.com/tinatamangsl/claro-app/issues/new?template=feature_request.md) first
- Wait for maintainer feedback before building
- Keep features focused and well-scoped

### Documentation
- Fix typos, improve clarity, add examples
- PRs for docs improvements are always welcome

---

## Development Setup

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x

### Tech Stack
| Layer | Technology |
|-------|------------|
| Frontend | React + TypeScript + Vite |
| Backend | Express.js + SQLite |
| Styling | Tailwind CSS + shadcn/ui |
| Voice AI | Resemble AI Chatterbox |
| Voice Calls | Telnyx + ClawdTalk |
| AI Agent | ClawHouse |

### Running Tests
```bash
npm test
```

---

## Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add cycle intelligence phase detection
fix: resolve audio playback on Safari
docs: update API key setup instructions
chore: upgrade dependencies
refactor: extract voice briefing hook
test: add unit tests for task prioritisation
```

---

## Pull Request Process

1. Branch from `main` using a descriptive name: `feat/airport-mode` or `fix/auth-redirect`
2. Ensure your changes pass linting: `npm run lint`
3. Update documentation if you change any API or behaviour
4. Fill in the PR template fully
5. Request a review from [@tinatamangsl](https://github.com/tinatamangsl)
6. PRs require at least **1 approval** before merging

---

## Reporting Bugs

Use the [Bug Report template](https://github.com/tinatamangsl/claro-app/issues/new?template=bug_report.md).

Please include:
- Steps to reproduce
- Expected vs actual behaviour
- Browser/OS version
- Screenshots or screen recordings if applicable

---

## Suggesting Features

Use the [Feature Request template](https://github.com/tinatamangsl/claro-app/issues/new?template=feature_request.md).

Describe:
- The problem you're solving
- Your proposed solution
- Any alternatives considered

---

## Questions?

Open a [GitHub Discussion](https://github.com/tinatamangsl/claro-app/discussions) or reach out via the project's contact channels.

> Built with clarity, for the beautifully busy. 🎧
