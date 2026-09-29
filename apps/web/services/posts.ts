import type { PostDetailResponse, PostListItemResponse, PostListResponse } from '@portfolio/shared'
import { Api } from '@/lib/api'

export type { PostDetailResponse, PostListItemResponse }


const FALLBACK_POSTS: PostListItemResponse[] = [
  {
    id: 'fallback-post-ai-crew',
    slug: 'building-ai-crew',
    title: 'Building AI-Crew: Exploring Multi-Agent Software',
    excerpt:
      'AI-Crew started as an experiment in how specialized AI agents could work together across company operations, research, project management and engineering workflows.',
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
    title: 'Why I Am Building JobTrack',
    excerpt:
      'A job-search problem became a project: turning applications, statuses and follow-ups into a focused engineering exercise.',
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

AI-Crew is an experiment in building software around **specialized AI agents** rather than treating AI as a single chat box.

The idea is simple: different company workflows require different kinds of reasoning, context and actions.

### The direction

AI-Crew is being developed around several areas:

- Business and company workflows.
- Project and task management.
- AI-assisted research.
- Engineering-oriented tasks.
- Specialized agent responsibilities.
- Persistent application data.
- Auditable AI actions.

### The engineering challenge

The interesting part is not simply connecting an LLM API.

The real challenge is designing boundaries between agents, application services, data and the user interface.

A useful AI application still needs the same fundamentals as any other serious software system:

- clear responsibilities,
- predictable APIs,
- persistence,
- authentication,
- validation,
- observability,
- and controlled execution.

### Why I am building it

AI-Crew gives me a practical environment to explore where traditional backend engineering meets modern AI application architecture.

The project is still **in progress**, so the architecture will continue evolving as the product grows.`
            : post.slug === 'building-voxflow-ai'
              ? `## Building VoxFlow AI

VoxFlow AI is my attempt to build a voice-driven AI application as a **real full-stack system**, rather than a simple browser demo connected directly to an AI provider.

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

The project gives me an opportunity to combine the Java backend skills I am building with AI-oriented services.

Spring Boot acts as the central application layer while React handles the user experience.

This also keeps provider credentials away from the browser.

### The AI stack

The project explores integrations with:

- AssemblyAI for speech-to-text.
- Gemini for conversational AI.
- ElevenLabs for text-to-speech.
- PostgreSQL for persistence.

### The bigger goal

I do not want VoxFlow AI to remain a collection of API calls.

The goal is to turn it into a proper application with authentication, persistent conversations, interview mode and analytics.

That is where the interesting engineering work begins.`
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
                        ? `## Why I Am Building JobTrack

JobTrack started from a real problem.

I am actively job hunting, which means applications, companies, roles, job links and statuses can quickly become difficult to keep organized.

Instead of treating that as just another spreadsheet problem, I decided to turn it into a software project.

### The first version

The current implementation is intentionally simple:

- HTML.
- CSS.
- JavaScript.

The goal is to establish the core workflow before introducing more infrastructure.

### What comes next

The planned direction includes:

- Local storage.
- Filtering.
- Editing applications.
- Deleting applications.
- A React frontend.
- A Spring Boot backend.

### Why this project matters

JobTrack is also an exercise in product thinking.

Start with a real problem.

Build the smallest useful version.

Then let the requirements determine how the architecture should evolve.`
                        : `## Building Toward Java Full-Stack Engineering

My current learning path is centered on Java, Spring Boot, Spring Security, REST APIs, SQL, React, Docker and microservices.

### Learn by building

Rather than learning every technology in isolation, I am using projects to turn each concept into something concrete.

The Banking System gives me backend experience with REST APIs, JWT authentication and PostgreSQL.

MyMeal helped me understand a complete frontend-to-backend web workflow.

ATTEND AI introduced computer vision and a different kind of application pipeline.

VoxFlow AI now combines backend engineering with AI and speech technologies.

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
  );

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
    if (!res.ok) return FALLBACK_POST_DETAILS[slug] ?? null
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

export function formatDate(iso: string): { day: string; month: string; year: number } {
  const d = new Date(iso)
  const month = d.toLocaleString('en-US', { month: 'short' }).toUpperCase()
  return { day: String(d.getDate()).padStart(2, '0'), month, year: d.getFullYear() }
}
