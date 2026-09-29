import type { ProjectDetailResponse, ProjectListResponse } from '@portfolio/shared'
import { Api } from '@/lib/api'

export type { ProjectDetailResponse }

const FALLBACK_PROJECT_DETAILS: Record<string, ProjectDetailResponse> = {
  'ai-crew': {
    id: 'fallback-ai-crew',
    slug: 'ai-crew',
    title: 'AI-Crew',

    descriptionMd: `## AI-Crew

AI-Crew is an AI-powered company operations platform currently under active development.

The project explores how specialized AI agents can work together to support different areas of a software-driven company while keeping workflows, actions and outputs organized.

### What it aims to do

- 🤖 Provides specialized AI agents for different responsibilities.
- 🏢 Supports company and business workflows.
- 📋 Assists with project and task management.
- 🔎 Supports AI-assisted research.
- 💻 Assists with engineering-oriented workflows.
- 🗄️ Maintains persistent application data.
- 🧾 Tracks AI actions and workflow activity.
- 🔗 Connects multiple AI capabilities through a unified application.

### Architecture direction

The project is being developed as a full-stack AI application focused on connecting the frontend, backend, AI agents and persistent data layer.

Frontend → Backend → AI Agents → Data / Services

The architecture is being developed incrementally as the project's capabilities expand.

### AI agent approach

The central idea is to divide responsibilities between specialized agents instead of placing every capability inside one large assistant.

This creates room for agents focused on areas such as research, engineering, project operations and other company workflows.

### Project status

AI-Crew is currently **in progress**.

The project is actively evolving and should be considered a development project rather than a finished production platform.

### Technology

AI, React, Java, Spring Boot, Docker and supporting full-stack technologies.

### Engineering focus

AI-Crew is being developed to explore practical AI-agent architecture, full-stack application design, workflow orchestration, persistent data and the integration of AI into real software-engineering workflows.

### Repository

[GitHub](https://github.com/zeeshanverse/AI-Crew)`,

    shortDescription:
      'An AI-powered company operations platform exploring specialized AI agents for business workflows, project management, research and engineering tasks.',

    tagline: 'Currently in progress',
    role: 'In Progress · AI / Full Stack',

    startedAt: '2026-09-01T00:00:00.000Z',
    endedAt: null,

    liveUrl: null,
    repoUrl: 'https://github.com/zeeshanverse/AI-Crew',

    featured: true,
    published: true,
    displayOrder: 0,

    createdAt: '2026-09-01T00:00:00.000Z',
    updatedAt: '2026-09-30T00:00:00.000Z',

    tags: [
      {
        id: 'react',
        slug: 'react',
        label: 'React',
        color: null,
      },
      {
        id: 'java',
        slug: 'java',
        label: 'Java',
        color: null,
      },
      {
        id: 'ai',
        slug: 'ai',
        label: 'AI',
        color: null,
      },
      {
        id: 'docker',
        slug: 'docker',
        label: 'Docker',
        color: null,
      },
    ],

    images: [],
  },

  'voxflow-ai': {
    id: 'fallback-voxflow-ai',
    slug: 'voxflow-ai',
    title: 'VoxFlow AI',

    descriptionMd: `## VoxFlow AI

VoxFlow AI is a full-stack voice AI and interview assistant designed to combine traditional software engineering with conversational AI and speech technologies.

### What it does

- 🎤 Converts spoken input into text using speech-to-text services.
- 🤖 Processes conversations through LLM-powered assistant logic.
- 🔊 Converts assistant responses back into speech.
- 💬 Maintains persistent conversations.
- 🔐 Provides authentication and protected application flows.
- 🎯 Supports an interview-focused mode.
- 📊 Provides interview analytics and evaluation-oriented workflows.
- 🗄️ Persists application and conversation data using PostgreSQL.

### Architecture

The application follows a full-stack architecture:

React frontend → Spring Boot backend → speech / AI providers → PostgreSQL

The backend acts as the central application layer so provider integrations and API credentials remain outside the browser.

### Technology

Java, Spring Boot, Spring Security, React, Vite, PostgreSQL, JWT, AssemblyAI, Gemini, ElevenLabs and Docker.

### Project direction

VoxFlow AI is being developed as a practical AI engineering project rather than a simple API demo, with emphasis on backend architecture, provider abstraction, persistence, authentication and real application workflows.

### Repository

[GitHub](https://github.com/zeeshanverse/VoxFlow-AI)`,

    shortDescription:
      'A full-stack voice AI and interview assistant combining speech-to-text, LLM-powered conversations, text-to-speech, authentication, persistent conversations and interview analytics.',

    tagline: 'Voice AI · Interview Assistant',
    role: 'Full-Stack Voice AI · Java / Spring Boot / React',

    startedAt: '2026-09-01T00:00:00.000Z',
    endedAt: null,

    liveUrl: null,
    repoUrl: 'https://github.com/zeeshanverse/VoxFlow-AI',

    featured: true,
    published: true,
    displayOrder: 1,

    createdAt: '2026-09-01T00:00:00.000Z',
    updatedAt: '2026-09-30T00:00:00.000Z',

    tags: [
      {
        id: 'java',
        slug: 'java',
        label: 'Java',
        color: null,
      },
      {
        id: 'spring-boot',
        slug: 'spring-boot',
        label: 'Spring Boot',
        color: null,
      },
      {
        id: 'react',
        slug: 'react',
        label: 'React',
        color: null,
      },
      {
        id: 'sql',
        slug: 'sql',
        label: 'SQL',
        color: null,
      },
      {
        id: 'docker',
        slug: 'docker',
        label: 'Docker',
        color: null,
      },
      {
        id: 'ai',
        slug: 'ai',
        label: 'AI',
        color: null,
      },
    ],

    images: [],
  },

  'banking-system': {
    id: 'fallback-banking-system',
    slug: 'banking-system',
    title: 'Banking System',

    descriptionMd: `## Banking System

Banking System is a backend-focused financial application built with Java and Spring Boot to model the core workflows of a modern banking platform.

The project focuses on building a structured REST API with authentication, account management and transaction processing while maintaining clear separation between application logic, security and persistence.

### What it does

- 🔐 Provides JWT-based authentication and protected API endpoints.
- 👤 Supports user and account management.
- 💰 Handles deposits and withdrawals.
- 🔄 Supports account-to-account money transfers.
- 📋 Maintains transaction history and transaction records.
- 📊 Provides transaction-oriented reporting and retrieval.
- 🗄️ Persists banking data using PostgreSQL.
- 🔗 Uses JPA and JDBC for database interaction.

### Architecture

The application follows a layered Spring Boot backend architecture:

Client → REST API → Controller → Service → Repository → PostgreSQL

Business logic is separated from controllers and persistence, making the application easier to maintain and extend.

### Security

Authentication is handled using JWT-based security with Spring Security. Protected resources require authenticated access, keeping account and transaction operations behind the application's security layer.

### Technology

Java, Spring Boot, Spring Security, REST APIs, JWT, PostgreSQL, Spring Data JPA and JDBC.

### Engineering focus

The project was built to strengthen backend engineering fundamentals including REST API design, authentication, authorization, relational database design, transaction handling and clean service-layer architecture.

### Repository

[GitHub](https://github.com/zeeshanverse/banking-system-springboot)`,

    shortDescription:
      'A secure Java and Spring Boot backend banking application featuring JWT authentication, account management, financial transactions, transaction history and PostgreSQL persistence.',

    tagline: null,
    role: 'Backend Engineering · Java / Spring Boot',

    startedAt: '2026-01-01T00:00:00.000Z',
    endedAt: '2026-08-31T00:00:00.000Z',

    liveUrl: null,
    repoUrl:
      'https://github.com/zeeshanverse/banking-system-springboot',

    featured: true,
    published: true,
    displayOrder: 2,

    createdAt: '2026-01-01T00:00:00.000Z',
    updatedAt: '2026-09-30T00:00:00.000Z',

    tags: [
      {
        id: 'java',
        slug: 'java',
        label: 'Java',
        color: null,
      },
      {
        id: 'spring-boot',
        slug: 'spring-boot',
        label: 'Spring Boot',
        color: null,
      },
      {
        id: 'rest-api',
        slug: 'rest-api',
        label: 'REST API',
        color: null,
      },
      {
        id: 'sql',
        slug: 'sql',
        label: 'SQL',
        color: null,
      },
    ],

    images: [],
  },

  'smart-attendance-system': {
    id: 'fallback-smart-attendance-system',
    slug: 'smart-attendance-system',
    title: 'ATTEND AI (Smart Attendance System)',

    descriptionMd: `## ATTEND AI (Smart Attendance System)

ATTEND AI is a computer-vision-based attendance management system developed to automate the process of identifying users and recording attendance.

The project combines facial recognition with a Flask backend and relational data storage to turn a traditionally manual attendance process into an automated workflow.

### What it does

- 📷 Captures faces through a camera-based workflow.
- 👁️ Detects faces in real time using OpenCV.
- 🧠 Recognizes registered users using facial-recognition technology.
- 🕒 Records attendance along with identity and timestamp.
- 🗄️ Stores attendance records using SQLite.
- 🌐 Provides a Flask-based application layer.
- 📋 Organizes attendance information for later retrieval.

### Architecture

The system follows a computer-vision application pipeline:

Camera → Face Detection → Face Recognition → Identity Matching → Attendance Recording → Database

OpenCV handles the computer-vision pipeline while the recognition layer identifies registered users and the Flask application provides the backend interface.

### Technology

Python, Flask, OpenCV, face_recognition, dlib, NumPy, SQLite, HTML, CSS and JavaScript.

### Engineering focus

The project provided practical experience with computer vision, image processing, facial embeddings, backend development, database persistence and integrating machine-learning-oriented functionality into a usable web application.

### Project background

ATTEND AI was developed as a final-year project and represents a project where computer vision and software engineering were combined into a complete application workflow.

### Repository

[GitHub](https://github.com/zeeshanverse/smart-attendance-system)

### Live Demo

https://smart-attendance-system-tvmk.onrender.com/api/auth/demo`,

    shortDescription:
      'A final-year facial-recognition attendance system that detects and recognizes faces in real time, records timestamped attendance and keeps attendance data organized for management.',

    tagline: 'Final Year Project',
    role: 'Final Year Project · Python / Flask / Computer Vision',

    startedAt: '2025-01-01T00:00:00.000Z',
    endedAt: '2025-05-31T00:00:00.000Z',

    liveUrl:
      'https://smart-attendance-system-tvmk.onrender.com/api/auth/demo',

    repoUrl:
      'https://github.com/zeeshanverse/smart-attendance-system',

    featured: true,
    published: true,
    displayOrder: 3,

    createdAt: '2025-01-01T00:00:00.000Z',
    updatedAt: '2026-09-30T00:00:00.000Z',

    tags: [
      {
        id: 'python',
        slug: 'python',
        label: 'Python',
        color: null,
      },
      {
        id: 'flask',
        slug: 'flask',
        label: 'Flask',
        color: null,
      },
      {
        id: 'opencv',
        slug: 'opencv',
        label: 'OpenCV',
        color: null,
      },
      {
        id: 'sqlite',
        slug: 'sqlite',
        label: 'SQLite',
        color: null,
      },
    ],

    images: [],
  },

  jobtrack: {
    id: 'fallback-jobtrack',
    slug: 'jobtrack',
    title: 'JobTrack',

    descriptionMd: `## JobTrack

JobTrack is an in-progress job application tracker built to make an active job search easier to organize.

Instead of keeping application details across notes or spreadsheets, the application brings company, role, status and job-link information into one place.

### Current features

- 💼 Add and record job applications.
- 🏢 Track the company and role for each application.
- 🔄 Track application status throughout the hiring process.
- 🔗 Store the original job URL for quick access.
- 📊 View basic application statistics.

### Current implementation

The current version uses HTML, CSS and JavaScript. The first iteration focuses on a lightweight application workflow before expanding into a larger full-stack implementation.

### Planned improvements

The roadmap includes local storage, filtering, editing and deleting applications, followed by a React frontend and Spring Boot backend for a more scalable full-stack implementation.

### Project status

JobTrack is currently **in progress** and is being developed incrementally as a practical productivity application.

### Technology

HTML5, CSS3 and JavaScript.

### Engineering focus

The project focuses on building a useful application from a real-world requirement while progressively introducing stronger frontend and backend architecture.

### Repository

[GitHub](https://github.com/zeeshanverse/job-tracker)`,

    shortDescription:
      'An in-progress job application tracker for recording companies, roles, application status, job URLs and application statistics.',

    tagline: 'Currently in progress',
    role: 'In Progress · HTML / CSS / JavaScript',

    startedAt: '2026-01-01T00:00:00.000Z',
    endedAt: null,

    liveUrl: null,
    repoUrl: 'https://github.com/zeeshanverse/job-tracker',

    featured: true,
    published: true,
    displayOrder: 4,

    createdAt: '2026-01-01T00:00:00.000Z',
    updatedAt: '2026-09-30T00:00:00.000Z',

    tags: [
      {
        id: 'html',
        slug: 'html',
        label: 'HTML',
        color: null,
      },
      {
        id: 'css',
        slug: 'css',
        label: 'CSS',
        color: null,
      },
      {
        id: 'javascript',
        slug: 'javascript',
        label: 'JavaScript',
        color: null,
      },
    ],

    images: [],
  },

  mymeal: {
    id: 'fallback-mymeal',
    slug: 'mymeal',
    title: 'MyMeal',

    descriptionMd: `## MyMeal

MyMeal is a full-stack food-ordering web application designed around a complete customer ordering workflow.

The project focuses on connecting an interactive frontend with a Flask backend and database layer to provide a practical e-commerce-style experience.

### What it does

- 🍔 Displays food items through a browsable menu.
- 🛒 Lets users add and manage items in a shopping cart.
- 📦 Supports the order-placement workflow.
- 🌐 Connects frontend interactions with Flask backend functionality.
- 🗄️ Uses database persistence for application data.

### Architecture

The application follows a traditional web application architecture:

Frontend → Flask Backend → Database

The frontend provides the user interface while Flask handles server-side application logic and database operations.

### Technology

Python, Flask, HTML5, CSS3, JavaScript and MySQL.

### Engineering focus

MyMeal provided practical experience with full-stack web development, backend routing, frontend integration, database connectivity, form handling and designing an end-to-end user workflow.

### Deployment

The application was deployed online to demonstrate the project as a working web application rather than only a local development project.

### Repository

[GitHub](https://github.com/zeeshanverse/project-E-commerce-Website-MyMeal-)

### Live Demo

https://mymeal.onrender.com`,

    shortDescription:
      'A food-ordering web application providing menu browsing, cart management and order placement through a complete frontend-to-backend workflow.',

    tagline: null,
    role: 'Full-Stack Web Application · Flask / JavaScript',

    startedAt: '2024-01-01T00:00:00.000Z',
    endedAt: '2024-12-31T00:00:00.000Z',

    liveUrl: 'https://mymeal.onrender.com',
    repoUrl:
      'https://github.com/zeeshanverse/project-E-commerce-Website-MyMeal-',

    featured: true,
    published: true,
    displayOrder: 5,

    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2026-09-30T00:00:00.000Z',

    tags: [
      {
        id: 'flask',
        slug: 'flask',
        label: 'Flask',
        color: null,
      },
      {
        id: 'javascript',
        slug: 'javascript',
        label: 'JavaScript',
        color: null,
      },
    ],

    images: [],
  },
}

const api = new Api()

export async function getProjects(): Promise<ProjectDetailResponse[]> {
  try {
    const res = await api.get('/projects?limit=100', {
      cache: 'no-store',
    })

    if (!res.ok) return Object.values(FALLBACK_PROJECT_DETAILS)

    const data = (await res.json()) as ProjectListResponse

    return data.items
  } catch {
    return Object.values(FALLBACK_PROJECT_DETAILS)
  }
}

export async function getProject(
  slug: string
): Promise<ProjectDetailResponse | null> {
  try {
    // IMPORTANT:
    // Do not cache project details.
    // This ensures updated project data is fetched immediately.
    const res = await api.get(`/projects/${slug}`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      return FALLBACK_PROJECT_DETAILS[slug] ?? null
    }

    return (await res.json()) as ProjectDetailResponse
  } catch {
    return FALLBACK_PROJECT_DETAILS[slug] ?? null
  }
}

export async function getFeaturedProjects(): Promise<ProjectDetailResponse[]> {
  try {
    const res = await api.get('/projects/featured', {
      cache: 'no-store',
    })

    if (!res.ok) return []

    return (await res.json()) as ProjectDetailResponse[]
  } catch {
    return []
  }
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await getProjects()

  return projects.length
    ? projects.map((p) => p.slug)
    : Object.keys(FALLBACK_PROJECT_DETAILS)
}

export function getAllProjectTags(
  projects: ProjectDetailResponse[]
): [string, number][] {
  const counts = new Map<string, number>()

  for (const p of projects) {
    for (const t of p.tags) {
      counts.set(t.label, (counts.get(t.label) ?? 0) + 1)
    }
  }

  return [
    ['all', projects.length] as [string, number],
    ...Array.from(counts.entries()).sort((a, b) => b[1] - a[1]),
  ]
}

export function formatProjectDate(iso: string | null): string {
  if (!iso) return ''

  const d = new Date(iso)

  return d.toLocaleString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}