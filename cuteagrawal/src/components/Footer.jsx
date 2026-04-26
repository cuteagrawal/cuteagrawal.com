export default function Footer() {
  const year = new Date().getFullYear()

  const linkCls = 'inline-flex items-center gap-1.5 text-[0.875rem] text-muted hover:text-foreground transition-colors no-underline'

  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a href="mailto:cuteagrawal9@gmail.com" className={linkCls}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              cuteagrawal9@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/cuteagrawal/" target="_blank" rel="noreferrer" className={linkCls}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <a href="tel:9057827288" className={linkCls}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.64 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (905) 782-7288
            </a>
            <a href="/CuteAgrawal_Resume.md" download="CuteAgrawal_Resume.md" className={linkCls}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
          </div>

          <div className="w-10 h-0.5 gradient-bg rounded-full" />

          <p className="text-[0.8rem] text-muted text-center">
            &copy; {year} <span className="text-accent-light">Cute Agrawal</span>. Built with React &amp; Vite.
          </p>
        </div>
      </div>
    </footer>
  )
}
