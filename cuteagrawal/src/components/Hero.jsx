export default function Hero() {
  return (
    <section className="min-h-svh flex items-center relative overflow-hidden pt-20" id="hero">
      <div className="hero-grid" aria-hidden="true" />

      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/5 w-[400px] h-[400px] bg-accent/8 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-[1100px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-12 lg:gap-16">

          {/* Text */}
          <div className="text-center lg:text-left">
            <p className="text-muted text-base font-medium mb-1">Hi, I&apos;m</p>

            <h1 className="text-[clamp(2.75rem,7vw,5rem)] font-black tracking-[-0.04em] leading-[1.05] mb-4 hero-name-gradient">
              Cute Agrawal
            </h1>

            <p className="text-muted text-[clamp(1rem,2.5vw,1.3rem)] font-medium mb-6 leading-relaxed">
              <span className="text-accent-light font-semibold">Analytics Engineer</span> &amp; Full-Stack Developer
            </p>

            <p className="text-muted text-base leading-[1.8] mb-9 max-w-[520px] mx-auto lg:mx-0">
              I build data pipelines, web platforms, and AI-powered tools — from
              GTM/GA4 implementations at scale to full-stack apps with React, Node.js,
              and Python. Currently at{' '}
              <strong className="text-foreground font-semibold">AutoTrader Canada</strong>,
              shipping analytics infrastructure and automating what should already be automated.
            </p>

            {/* Contact chips */}
            <div className="flex flex-wrap gap-2.5 mb-10 justify-center lg:justify-start">
              <a href="mailto:cuteagrawal9@gmail.com" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-card border border-white/[0.06] rounded-full text-[0.825rem] text-muted hover:bg-card-hover hover:border-white/[0.18] hover:text-foreground hover:-translate-y-px transition-all no-underline">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                cuteagrawal9@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/cuteagrawal/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-card border border-white/[0.06] rounded-full text-[0.825rem] text-muted hover:bg-card-hover hover:border-white/[0.18] hover:text-foreground hover:-translate-y-px transition-all no-underline">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a href="tel:9057827288" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-card border border-white/[0.06] rounded-full text-[0.825rem] text-muted hover:bg-card-hover hover:border-white/[0.18] hover:text-foreground hover:-translate-y-px transition-all no-underline">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.64 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (905) 782-7288
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#experience" className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-lg font-semibold text-[0.925rem] shadow-[0_4px_20px_rgba(124,58,237,0.35)] hover:opacity-92 hover:-translate-y-0.5 transition-all no-underline">
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="/CuteAgrawal_Resume.md" download="CuteAgrawal_Resume.md" className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-foreground rounded-lg font-semibold text-[0.925rem] border border-white/[0.18] hover:bg-card hover:border-accent hover:-translate-y-0.5 transition-all no-underline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px]">
              {/* Gradient ring */}
              <div className="absolute inset-0 rounded-full p-[3px] gradient-bg">
                <div className="w-full h-full rounded-full bg-bg2" />
              </div>
              {/* Photo */}
              <div className="absolute inset-[3px] rounded-full overflow-hidden">
                <img
                  src="/profile.jpeg"
                  alt="Cute Agrawal"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 animate-bounce-down flex flex-col items-center gap-1.5 text-muted text-[0.7rem] font-semibold tracking-[0.12em] uppercase" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
        Scroll
      </div>
    </section>
  )
}
