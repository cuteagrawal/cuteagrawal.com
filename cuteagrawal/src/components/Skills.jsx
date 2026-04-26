const categories = [
  {
    icon: '⚛️',
    name: 'Frontend',
    skills: ['React 18', 'JavaScript (ES2020+)', 'Vite', 'Tailwind CSS v4', 'HTML5 / CSS3', 'React Router v6', 'React Context API', 'Responsive Design', 'React Helmet Async'],
  },
  {
    icon: '🖥️',
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'REST API Design', 'PostgreSQL', 'asyncpg', 'OAuth 2.0 / OIDC', 'express-session'],
  },
  {
    icon: '☁️',
    name: 'Cloud & DevOps',
    skills: ['AWS EC2', 'AWS RDS', 'AWS Cognito', 'AWS Lambda', 'GitHub Actions', 'CI/CD Pipelines', 'Nginx', 'SSH / SCP Deployment'],
  },
  {
    icon: '🤖',
    name: 'AI & Machine Learning',
    skills: ['Google Gemini AI', 'Prompt Engineering', 'BERT / NLP', 'LangGraph', 'LangChain', 'Google ADK', 'Claude Code', 'GitHub Copilot', 'Structured LLM Output'],
  },
  {
    icon: '📊',
    name: 'Analytics & Tracking',
    skills: ['Google Tag Manager', 'Google Analytics 4', 'GA4 Consent Mode', 'ASC Data Standards', 'OEM Web Tracking', 'GA4 Event Schema Design'],
  },
  {
    icon: '🔧',
    name: 'Testing & Tools',
    skills: ['Jest', 'Playwright', 'playwright-stealth', 'Agile / Scrum', 'Jira', 'ServiceNow', 'Git & GitHub', 'ESLint'],
  },
  {
    icon: '🗄️',
    name: 'Databases',
    skills: ['PostgreSQL', 'SQL (Joins, CTEs, Upserts)', 'AWS RDS', 'asyncpg', 'node-postgres', 'Schema Design', 'Parameterized Queries'],
  },
  {
    icon: '🌐',
    name: 'Networking & IT',
    skills: ['Unifi / Ubiquiti', 'LAN / WAN', 'Microsoft Azure AD', 'Active Directory', 'Microsoft Entra (SIEM)', 'MFA Rollout', 'VoIP Systems'],
  },
]

export default function Skills() {
  return (
    <section className="py-24" id="skills">
      <div className="max-w-[1100px] mx-auto px-8">
        <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.12em] uppercase text-accent-light mb-3 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-gradient-to-r before:from-accent-blue before:to-accent before:rounded-full">
          What I Know
        </p>
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-tight text-foreground mb-12">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map(cat => (
            <div key={cat.name} className="bg-card border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.18] hover:bg-card-hover transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-[9px] bg-accent/15 border border-accent/25 flex items-center justify-center text-base flex-shrink-0">
                  {cat.icon}
                </div>
                <span className="text-[0.95rem] font-bold text-foreground tracking-tight">{cat.name}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(s => (
                  <span key={s} className="px-2.5 py-1 bg-accent/12 border border-accent/25 rounded-full text-[0.75rem] font-semibold text-accent-light">
                    {s}
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
