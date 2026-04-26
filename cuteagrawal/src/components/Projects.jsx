const projects = [
  {
    title: 'LazyFruit',
    subtitle: 'Full-Stack Job Board',
    badge: { label: 'Live Project', cls: 'bg-accent-blue/12 border border-accent-blue/30 text-[#818cf8]' },
    desc: 'A full-featured job board SPA that aggregates listings from LazyScrape, with auth, saved jobs, SEO, and analytics.',
    highlights: [
      <><strong className="text-foreground font-semibold">React 18 + Vite + Tailwind CSS v4</strong> — dark mode, responsive, mobile-optimized SPA with infinite scroll, skeleton loading, and optimistic UI</>,
      <><strong className="text-foreground font-semibold">Node.js/Express</strong> REST API with <strong className="text-foreground font-semibold">OAuth 2.0 / OIDC</strong> via AWS Cognito, server-side session auth, and PostgreSQL on RDS</>,
      <><strong className="text-foreground font-semibold">AWS Lambda</strong> post-confirmation trigger auto-provisions Cognito users into PostgreSQL on signup</>,
      <><strong className="text-foreground font-semibold">Google Gemini AI</strong> generates resume keyword tags from job descriptions; server-side XML sitemap with 24h in-memory cache</>,
      <><strong className="text-foreground font-semibold">GitHub Actions CI/CD</strong>: build → SCP to EC2 → Nginx restart, triggered on push to main</>,
    ],
    tags: ['React 18', 'Vite', 'Node.js', 'PostgreSQL', 'AWS', 'OAuth 2.0', 'Gemini AI', 'Tailwind CSS'],
  },
  {
    title: 'LazyScrape',
    subtitle: 'AI-Guided Web Scraper',
    badge: { label: 'AI-Powered', cls: 'bg-emerald-400/10 border border-emerald-400/25 text-emerald-400' },
    desc: 'The data engine powering LazyFruit. Uses Gemini to navigate arbitrary company career pages without hardcoded CSS selectors.',
    highlights: [
      <><strong className="text-foreground font-semibold">Playwright + Gemini 2.5 Flash</strong> — selector-free scraping with LLM-driven pagination, iframe ranking, and job detail extraction</>,
      <><strong className="text-foreground font-semibold">asyncio Semaphore</strong> caps 5 concurrent browser tabs; 6-stage JSON repair cascade handles malformed LLM output reliably</>,
      <><strong className="text-foreground font-semibold">FastAPI + WebSocket</strong> control panel with reconnect history replay (500 log lines + 3,000 structured events)</>,
      <><strong className="text-foreground font-semibold">asyncpg</strong> ACID batch inserts with active/inactive job deduplication via set intersection against existing DB URLs</>,
      <><strong className="text-foreground font-semibold">playwright-stealth + xvfb-run</strong> for bot-detection evasion and headless Linux server deployment</>,
    ],
    tags: ['Python', 'Playwright', 'FastAPI', 'Gemini AI', 'asyncio', 'PostgreSQL', 'WebSocket'],
  },
  {
    title: 'NEWSLY',
    subtitle: 'Chrome Extension — Capstone 2024',
    badge: { label: 'Capstone Winner', cls: 'bg-accent-blue/12 border border-accent-blue/30 text-[#818cf8]' },
    desc: 'A Chrome extension for real-time fake news detection. Trained and integrated a BERT NLP model for in-browser article classification.',
    highlights: [
      <><strong className="text-foreground font-semibold">BERT NLP model</strong> trained to classify fabricated news articles with high accuracy, embedded directly in the extension</>,
      <><strong className="text-foreground font-semibold">Content script architecture</strong> extracts page text and passes it to the ML pipeline without disrupting the host page</>,
      <>Designed a <strong className="text-foreground font-semibold">freemium monetization model</strong> applying product/analytics knowledge from AutoTrader</>,
    ],
    tags: ['Python', 'BERT', 'NLP', 'Chrome Extension', 'Machine Learning', 'JavaScript'],
  },
  {
    title: 'ADHD Focus App',
    subtitle: 'Hack for Good 2022',
    badge: { label: '1st Place · $2,500', cls: 'bg-yellow-400/12 border border-yellow-400/30 text-yellow-400' },
    desc: 'Won 1st place as a solo participant. Built an ADHD assistance app combining a focus-training game with passive behavioral tracking for clinical insights.',
    highlights: [
      <>Designed an <strong className="text-foreground font-semibold">interactive focus game</strong> that helps users with ADHD train attention in a therapeutic but engaging way</>,
      <><strong className="text-foreground font-semibold">Passive click tracking</strong> captures time-series behavioral data for doctors — longitudinal insights beyond clinic visits</>,
      <>Scoped, designed, and shipped a <strong className="text-foreground font-semibold">working prototype solo</strong> within the hackathon time constraint</>,
    ],
    tags: ['Solo Project', 'Game Design', 'Behavioral Tracking', 'Healthcare Tech'],
  },
]

export default function Projects() {
  return (
    <section className="py-24" id="projects">
      <div className="max-w-[1100px] mx-auto px-8">
        <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.12em] uppercase text-accent-light mb-3 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-gradient-to-r before:from-accent-blue before:to-accent before:rounded-full">
          What I&apos;ve Built
        </p>
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-foreground mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="project-card bg-card border border-white/[0.06] rounded-xl p-8 flex flex-col gap-4 hover:border-white/[0.18] hover:bg-card-hover hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 relative overflow-hidden">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[1.15rem] font-extrabold text-foreground tracking-tight leading-tight">{p.title}</div>
                  <div className="text-[0.8rem] text-muted mt-0.5">{p.subtitle}</div>
                </div>
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[0.72rem] font-bold whitespace-nowrap flex-shrink-0 ${p.badge.cls}`}>
                  {p.badge.label}
                </span>
              </div>

              <p className="text-[0.9rem] text-muted leading-[1.7]">{p.desc}</p>

              <ul className="flex flex-col gap-2">
                {p.highlights.map((h, j) => (
                  <li key={j} className="text-[0.85rem] text-muted pl-5 relative leading-[1.55] before:content-['→'] before:absolute before:left-0 before:text-accent-light before:text-[0.75rem]">
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {p.tags.map(t => (
                  <span key={t} className="px-3 py-1 bg-accent/12 border border-accent/25 rounded-full text-[0.75rem] font-semibold text-accent-light">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
