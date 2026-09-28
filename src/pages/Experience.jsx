import { PageFooter, SiteHeader } from '../components'
import { experience } from '../data'

export default function Experience({ dark, onToggle }) {
  return (
    <main className="page pb-16">
      <SiteHeader dark={dark} onToggle={onToggle} />
      <h1 className="page-title">Career History</h1>
      <p className="page-subtitle">Selected professional roles and the systems I helped deliver.</p>

      <section className="experience-list" aria-label="Professional experience">
        {experience.map((position) => (
          <article key={`${position.company}-${position.period}`} className="experience-item">
            <div className="experience-heading">
              <div>
                <h2 className="font-display text-[1.8rem] leading-[1.4]">{position.role}</h2>
                <p className="mt-1 text-[1.4rem] text-muted">
                  {position.company}{position.note && <span> · {position.note}</span>}
                </p>
              </div>
              <p className="experience-period">{position.period}</p>
            </div>
            <p className="mt-2 text-[1.2rem] uppercase tracking-[.08em] text-muted">
              {[position.team, position.location].filter(Boolean).join(' · ')}
            </p>
            <ul className="experience-points">
              {position.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </article>
        ))}
      </section>
      <PageFooter />
    </main>
  )
}
