import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  const linkCls = 'text-muted text-sm font-medium hover:text-foreground transition-colors no-underline'

  return (
    <nav className={`fixed top-0 inset-x-0 z-[1000] flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-300 ${
      scrolled ? 'bg-bg/85 backdrop-blur-xl border-b border-white/[0.06] !py-3.5' : ''
    }`}>
      <a href="#hero" className="text-[1.35rem] font-black tracking-[-0.04em] gradient-text hover:opacity-80 no-underline" onClick={close}>
        CA
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-9">
        <a href="#about" className={linkCls} onClick={close}>About</a>
        <a href="#experience" className={linkCls} onClick={close}>Experience</a>
        <a href="#projects" className={linkCls} onClick={close}>Projects</a>
        <a href="#skills" className={linkCls} onClick={close}>Skills</a>
        <a
          href="/CuteAgrawal_Resume.md"
          download="CuteAgrawal_Resume.md"
          className="px-5 py-2 gradient-bg text-white! rounded-lg font-semibold text-sm shadow-[0_2px_12px_rgba(124,58,237,0.3)] hover:opacity-88 hover:-translate-y-0.5 transition-all no-underline"
        >
          Download Resume
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-1.5 z-[1001] relative"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={`block w-[22px] h-0.5 bg-foreground rounded-full transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
        <span className={`block w-[22px] h-0.5 bg-foreground rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
        <span className={`block w-[22px] h-0.5 bg-foreground rounded-full transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
      </button>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-bg/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-[999]">
          <a href="#about" className="text-foreground text-xl font-medium no-underline" onClick={close}>About</a>
          <a href="#experience" className="text-foreground text-xl font-medium no-underline" onClick={close}>Experience</a>
          <a href="#projects" className="text-foreground text-xl font-medium no-underline" onClick={close}>Projects</a>
          <a href="#skills" className="text-foreground text-xl font-medium no-underline" onClick={close}>Skills</a>
          <a
            href="/CuteAgrawal_Resume.md"
            download="CuteAgrawal_Resume.md"
            className="mt-2 px-8 py-3 gradient-bg text-white! rounded-lg font-semibold text-base no-underline"
            onClick={close}
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  )
}
