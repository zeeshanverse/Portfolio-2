# Mohammed Zeeshan — Developer Portfolio

A modern, interactive developer portfolio for **Mohammed Zeeshan**, focused on Java full-stack development, Spring Boot, REST APIs, databases, DSA, and practical software engineering.

The portfolio includes project showcases, an AI assistant, blog/content sections, recommendations, a contact form, and a PostgreSQL-backed API.

---

## ✨ Highlights

- Modern interactive portfolio UI
- Responsive design for desktop and mobile
- Featured projects and dedicated project pages
- Complete projects listing with completed and ongoing work
- Project details, technology stacks, GitHub repositories and live demos
- About, engineering, learning roadmap and recommendations sections
- Resume available directly from the portfolio
- Portfolio AI assistant focused on Zeeshan and software-engineering topics
- Contact form backed by PostgreSQL
- Contact email notifications using Resend
- PostgreSQL database with Prisma ORM
- Express API
- Next.js frontend
- TypeScript throughout the application
- Turborepo/pnpm monorepo structure
- Designed for Vercel deployment

---

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- CSS

### Backend

- Node.js
- Express
- TypeScript

### Database

- PostgreSQL
- Prisma ORM

### AI

- AI SDK
- OpenAI-compatible LLM endpoints
- OpenAI
- OpenRouter
- Local OpenAI-compatible LLM support

### Email

- Resend
- Nodemailer / SMTP support for local development

### Tooling

- pnpm
- Turborepo
- Git
- GitHub
- Docker
- Vitest

---

## 📁 Project Structure

```text
Portfolio-2/
├── apps/
│   ├── web/                 # Next.js portfolio frontend
│   └── api/                 # Express API
│
├── packages/
│   ├── db/                  # Prisma schema, migrations and database layer
│   └── shared/              # Shared domain types and DTOs
│
├── docs/                    # Architecture and project documentation
├── postman/                 # API collections
├── scripts/                 # Utility/setup scripts
│
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── README.md