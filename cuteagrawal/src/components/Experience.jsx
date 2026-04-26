const jobs = [
  {
    company: 'AutoTrader Canada — TRFFK',
    role: 'Analytics Engineer (formerly Analytics Implementation Specialist Intern)',
    date: 'Apr 2024 – Present · Toronto, ON',
    bullets: [
      <>Onboarded and maintained <strong className="text-foreground font-semibold">GTM + GA4</strong> web tracking for 600+ clients; implemented Volvo Canada OEM tracking as part of a <strong className="text-foreground font-semibold">$2.5M</strong> Jaguar/Land Rover analytics program</>,
      <>Architected and deployed a full-stack <strong className="text-foreground font-semibold">AWS-hosted client onboarding portal</strong> with a CI/CD pipeline, reducing ticket turnaround time by <strong className="text-foreground font-semibold">62.5%</strong></>,
      <>Shipped cross-team bug fixes and a new tracking feature in the Achilles codebase with <strong className="text-foreground font-semibold">Jest unit tests</strong> and Agile/Scrum/Jira workflow</>,
      <>Spearheaded <strong className="text-foreground font-semibold">Claude Code adoption</strong> across the team; represented the org at <strong className="text-foreground font-semibold">Google&apos;s Build with AI</strong> event, sharing insights on LangGraph, LangChain, and Google ADK</>,
    ],
  },
  {
    company: 'Emkal Inc',
    role: 'Service Desk Technician Intern',
    date: 'Sep 2023 – Jan 2024 · Brampton, ON',
    bullets: [
      <>Configured <strong className="text-foreground font-semibold">Unifi LAN/WAN</strong> networking hardware on-site and administered user identities via <strong className="text-foreground font-semibold">Microsoft Azure AD</strong> and Domain Controller</>,
      <>Conducted <strong className="text-foreground font-semibold">Microsoft Entra (SIEM)</strong> security audits and executed a mass <strong className="text-foreground font-semibold">MFA rollout</strong> to enforce new organizational security policies</>,
      <>Provided remote IT support, assisted in <strong className="text-foreground font-semibold">VoIP system deployment</strong>, and maintained incident documentation to optimize resolution workflows</>,
    ],
  },
  {
    company: 'Sheridan College',
    role: 'Laptop and Classroom Support Technologist',
    date: 'Dec 2022 – Aug 2023 · Brampton, ON',
    bullets: [
      <>Managed a <strong className="text-foreground font-semibold">$150,000+ hardware inventory</strong> with full lifecycle tracking; performed daily preventive maintenance to proactively reduce ticket volume</>,
      <>Participated in <strong className="text-foreground font-semibold">Windows 11 UAT</strong> prior to campus-wide rollout (2,000+ users); maintained institutional records in <strong className="text-foreground font-semibold">Microsoft Azure Active Directory</strong></>,
      <>Designed the student/faculty Help Desk interaction flow and presented <strong className="text-foreground font-semibold">IT portal redesign</strong> recommendations directly to the Director of IT</>,
    ],
  },
]

export default function Experience() {
  return (
    <section className="py-24" id="experience">
      <div className="max-w-[1100px] mx-auto px-8">
        <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.12em] uppercase text-accent-light mb-3 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-gradient-to-r before:from-accent-blue before:to-accent before:rounded-full">
          Where I&apos;ve Worked
        </p>
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-foreground mb-12">Experience</h2>

        <div className="flex flex-col relative exp-timeline">
          {jobs.map((job, i) => (
            <div key={i} className="grid grid-cols-[32px_1fr] gap-6 pb-10 last:pb-0 relative">
              {/* Dot */}
              <div className="w-8 h-8 flex-shrink-0 rounded-full bg-card border-2 border-accent flex items-center justify-center mt-0.5 shadow-[0_0_16px_rgba(124,58,237,0.3)] z-10">
                <div className="w-2.5 h-2.5 rounded-full gradient-bg" />
              </div>

              {/* Card */}
              <div className="bg-card border border-white/[0.06] rounded-xl p-7 hover:border-white/[0.18] hover:bg-card-hover hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start gap-4 mb-1 flex-wrap">
                  <span className="text-[1.1rem] font-extrabold text-foreground tracking-tight">{job.company}</span>
                  <span className="text-[0.775rem] font-semibold text-accent-light bg-accent/10 border border-accent/20 px-3 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">{job.date}</span>
                </div>
                <p className="text-[0.875rem] text-muted font-medium mb-5">{job.role}</p>
                <ul className="flex flex-col gap-2.5">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="text-[0.9rem] text-muted pl-5 relative leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-accent-light before:text-[0.7rem] before:top-[0.18em]">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
