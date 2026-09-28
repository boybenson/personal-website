import { NavLink } from 'react-router-dom'

export function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

export function ThemeToggle({ dark, onToggle, className = '' }) {
  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
      onClick={onToggle}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export function SiteHeader({ dark, onToggle }) {
  const links = [
    ['/', 'overview'], ['/experience', 'career'], ['/posts', 'articles'], ['/bookshelf', 'reading'], ['/interests', 'focus'],
  ]

  return (
    <header className="mb-12 flex items-center gap-8 max-md:mb-10">
      <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-x-10 gap-y-3 font-display text-[1.45rem] uppercase max-sm:gap-x-5 max-sm:text-[1.25rem]">
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'underline underline-offset-4' : 'hover:underline hover:underline-offset-4'}>{label}</NavLink>
        ))}
      </nav>
      <ThemeToggle dark={dark} onToggle={onToggle} className="ml-auto" />
    </header>
  )
}

export function SectionHeading({ children }) {
  return <h2 className="section-heading">{children}</h2>
}

export function ArrowUpRight({ className = '' }) {
  return (
    <svg className={`arrow-up-right ${className}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12 12 4M6 4h6v6" />
    </svg>
  )
}

export function PageFooter() {
  return (
    <footer className="mt-24 border-t border-border pt-8 pb-12">
      <p className="mb-1 text-[1.35rem] uppercase text-muted">Get in touch</p>
      <a className="font-display text-[2rem] font-bold" href="mailto:ybenson96@gmail.com">ybenson96@gmail.com</a>
    </footer>
  )
}
