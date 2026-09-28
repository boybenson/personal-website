import { PageFooter, SiteHeader } from '../components'
import { interests } from '../data'

export default function Interests({ dark, onToggle }) {
  return (
    <main className="page pb-16">
      <SiteHeader dark={dark} onToggle={onToggle} />
      <h1 className="page-title">Areas of Focus</h1>
      <p className="page-subtitle">The subjects I keep returning to through work and independent study.</p>
      <div className="mt-12 grid gap-5">
        {interests.map((interest) => (
          <article key={interest.name} className="project-card">
            <div className="mb-3 flex items-center justify-between gap-6">
              <h2 className="font-display text-[2rem] leading-[1.4]">{interest.name}</h2>
              <span className="font-display text-[2rem] text-muted" aria-hidden="true">{interest.icon}</span>
            </div>
            <p className="text-[1.5rem] text-muted">{interest.description}</p>
          </article>
        ))}
      </div>
      <PageFooter />
    </main>
  )
}
