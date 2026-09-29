import { config } from 'dotenv'
import { resolve } from 'node:path'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../src/generated/prisma/client.js'

// prisma db seed runs from packages/db, so explicitly load the monorepo root .env.
config({ path: resolve(import.meta.dirname, '../../.env') })

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not set')
}

const adapter = new PrismaPg({
  connectionString: databaseUrl,
})

const prisma = new PrismaClient({
  adapter,
})

if (process.env.NODE_ENV === 'production') {
  throw new Error('Seed must not run in production')
}

async function main() {
  // Tags
  const tags = await Promise.all(
    [
      { slug: 'java', label: 'Java', color: '#ED8B00' },
      { slug: 'spring-boot', label: 'Spring Boot', color: '#6DB33F' },
      { slug: 'rest-api', label: 'REST API', color: '#7DD3FC' },
      { slug: 'sql', label: 'SQL', color: '#4479A1' },
      { slug: 'javascript', label: 'JavaScript', color: '#F7DF1E' },
      { slug: 'react', label: 'React', color: '#61DAFB' },
      { slug: 'python', label: 'Python', color: '#3776AB' },
      { slug: 'fastapi', label: 'FastAPI', color: '#009688' },
      { slug: 'flask', label: 'Flask', color: '#ffffff' },
      { slug: 'opencv', label: 'OpenCV', color: '#5c8dbc' },
      { slug: 'sqlite', label: 'SQLite', color: '#003B57' },
      { slug: 'html', label: 'HTML', color: '#E34F26' },
      { slug: 'css', label: 'CSS', color: '#1572B6' },
      { slug: 'docker', label: 'Docker', color: '#2496ED' },
      { slug: 'ai', label: 'AI', color: '#8B5CF6' },
    ].map((tag) =>
      prisma.tag.upsert({
        where: { slug: tag.slug },
        update: {},
        create: tag,
      }),
    ),
  )

  console.log(`Seeded ${tags.length} tags`)

  // Remove the old template project name when reseeding an adapted portfolio.
  await prisma.project.deleteMany({ where: { slug: 'attendai' } })

  // Admin user (optional in local development)
  const adminEmail = process.env.SEED_ADMIN_EMAIL
  const adminPassword = process.env.SEED_ADMIN_PASSWORD
  let adminId: string | undefined

  if (!adminEmail || !adminPassword) {
    console.warn('SEED_ADMIN_EMAIL or SEED_ADMIN_PASSWORD not set — skipping admin user and demo post')
  } else {
    const bcrypt = await import('bcryptjs')
    const passwordHash = await bcrypt.hash(adminPassword, 12)

    const admin = await prisma.user.upsert({
      where: { email: adminEmail },
      update: {},
      create: { email: adminEmail, passwordHash },
    })

    adminId = admin.id
    console.log(`Seeded admin user: ${admin.email}`)
  }

  // Projects are seeded independently of the optional admin account.
  const projects = [
  {
    slug: 'ai-crew',
    title: 'AI-Crew',
    role: 'In Progress · AI / Full Stack',
    shortDescription:
      'An AI-powered company operations platform exploring specialized AI agents for business workflows, project management, research and engineering tasks.',
    tagline: 'Currently in progress',

    descriptionMd:
      '## AI-Crew\n\n' +
      'AI-Crew is an AI-powered company operations platform currently under active development.\n\n' +
      'The project explores how specialized AI agents can work together to support different areas of a software-driven company while keeping workflows, actions and outputs organized.\n\n' +
      '### What it aims to do\n\n' +
      '- Provides specialized AI agents for different responsibilities.\n' +
      '- Supports company and business workflows.\n' +
      '- Assists with project and task management.\n' +
      '- Supports AI-assisted research.\n' +
      '- Assists with engineering-oriented workflows.\n' +
      '- Maintains persistent application data.\n' +
      '- Tracks AI actions and workflow activity.\n' +
      '- Connects multiple AI capabilities through a unified application.\n\n' +
      '### Architecture direction\n\n' +
      'Frontend → Backend → AI Agents → Data / Services\n\n' +
      '### Project status\n\n' +
      'AI-Crew is currently **in progress** and is actively evolving rather than being presented as a finished production platform.\n\n' +
      '### Technology\n\n' +
      'AI, React, Java, Spring Boot, Docker and supporting full-stack technologies.\n\n' +
      '### Repository\n\n' +
      '[GitHub](https://github.com/zeeshanverse/AI-Crew)',

    startedAt: new Date('2026-09-01'),
    endedAt: null,

    featured: true,
    published: true,
    displayOrder: 0,

    liveUrl: null,
    repoUrl: 'https://github.com/zeeshanverse/AI-Crew',

    projectTags: {
      create: [
        { tag: { connect: { slug: 'react' } } },
        { tag: { connect: { slug: 'java' } } },
        { tag: { connect: { slug: 'ai' } } },
        { tag: { connect: { slug: 'docker' } } },
      ],
    },
  },

  {
    slug: 'voxflow-ai',
    title: 'VoxFlow AI',
    role: 'Full-Stack Voice AI · Java / Spring Boot / React',
    shortDescription:
      'A full-stack voice AI and interview assistant combining speech-to-text, LLM-powered conversations, text-to-speech, authentication, persistent conversations and interview analytics.',
    tagline: 'Voice AI · Interview Assistant',

    descriptionMd:
      '## VoxFlow AI\n\n' +
      'VoxFlow AI is a full-stack voice AI and interview assistant designed to combine traditional software engineering with conversational AI and speech technologies.\n\n' +
      '### What it does\n\n' +
      '- Converts spoken input into text using speech-to-text services.\n' +
      '- Processes conversations through LLM-powered assistant logic.\n' +
      '- Converts assistant responses back into speech.\n' +
      '- Maintains persistent conversations.\n' +
      '- Provides authentication and protected application flows.\n' +
      '- Supports an interview-focused mode.\n' +
      '- Provides interview analytics and evaluation-oriented workflows.\n' +
      '- Persists application and conversation data using PostgreSQL.\n\n' +
      '### Architecture\n\n' +
      'React frontend → Spring Boot backend → speech / AI providers → PostgreSQL\n\n' +
      'The backend acts as the central application layer so provider integrations and API credentials remain outside the browser.\n\n' +
      '### Technology\n\n' +
      'Java, Spring Boot, Spring Security, React, Vite, PostgreSQL, JWT, AssemblyAI, Gemini, ElevenLabs and Docker.\n\n' +
      '### Project direction\n\n' +
      'VoxFlow AI is being developed as a practical AI engineering project rather than a simple API demo, with emphasis on backend architecture, provider abstraction, persistence, authentication and real application workflows.\n\n' +
      '### Repository\n\n' +
      '[GitHub](https://github.com/zeeshanverse/VoxFlow-AI)',

    startedAt: new Date('2026-09-01'),
    endedAt: null,

    featured: true,
    published: true,
    displayOrder: 1,

    liveUrl: null,
    repoUrl: 'https://github.com/zeeshanverse/VoxFlow-AI',

    projectTags: {
      create: [
        { tag: { connect: { slug: 'java' } } },
        { tag: { connect: { slug: 'spring-boot' } } },
        { tag: { connect: { slug: 'react' } } },
        { tag: { connect: { slug: 'sql' } } },
        { tag: { connect: { slug: 'docker' } } },
        { tag: { connect: { slug: 'ai' } } },
      ],
    },
  },

  {
    slug: 'banking-system',
    title: 'Banking System',
    role: 'Backend Engineering · Java / Spring Boot',
    shortDescription:
      'A secure Java and Spring Boot backend banking application featuring JWT authentication, account management, financial transactions, transaction history and PostgreSQL persistence.',

    descriptionMd:
      '## Banking System\n\n' +
      'Banking System is a backend-focused financial application built with Java and Spring Boot to model the core workflows of a modern banking platform.\n\n' +
      '### What it does\n\n' +
      '- Provides JWT-based authentication and protected API endpoints.\n' +
      '- Supports user and account management.\n' +
      '- Handles deposits and withdrawals.\n' +
      '- Supports account-to-account money transfers.\n' +
      '- Maintains transaction history and transaction records.\n' +
      '- Provides transaction-oriented reporting and retrieval.\n' +
      '- Persists banking data using PostgreSQL.\n' +
      '- Uses JPA and JDBC for database interaction.\n\n' +
      '### Architecture\n\n' +
      'Client → REST API → Controller → Service → Repository → PostgreSQL\n\n' +
      '### Security\n\n' +
      'Authentication is handled using JWT-based security with Spring Security.\n\n' +
      '### Technology\n\n' +
      'Java, Spring Boot, Spring Security, REST APIs, JWT, PostgreSQL, Spring Data JPA and JDBC.\n\n' +
      '### Repository\n\n' +
      '[GitHub](https://github.com/zeeshanverse/banking-system-springboot)',

    startedAt: new Date('2026-01-01'),
    endedAt: new Date('2026-08-31'),

    featured: true,
    published: true,
    displayOrder: 2,

    liveUrl: null,
    repoUrl:
      'https://github.com/zeeshanverse/banking-system-springboot',

    projectTags: {
      create: [
        { tag: { connect: { slug: 'java' } } },
        { tag: { connect: { slug: 'spring-boot' } } },
        { tag: { connect: { slug: 'rest-api' } } },
        { tag: { connect: { slug: 'sql' } } },
      ],
    },
  },

  {
    slug: 'smart-attendance-system',
    title: 'ATTEND AI (Smart Attendance System)',
    role: 'Final Year Project · Python / Flask / Computer Vision',
    shortDescription:
      'A final-year facial-recognition attendance system that detects and recognizes faces in real time, records timestamped attendance and keeps attendance data organized for management.',

    descriptionMd:
      '## ATTEND AI (Smart Attendance System)\n\n' +
      '**Final Year Project** — ATTEND AI is a facial-recognition attendance management system developed to automate the process of identifying users and recording attendance. **I led this final-year project**, coordinating the team, task allocation, feature integration, debugging and final delivery.\n\n' +
      '### What it does\n\n' +
      '- Captures faces through a camera-based workflow.\n' +
      '- Detects faces in real time using OpenCV.\n' +
      '- Recognizes registered users using facial-recognition technology.\n' +
      '- Records attendance with identity and timestamp.\n' +
      '- Stores attendance records using SQLite.\n' +
      '- Provides a Flask-based application layer.\n\n' +
      '### Architecture\n\n' +
      'Camera → Face Detection → Face Recognition → Identity Matching → Attendance Recording → Database\n\n' +
      '### Technology\n\n' +
      'Python, Flask, OpenCV, face_recognition, dlib, NumPy, SQLite, HTML, CSS and JavaScript.\n\n' +
      '### Repository\n\n' +
      '[GitHub](https://github.com/zeeshanverse/smart-attendance-system)\n\n' +
      '### Live Demo\n\n' +
      'https://smart-attendance-system-tvmk.onrender.com/api/auth/demo',

    startedAt: new Date('2025-01-01'),
    endedAt: new Date('2025-05-31'),

    featured: true,
    published: true,
    displayOrder: 3,

    liveUrl:
      'https://smart-attendance-system-tvmk.onrender.com/api/auth/demo',

    repoUrl:
      'https://github.com/zeeshanverse/smart-attendance-system',

    projectTags: {
      create: [
        { tag: { connect: { slug: 'python' } } },
        { tag: { connect: { slug: 'flask' } } },
        { tag: { connect: { slug: 'opencv' } } },
        { tag: { connect: { slug: 'sqlite' } } },
      ],
    },
  },

  {
    slug: 'jobtrack',
    title: 'JobTrack',
    role: 'In Progress · HTML / CSS / JavaScript',
    shortDescription:
      'An in-progress job application tracker for recording companies, roles, application status, job URLs and application statistics.',
    tagline: 'Currently in progress',

    descriptionMd:
      '## JobTrack\n\n' +
      'JobTrack is an in-progress job application tracker built to make an active job search easier to organize.\n\n' +
      '### Current features\n\n' +
      '- Add and record job applications.\n' +
      '- Track companies and roles.\n' +
      '- Track application status.\n' +
      '- Store job URLs.\n' +
      '- View application statistics.\n\n' +
      '### Current implementation\n\n' +
      'The current version uses HTML, CSS and JavaScript.\n\n' +
      '### Planned improvements\n\n' +
      'The roadmap includes local storage, filtering, editing and deleting applications, followed by a React frontend and Spring Boot backend.\n\n' +
      '### Project status\n\n' +
      'JobTrack is currently **in progress** and is being developed incrementally.\n\n' +
      '### Repository\n\n' +
      '[GitHub](https://github.com/zeeshanverse/job-tracker)',

    startedAt: new Date('2026-01-01'),
    endedAt: null,

    featured: true,
    published: true,
    displayOrder: 4,

    liveUrl: null,
    repoUrl: 'https://github.com/zeeshanverse/job-tracker',

    projectTags: {
      create: [
        { tag: { connect: { slug: 'html' } } },
        { tag: { connect: { slug: 'css' } } },
        { tag: { connect: { slug: 'javascript' } } },
      ],
    },
  },

  {
    slug: 'mymeal',
    title: 'MyMeal',
    role: 'Full-Stack Web Application · Flask / JavaScript',
    shortDescription:
      'A food-ordering web application providing menu browsing, cart management and order placement through a complete frontend-to-backend workflow.',

    descriptionMd:
      '## MyMeal\n\n' +
      'MyMeal is a full-stack food-ordering web application designed around a complete customer ordering workflow.\n\n' +
      '### What it does\n\n' +
      '- Displays food items through a browsable menu.\n' +
      '- Lets users add and manage items in a shopping cart.\n' +
      '- Supports the order-placement workflow.\n' +
      '- Connects frontend interactions with Flask backend functionality.\n' +
      '- Uses database persistence for application data.\n\n' +
      '### Architecture\n\n' +
      'Frontend → Flask Backend → Database\n\n' +
      '### Technology\n\n' +
      'Python, Flask, HTML5, CSS3, JavaScript and MySQL.\n\n' +
      '### Repository\n\n' +
      '[GitHub](https://github.com/zeeshanverse/project-E-commerce-Website-MyMeal-)\n\n' +
      '### Live Demo\n\n' +
      'https://mymeal.onrender.com',

    startedAt: new Date('2024-01-01'),
    endedAt: new Date('2024-12-31'),

    featured: true,
    published: true,
    displayOrder: 5,

    liveUrl: 'https://mymeal.onrender.com',
    repoUrl:
      'https://github.com/zeeshanverse/project-E-commerce-Website-MyMeal-',

    projectTags: {
      create: [
        { tag: { connect: { slug: 'flask' } } },
        { tag: { connect: { slug: 'javascript' } } },
      ],
    },
  },
]

  for (const item of projects) {
    const existingProject = await prisma.project.findUnique({
      where: { slug: item.slug },
    })

    if (existingProject) {
      await prisma.projectTag.deleteMany({
        where: { projectId: existingProject.id },
      })

      const project = await prisma.project.update({
        where: { slug: item.slug },
        data: {
          title: item.title,
          shortDescription: item.shortDescription,
          descriptionMd: item.descriptionMd,
          tagline: item.tagline ?? null,
          role: item.role ?? null,
          featured: item.featured,
          published: item.published,
          displayOrder: item.displayOrder,
          startedAt: item.startedAt,
          endedAt: item.endedAt ?? null,
          liveUrl: item.liveUrl ?? null,
          repoUrl: item.repoUrl ?? null,
          projectTags: {
            create: item.projectTags.create,
          },
        },
      })

      console.log(`Updated project: ${project.title}`)
    } else {
      const project = await prisma.project.create({
        data: item,
      })

      console.log(`Seeded project: ${project.title}`)
    }
  }

  // Example post only exists when an admin account is available.
  if (adminId) {
    const post = await prisma.post.upsert({
      where: { slug: 'hello-world' },
      update: {},
      create: {
        slug: 'hello-world',
        title: 'Hello World',
        excerpt: 'The first post on the blog.',
        contentMd: '## Hello\n\nThis is a seed post.',
        readingMinutes: 1,
        publishedAt: new Date(),
        authorId: adminId,
      },
    })

    console.log(`Seeded post: ${post.title}`)
  }

}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
