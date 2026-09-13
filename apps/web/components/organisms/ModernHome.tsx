'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import ChatPanel from '@/components/organisms/ChatPanel'
import { submitContact } from '@/services/contact'
import GithubIcon from '@/components/atoms/GithubIcon'
import LinkedinIcon from '@/components/atoms/LinkedinIcon'
import MailIcon from '@/components/atoms/MailIcon'
import { SITE_AUTHOR } from '@/lib/site'
import './ModernHome.css'

const projects = [
  {
    slug: 'banking-system',
    title: 'Banking System',
    type: 'Backend',
    year: '2026',
    description: 'A production-minded banking API with JWT security, account management, transfers, transactions and PostgreSQL persistence.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA', 'JWT'],
    repo: 'https://github.com/zeeshanverse/banking-system-springboot',
    featured: true,
  },
  {
    slug: 'smart-attendance-system',
    title: 'Attend AI',
    type: 'Computer Vision',
    year: '2025',
    description: 'Real-time facial-recognition attendance system that records timestamped attendance and keeps management data organized.',
    stack: ['Python', 'Flask', 'OpenCV', 'SQLite'],
    repo: 'https://github.com/zeeshanverse/smart-attendance-system',
    live: 'https://smart-attendance-system-tvmk.onrender.com/api/auth/demo',
    featured: true,
  },
  {
    slug: 'mymeal',
    title: 'MyMeal',
    type: 'Full Stack',
    year: '2024',
    description: 'A food-ordering web application with menu discovery, cart management and order placement built around a clean user flow.',
    stack: ['Flask', 'JavaScript', 'HTML', 'CSS'],
    repo: 'https://github.com/zeeshanverse/project-E-commerce-Website-MyMeal-',
    live: 'https://mymeal.onrender.com',
    featured: false,
  },
  {
    slug: 'jobtrack', title: 'JobTrack', type: 'In Progress', year: '2026',
    description: 'A job application tracker I am actively building around a real problem: keeping companies, roles, statuses and application links organized.',
    stack: ['HTML', 'CSS', 'JavaScript'], repo: 'https://github.com/zeeshanverse/job-tracker', featured: false,
  },
]

const filters = ['All', 'Backend', 'Full Stack', 'Computer Vision', 'In Progress']

const stack = [
  ['Java', 'Core language'],
  ['Spring Boot', 'Backend framework'],
  ['Spring Security', 'Authentication'],
  ['REST APIs', 'Service design'],
  ['PostgreSQL', 'Relational data'],
  ['React', 'Frontend'],
  ['Docker', 'Containers'],
  ['Git / GitHub', 'Workflow'],
]

function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setLoading(true); setError('')
    const form = e.currentTarget
    try {
      await submitContact({ name: (form.elements.namedItem('name') as HTMLInputElement).value, email: (form.elements.namedItem('email') as HTMLInputElement).value, message: (form.elements.namedItem('message') as HTMLTextAreaElement).value })
      setSent(true); form.reset()
    } catch { setError('Could not send right now. Please email me directly instead.') }
    finally { setLoading(false) }
  }
  return <form className="conversation-form" onSubmit={handleSubmit}>
    <label>Name<input name="name" required disabled={sent} placeholder="Your name" /></label>
    <label>Email<input name="email" type="email" required disabled={sent} placeholder="you@example.com" /></label>
    <label>Message<textarea name="message" required minLength={10} maxLength={2000} disabled={sent} placeholder="Tell me about the role, project or problem..." /></label>
    <button className="modern-btn primary" type="submit" disabled={loading || sent}>{loading ? 'Sending…' : sent ? 'Message sent ✓' : 'Send message ↗'}</button>
    {error && <small className="form-error">{error}</small>}
  </form>
}

export default function ModernHome() {
  const [filter, setFilter] = useState('All')
  const visibleProjects = useMemo(
    () => (filter === 'All' ? projects : projects.filter((project) => project.type === filter)),
    [filter],
  )

  return (
    <div className="modern-home">
      <section className="modern-hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR SOFTWARE ENGINEERING ROLES</div>
          <p className="hero-kicker">JAVA · SPRING BOOT · FULL STACK</p>
          <h1>I build software that<br /><span>solves real problems.</span></h1>
          <p className="hero-lede">
            I&apos;m Mohammed Zeeshan, a Java Full-Stack Software Engineer focused on backend systems,
            REST APIs, databases and thoughtful frontend experiences.
          </p>
          <div className="hero-actions">
            <Link href="#projects" className="modern-btn primary">Explore my work <span>↓</span></Link>
            <Link href="/MohammedZeeshan__Resume.pdf" target="_blank" className="modern-btn ghost">View resume ↗</Link>
          </div>
          <div className="social-row">
            <a href={SITE_AUTHOR.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
            <a href={SITE_AUTHOR.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn</a>
            <a href={`mailto:${SITE_AUTHOR.email}`}><MailIcon /> Email</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="code-window">
            <div className="window-bar"><span /><span /><span /><b>zeeshan.java</b></div>
            <pre><code><span className="code-muted">public class</span> <span className="code-accent">Zeeshan</span> {'{'}{`\n`}
              <span className="code-muted">  String</span> focus = <span className="code-string">&quot;backend engineering&quot;</span>;{`\n`}
              <span className="code-muted">  String</span> stack = <span className="code-string">&quot;Java + Spring + React&quot;</span>;{`\n`}
              <span className="code-muted">  boolean</span> learning = <span className="code-accent">true</span>;{`\n`}
              <span className="code-muted">  void</span> <span className="code-accent">build</span>() {'{'}{`\n`}
              {`    `}<span className="code-comment">// turn ideas into useful software</span>{`\n`}
              {`  }\n}`}</code></pre>
            <div className="terminal-line"><span>●</span> currently building <b>JobTrack</b></div>
          </div>
          <div className="floating-chip chip-one">REST APIs</div>
          <div className="floating-chip chip-two">PostgreSQL</div>
          <div className="floating-chip chip-three">Docker</div>
        </div>
      </section>

      <section className="proof-strip" aria-label="portfolio highlights">
        <div><strong>03+</strong><span>featured projects</span></div>
        <div><strong>Java</strong><span>primary language</span></div>
        <div><strong>Spring</strong><span>backend ecosystem</span></div>
        <div><strong>DSA</strong><span>actively sharpening</span></div>
      </section>

      <section className="modern-section" id="projects">
        <div className="section-intro">
          <div><p className="section-label">01 / SELECTED WORK</p><h2>Projects with a purpose.</h2></div>
          <p>Not just demos. Each project is an opportunity to practice architecture, APIs, data modelling, security and user experience.</p>
        </div>
        <div className="filter-row">
          {filters.map((item) => (
            <button key={item} className={filter === item ? 'filter active' : 'filter'} onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>
        <div className="modern-project-grid">
          {visibleProjects.map((project, index) => (
            <article key={project.slug} className={`modern-project ${project.featured ? 'featured' : ''}`}>
              <div className="project-top"><span>0{index + 1}</span><span>{project.year}</span></div>
              <div className="project-visual"><div className="project-grid-lines" /><div className="project-mark">{project.title.slice(0, 2).toUpperCase()}</div></div>
              <div className="project-body">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  <Link href={`/project/${project.slug}`}>Case study <span>→</span></Link>
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live ↗</a>}
                  <a href={project.repo} target="_blank" rel="noreferrer">GitHub ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="view-all-projects"><Link href="/projects" className="modern-btn ghost">View all projects →</Link><span>Completed work, ongoing builds, year, stack and full case studies.</span></div>
      </section>

      <section className="modern-section engineering-section" id="stack">
        <div className="section-intro">
          <div><p className="section-label">02 / TOOLKIT</p><h2>My engineering toolkit.</h2></div>
          <p>I&apos;m building depth first: strong Java fundamentals, reliable Spring Boot services and the frontend skills needed to ship complete products.</p>
        </div>
        <div className="stack-grid">{stack.map(([name, desc], index) => <div className="stack-item" key={name}><span>0{index + 1}</span><div><strong>{name}</strong><small>{desc}</small></div><b>↗</b></div>)}</div>
      </section>

      <section className="modern-section build-section" id="about">
        <div className="build-card">
          <div><p className="section-label">03 / HOW I WORK</p><h2>Learn. Build. Improve.</h2></div>
          <div className="principles">
            <div><span>01</span><h3>Understand</h3><p>Break the problem down before writing code. Define the data, API and user flow first.</p></div>
            <div><span>02</span><h3>Build</h3><p>Prefer simple, maintainable implementations that can grow without unnecessary complexity.</p></div>
            <div><span>03</span><h3>Iterate</h3><p>Use projects, DSA and feedback to continuously strengthen the engineering fundamentals.</p></div>
          </div>
        </div>
      </section>

      <section className="modern-section contact-modern" id="contact">
      <div className="conversation-layout">

        {/* LEFT — heading */}
        <div className="contact-copy">
          <p className="section-label">04 / LET&apos;S TALK</p>

          <h2>Start a conversation.</h2>

          <p>
            I&apos;m open to software engineering and full-stack opportunities.
            Tell me what you&apos;re building, hiring for, or trying to solve.
          </p>

          <div className="contact-meta">
            <a href={`mailto:${SITE_AUTHOR.email}`}>
              {SITE_AUTHOR.email} ↗
            </a>

            <span>Replies typically within 24h</span>
          </div>
        </div>

        {/* TOP RIGHT — AI assistant */}
        <div className="chat-wrap">
          <div className="chat-label">
            OR ASK MY AI ASSISTANT
          </div>

          <ChatPanel />
        </div>

        {/* BOTTOM — full width contact form */}
        <div className="contact-form-wrap">
          <div className="contact-form-heading">
            <span>~/contact</span>
            <span>send a message ↗</span>
          </div>

          <ContactForm />
        </div>

      </div>
    </section>
    </div>
  )
}
