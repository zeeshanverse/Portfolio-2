import type { PostDetailResponse, PostListItemResponse, PostListResponse } from '@portfolio/shared'
import { Api } from '@/lib/api'

export type { PostDetailResponse, PostListItemResponse }

const FALLBACK_POSTS: PostListItemResponse[] = [
  {
    id: 'fallback-post-ai-crew',
    slug: 'building-ai-crew',
    title: 'Building AI-Crew: Exploring Multi-Agent Software',
    excerpt:
      'AI-Crew explores how specialized AI agents can work together across company operations, research, project management and engineering workflows.',
    coverImage: null,
    readingMinutes: 6,
    publishedAt: '2026-09-28T00:00:00.000Z',
    tags: [
      {
        id: 'ai',
        slug: 'ai',
        label: 'AI',
        color: null,
      },
      {
        id: 'engineering',
        slug: 'engineering',
        label: 'Engineering',
        color: null,
      },
    ],
  },

  {
    id: 'fallback-post-voxflow',
    slug: 'building-voxflow-ai',
    title: 'Building VoxFlow AI: From Voice Input to AI Conversations',
    excerpt:
      'A look at the architecture behind VoxFlow AI and why I chose to connect React, Spring Boot, speech services, LLMs, text-to-speech and PostgreSQL through a single backend.',
    coverImage: null,
    readingMinutes: 7,
    publishedAt: '2026-09-20T00:00:00.000Z',
    tags: [
      {
        id: 'voice-ai',
        slug: 'voice-ai',
        label: 'Voice AI',
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
    ],
  },

  {
    id: 'fallback-post-banking',
    slug: 'what-building-a-banking-api-taught-me',
    title: 'What Building a Banking API Taught Me About Backend Engineering',
    excerpt:
      'Building a banking backend pushed me beyond simple CRUD into authentication, transactions, persistence, validation and thinking carefully about application boundaries.',
    coverImage: null,
    readingMinutes: 5,
    publishedAt: '2026-09-10T00:00:00.000Z',
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
        id: 'backend',
        slug: 'backend',
        label: 'Backend',
        color: null,
      },
    ],
  },

  {
    id: 'fallback-post-java-journey',
    slug: 'building-toward-java-full-stack',
    title: 'Building Toward Java Full-Stack Engineering',
    excerpt:
      'Why I am focusing on Java, Spring Boot, REST APIs, SQL, React and Docker — and how projects are shaping that journey.',
    coverImage: null,
    readingMinutes: 4,
    publishedAt: '2026-09-01T00:00:00.000Z',
    tags: [
      {
        id: 'java',
        slug: 'java',
        label: 'Java',
        color: null,
      },
      {
        id: 'spring',
        slug: 'spring-boot',
        label: 'Spring Boot',
        color: null,
      },
    ],
  },

  {
    id: 'fallback-post-attendai',
    slug: 'lessons-from-attend-ai',
    title: 'What I Learned Leading Attend AI',
    excerpt:
      'Lessons from leading my final-year project: coordinating a team, integrating computer vision, and turning a rough idea into a working system.',
    coverImage: null,
    readingMinutes: 5,
    publishedAt: '2026-08-18T00:00:00.000Z',
    tags: [
      {
        id: 'leadership',
        slug: 'leadership',
        label: 'Leadership',
        color: null,
      },
      {
        id: 'computer-vision',
        slug: 'computer-vision',
        label: 'Computer Vision',
        color: null,
      },
    ],
  },

  {
    id: 'fallback-post-jobtrack',
    slug: 'why-i-am-building-jobtrack',
    title: 'Building JobTrack: Turning Job Search Into a Software Project',
    excerpt:
      'A real job-search problem became a practical software project for organizing applications, companies, roles, statuses and job links.',
    coverImage: null,
    readingMinutes: 3,
    publishedAt: '2026-08-05T00:00:00.000Z',
    tags: [
      {
        id: 'project',
        slug: 'project',
        label: 'Project',
        color: null,
      },
      {
        id: 'full-stack',
        slug: 'full-stack',
        label: 'Full Stack',
        color: null,
      },
    ],
  },
]

const FALLBACK_POST_DETAILS: Record<string, PostDetailResponse> =
  Object.fromEntries(
    FALLBACK_POSTS.map((post) => [
      post.slug,
      {
        ...post,

        contentMd:
          post.slug === 'building-ai-crew'
            ? `## Why AI-Crew exists

AI-Crew is a project focused on building software around **specialized AI agents** rather than treating AI as a single chat box.

The idea is simple: different company workflows require different kinds of reasoning, context and actions.

### The architecture

AI-Crew brings together several areas:

- Business and company workflows.
- Project and task management.
- AI-assisted research.
- Engineering-oriented tasks.
- Specialized agent responsibilities.
- Persistent application data.
- Auditable AI actions.

### The engineering challenge

The interesting part is not simply connecting an LLM API.

The real challenge is designing clear boundaries between agents, application services, data and the user interface.

A useful AI application still needs the same fundamentals as any other serious software system:

- clear responsibilities,
- predictable APIs,
- persistence,
- authentication,
- validation,
- observability,
- and controlled execution.

### Why I built it

AI-Crew gave me a practical environment to explore where traditional backend engineering meets modern AI application architecture.

The completed project demonstrates how specialized AI agents, application services, persistent data and controlled workflows can be brought together into a single full-stack system.

### What I learned

Building AI-Crew reinforced the importance of treating AI as part of a larger software system rather than as an isolated API integration.

The project helped me think more carefully about agent boundaries, backend architecture, data persistence, workflow orchestration and controlled AI execution.`
            : post.slug === 'building-voxflow-ai'
              ? `## Building VoxFlow AI

VoxFlow AI is a full-stack voice-driven AI application built to connect speech, conversational AI and backend engineering into a single system.

The goal was to build something closer to a real application than a simple browser demo connected directly to an AI provider.

The architecture is centered around:

\`React → Spring Boot → AI / Speech Providers → PostgreSQL\`

### Voice becomes a pipeline

A voice interaction is more than sending text to an LLM.

The application needs to handle:

1. Speech recognition.
2. Conversation processing.
3. Assistant reasoning.
4. Text generation.
5. Text-to-speech.
6. Conversation persistence.

That makes the backend an important part of the system.

### Why Spring Boot?

The project gave me an opportunity to combine Java backend engineering with AI-oriented services.

Spring Boot acts as the central application layer while React handles the user experience.

This also keeps provider credentials away from the browser and gives the application a clear backend boundary.

### The AI stack

The project integrates technologies and services including:

- AssemblyAI for speech-to-text.
- Gemini for conversational AI.
- ElevenLabs for text-to-speech.
- PostgreSQL for persistence.

### What I built

VoxFlow AI brings these components together into a complete application workflow involving voice input, AI processing, spoken responses and persistent application data.

The project helped me understand how external AI services can be integrated behind a structured backend instead of being exposed directly to the frontend.

### What I learned

The biggest lesson from VoxFlow AI was that AI features still require strong software engineering fundamentals.

Authentication, persistence, provider abstraction, API design and backend architecture are just as important as the AI integration itself.`
              : post.slug === 'what-building-a-banking-api-taught-me'
                ? `## Beyond CRUD

Building the Banking System changed how I think about backend development.

At first glance, a banking application sounds like another CRUD project.

It quickly becomes more interesting once authentication, money movement and transaction history enter the picture.

### The backend responsibilities

The application uses:

- Java.
- Spring Boot.
- Spring Security.
- JWT authentication.
- PostgreSQL.
- JPA.
- JDBC.
- REST APIs.

### What I learned

A backend is not simply a collection of endpoints.

Each endpoint sits inside a larger workflow.

For example, a transfer needs validation, account lookup, transaction handling and persistence.

That forces you to think about what should happen when something fails halfway through the operation.

### Why this project mattered

The project helped me move from learning individual Spring Boot concepts toward thinking about how those concepts work together inside an actual application.

It also reinforced something I keep seeing across my projects:

**good software is mostly about managing boundaries and responsibilities clearly.**`
                : post.slug === 'lessons-from-attend-ai'
                  ? `## Leading Attend AI

Attend AI was my **final-year project**, and I led the project team through planning, task allocation, integration, debugging and final delivery.

The project combined computer vision, backend logic and database persistence into a working attendance system.

### What I learned

- Break a large project into clear ownership areas.
- Keep interfaces between computer vision, backend logic and persistence explicit.
- Integrate early instead of waiting until the end.
- Treat communication and debugging as engineering skills.
- Take responsibility for the final product rather than only one module.

### The technical side

The system uses Python, Flask, OpenCV, face recognition technology and SQLite.

The computer-vision pipeline handles face detection and recognition while the backend coordinates application functionality and attendance persistence.

### The bigger lesson

The project became more than a computer-vision exercise.

It taught me how to take responsibility for a product from idea to delivery.`
                  : post.slug === 'why-i-am-building-jobtrack'
                    ? `## Building JobTrack

JobTrack started from a real problem.

Managing job applications means keeping track of companies, roles, job links and application statuses across different opportunities.

Instead of treating that as just another spreadsheet problem, I turned it into a software project.

### The implementation

The completed version focuses on a lightweight application workflow built with:

- HTML.
- CSS.
- JavaScript.

The application provides a simple way to organize job applications and keep important information together.

### What I built

The project focuses on the core workflow required to manage applications:

- Recording job applications.
- Storing company and role information.
- Tracking application status.
- Keeping job URLs accessible.
- Organizing application information in one place.

### Why this project matters

JobTrack is also an exercise in product thinking.

Start with a real problem.

Build a focused solution.

Keep the implementation practical.

Then use the finished product to understand what makes an application genuinely useful.`
                    : `## Building Toward Java Full-Stack Engineering

My current learning path is centered on Java, Spring Boot, Spring Security, REST APIs, SQL, React, Docker and microservices.

### Learn by building

Rather than learning every technology in isolation, I am using projects to turn each concept into something concrete.

The Banking System gives me backend experience with REST APIs, JWT authentication and PostgreSQL.

MyMeal helped me understand a complete frontend-to-backend web workflow.

ATTEND AI introduced computer vision and a different kind of application pipeline.

VoxFlow AI combines backend engineering with AI and speech technologies.

AI-Crew takes that exploration further into AI-oriented application architecture.

### The next step

The goal is not to collect technologies.

It is to become comfortable building systems where those technologies have a reason to exist.

That means understanding the trade-offs, boundaries and engineering decisions behind the code.`,
        authorId: 'fallback-author',
        createdAt: post.publishedAt,
        updatedAt: post.publishedAt,
        deletedAt: null,
      },
    ]),
  )

const api = new Api()

export async function getPosts(): Promise<PostListItemResponse[]> {
  try {
    const res = await api.get('/posts', { next: { revalidate: 60 } })

    if (!res.ok) {
      return FALLBACK_POSTS
    }

    const data = (await res.json()) as PostListResponse

    // If the API/database is reachable but contains no posts,
    // keep the public blog populated using the portfolio's local posts.
    return data.items.length > 0 ? data.items : FALLBACK_POSTS
  } catch {
    return FALLBACK_POSTS
  }
}

export async function getPost(slug: string): Promise<PostDetailResponse | null> {
  try {
    const res = await api.get(`/posts/${slug}`, { next: { revalidate: 60 } })

    if (!res.ok) {
      return FALLBACK_POST_DETAILS[slug] ?? null
    }

    return res.json() as Promise<PostDetailResponse>
  } catch {
    return FALLBACK_POST_DETAILS[slug] ?? null
  }
}

export async function getAllSlugs(): Promise<string[]> {
  const posts = await getPosts()
  return posts.map((p) => p.slug)
}

export function getAllTags(posts: PostListItemResponse[]): [string, number][] {
  const counts = new Map<string, number>()

  for (const p of posts) {
    for (const t of p.tags) {
      counts.set(t.label, (counts.get(t.label) ?? 0) + 1)
    }
  }

  return [
    ['all', posts.length] as [string, number],
    ...Array.from(counts.entries()).sort((a, b) => b[1] - a[1]),
  ]
}

export function formatDate(iso: string): {
  day: string
  month: string
  year: number
} {
  const d = new Date(iso)
  const month = d.toLocaleString('en-US', { month: 'short' }).toUpperCase()

  return {
    day: String(d.getDate()).padStart(2, '0'),
    month,
    year: d.getFullYear(),
  }
}