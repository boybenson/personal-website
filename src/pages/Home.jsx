import { Link } from 'react-router-dom'
import { ArrowUpRight, SectionHeading, ThemeToggle } from '../components'
import { books, education, featuredPosts, interests, mediumUrl } from '../data'
import profilePhoto from '../images/pic.jpeg'

const quickLinks = [
  { to: '/posts', icon: 'writing', label: 'Articles', detail: '3 published' },
  { to: '/bookshelf', icon: 'bookshelf', label: 'Reading', detail: '2 selections' },
  { to: '/interests', icon: 'interests', label: 'Focus', detail: '3 areas' },
  { to: '/experience', icon: 'career', label: 'Career', detail: '3 roles' },
]

function QuickIcon({ name }) {
  if (name === 'writing') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 3.5h7l4 4v13h-11z" />
        <path d="M13.5 3.5v4h4M9.5 12h5M9.5 16h4" />
      </svg>
    )
  }

  if (name === 'bookshelf') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4.5h4v15H5zM10.5 4.5h4v15h-4zM16 6l3.5-1 3.5 13.5-3.5 1zM3 20.5h18" />
      </svg>
    )
  }

  if (name === 'career') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 8.5h16v11H4zM9 8.5v-3h6v3M4 13h16M10 13v2h4v-2" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="6" cy="7" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="m8.3 8.1 2.8 7.5M15.7 7.5l-2.6 8.1M8.5 7h7" />
    </svg>
  )
}

export default function Home({ dark, onToggle }) {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <main id="main-content" className="page home-page pb-16">
        <div className="mb-8 flex justify-end">
          <ThemeToggle dark={dark} onToggle={onToggle} />
        </div>

        <header className="mb-10 flex items-center gap-8 border-b border-border pb-10 max-sm:flex-col max-sm:text-center">
          <img className="profile-photo" src={profilePhoto} alt="Benson Yeboah" />
          <div>
            <h1 className="font-body text-[2.2rem] leading-[1.3] uppercase max-sm:text-[2rem]">Benson Yeboah</h1>
            <p className="my-[.4rem] text-[1.4rem] text-muted">Software Engineer</p>
            <ul className="socials flex gap-[1.4rem] max-sm:justify-center" aria-label="Social links">
              <li><a className="font-display text-[1.4rem] uppercase" href="https://x.com/boybenson_" target="_blank" rel="noreferrer">Twitter</a></li>
              <li><a className="font-display text-[1.4rem] uppercase" href={mediumUrl} target="_blank" rel="noreferrer">Medium</a></li>
              <li><a className="font-display text-[1.4rem] uppercase" href="mailto:ybenson96@gmail.com">Email</a></li>
            </ul>
          </div>
        </header>

        <section className="mb-13" aria-label="About Benson">
          <p className="mb-5">I&apos;m a software engineer focused on building reliable, scalable software.</p>
          <p>I&apos;m especially interested in payments, distributed systems, and mathematics. I also write practical software engineering articles on <a href={mediumUrl} target="_blank" rel="noreferrer">Medium</a>.</p>
        </section>

        <nav className="mb-13 grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:gap-3" aria-label="Explore the site">
          {quickLinks.map((item) => (
            <Link key={item.to} to={item.to} className="nav-card">
              <span className="nav-icon-shell"><QuickIcon name={item.icon} /></span>
              <span className="mt-5 font-display text-[1.4rem] uppercase">{item.label}</span>
              <span className="mt-1 text-[1.2rem] text-muted">{item.detail} <ArrowUpRight className="nav-arrow" /></span>
            </Link>
          ))}
        </nav>

        <section className="mb-13">
          <SectionHeading>Currently</SectionHeading>
          <p className="mb-5">Exploring the systems, protocols, and mathematical ideas behind reliable payment infrastructure.</p>
          <div className="rounded-[.8rem] bg-soft p-5">
            <p className="mb-3 text-[1.4rem] text-muted">On my reading list:</p>
            <ul className="reading-list">
              {books.map((book) => (
                <li key={book.title}>
                  <a className="text-[1.6rem]" href={book.url} target="_blank" rel="noreferrer">{book.title}</a>
                  <span className="text-[1.2rem] text-muted"> — {book.authors}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-13">
          <SectionHeading>What I Explore</SectionHeading>
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
            {interests.map((interest) => (
              <article key={interest.name} className="project-card">
                <h3 className="mb-3 font-display text-[1.8rem] leading-[1.4]">{interest.name}</h3>
                <p className="text-[1.4rem] leading-[1.4] text-muted">{interest.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-13">
          <SectionHeading>Education</SectionHeading>
          <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
            {education.map((item) => (
              <article key={item.degree} className="education-card">
                <div className="flex items-start justify-between gap-6">
                  <h3 className="font-display text-[1.7rem] leading-[1.4]">{item.degree}</h3>
                  <span className="education-year">{item.date}</span>
                </div>
                <p className="mt-3 text-[1.5rem]">{item.field}</p>
                <p className="mt-1 text-[1.3rem] text-muted">{item.school}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-13">
          <SectionHeading>Published Notes</SectionHeading>
          <ul>
            {featuredPosts.map((post, index) => (
              <li key={post.url} className={`py-5 ${index !== featuredPosts.length - 1 ? 'border-b border-border' : ''}`}>
                <a href={post.url} target="_blank" rel="noreferrer" className="group block no-underline">
                  <p className="mb-1 text-[1.6rem] group-hover:underline">{post.title}</p>
                  <p className="text-[1.2rem] text-muted">{post.date}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-13">
          <SectionHeading>Find More</SectionHeading>
          <div className="rounded-[.8rem] bg-soft p-5">
            <a className="text-[1.6rem]" href={mediumUrl} target="_blank" rel="noreferrer">Read all articles on Medium <ArrowUpRight /></a>
          </div>
        </section>
      </main>
    </>
  )
}
