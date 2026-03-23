# Security Policy

## Supported Versions

We actively maintain security updates for the following versions of Claro:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | ✅ Yes              |
| < 1.0   | ❌ No               |

---

## Reporting a Vulnerability

**Please do NOT report security vulnerabilities through public GitHub issues.**

If you discover a security vulnerability in Claro, please report it responsibly:

1. **Open a private security advisory** via GitHub:
   Go to [Security Advisories](https://github.com/tinatamangsl/claro-app/security/advisories/new)

2. **Include the following information:**
   - A description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact assessment
   - Any suggested fixes (optional)

---

## What to Expect

- **Acknowledgement:** We will acknowledge receipt of your report within **48 hours**
- **Assessment:** We will assess the vulnerability within **7 days**
- **Resolution:** We will aim to resolve critical vulnerabilities within **30 days**
- **Disclosure:** We will coordinate responsible disclosure with you

We appreciate responsible disclosure and will credit researchers who report valid vulnerabilities.

---

## Scope

### In Scope
- Authentication and authorisation vulnerabilities
- API key exposure or mishandling
- Data injection attacks (SQL injection, XSS, etc.)
- Insecure direct object references
- Third-party API integration vulnerabilities (Telnyx, Resemble AI, ClawdTalk, ClawHouse)
- Sensitive data exposure

### Out of Scope
- Denial of service attacks
- Social engineering attacks
- Physical security
- Vulnerabilities in third-party dependencies (report these upstream)

---

## Security Best Practices for Contributors

- **Never commit API keys or secrets** — use `.env` and ensure it's in `.gitignore`
- **Always use `.env.example`** to document required env vars without values
- **Validate all user inputs** on both client and server side
- **Use parameterised queries** to prevent SQL injection in SQLite backend
- **Keep dependencies updated** — run `npm audit` regularly
- **Review third-party integrations** for data handling compliance

---

## Dependency Security

We use `npm audit` to check for known vulnerabilities in dependencies. To run a security check locally:

```bash
npm audit
npm audit fix
```

---

> This project handles user productivity data and voice interactions. We take the privacy and security of our users seriously.
