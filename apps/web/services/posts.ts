import type { PostDetailResponse, PostListItemResponse, PostListResponse } from '@portfolio/shared'
import { Api } from '@/lib/api'

export type { PostDetailResponse, PostListItemResponse }


const FALLBACK_POSTS: PostListItemResponse[] = [
  {
    id: 'fallback-post-java-journey', slug: 'building-toward-java-full-stack',
    title: 'Building Toward Java Full-Stack Engineering',
    excerpt: 'Why I am focusing on Java, Spring Boot, REST APIs, SQL, React and Docker — and how projects are shaping that journey.',
    coverImage: null, readingMinutes: 4, publishedAt: '2026-09-01T00:00:00.000Z',
    tags: [{ id: 'java', slug: 'java', label: 'Java', color: null }, { id: 'spring', slug: 'spring-boot', label: 'Spring Boot', color: null }],
  },
  {
    id: 'fallback-post-attendai', slug: 'lessons-from-attend-ai',
    title: 'What I Learned Leading Attend AI',
    excerpt: 'Lessons from leading my final-year project: coordinating a team, integrating computer vision, and turning a rough idea into a working system.',
    coverImage: null, readingMinutes: 5, publishedAt: '2026-08-18T00:00:00.000Z',
    tags: [{ id: 'leadership', slug: 'leadership', label: 'Leadership', color: null }, { id: 'computer-vision', slug: 'computer-vision', label: 'Computer Vision', color: null }],
  },
  {
    id: 'fallback-post-jobtrack', slug: 'why-i-am-building-jobtrack',
    title: 'Why I Am Building JobTrack',
    excerpt: 'A job-search problem became a project: turning applications, statuses and follow-ups into a focused engineering exercise.',
    coverImage: null, readingMinutes: 3, publishedAt: '2026-08-05T00:00:00.000Z',
    tags: [{ id: 'project', slug: 'project', label: 'Project', color: null }, { id: 'full-stack', slug: 'full-stack', label: 'Full Stack', color: null }],
  },
]

const FALLBACK_POST_DETAILS: Record<string, PostDetailResponse> = Object.fromEntries(
  FALLBACK_POSTS.map((post) => [post.slug, {
    ...post,
    contentMd: post.slug === 'lessons-from-attend-ai'
      ? `## Leading Attend AI\n\nAttend AI was my **final-year project**, and I led the project team through planning, task allocation, integration, debugging and final delivery.\n\n### What I learned\n- Break a large project into clear ownership areas.\n- Keep interfaces between computer vision, backend logic and persistence explicit.\n- Integrate early instead of waiting until the end.\n- Treat communication and debugging as engineering skills.\n\nThe project became more than a computer-vision exercise: it taught me how to take responsibility for a product from idea to delivery.`
      : post.slug === 'why-i-am-building-jobtrack'
        ? `## Why I Am Building JobTrack\n\nI am currently actively job hunting, so JobTrack started from a real problem I experience myself: keeping applications, roles, links and statuses organized.\n\n### The engineering goal\nBuild the first lightweight version, then evolve it toward a React + Spring Boot + database stack as the requirements become clearer.\n\nThe project lets me practice product thinking while continuing my Java full-stack learning path.`
        : `## Building Toward Java Full-Stack Engineering\n\nMy current learning path is centered on Java, Spring Boot, Spring Security, REST APIs, SQL, React, Docker and microservices.\n\n### Learn by building\nRather than learning every technology in isolation, I am using projects to turn each concept into something concrete — from REST APIs and JWT authentication in the Banking System to frontend/backend integration in MyMeal.\n\n### The next step\nJobTrack is the next iteration: a real problem, incremental delivery and a planned move toward a stronger full-stack architecture.`,
    authorId: 'fallback-author', createdAt: post.publishedAt, updatedAt: post.publishedAt, deletedAt: null,
  }])
)

const api = new Api()

export async function getPosts(): Promise<PostListItemResponse[]> {
  try {
    const res = await api.get('/posts', { next: { revalidate: 60 } })
    if (!res.ok) return FALLBACK_POSTS
    const data = (await res.json()) as PostListResponse
    return data.items
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
