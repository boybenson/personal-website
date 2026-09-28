import { useMemo, useState } from 'react'
import { ArrowUpRight, PageFooter, SiteHeader } from '../components'
import { books } from '../data'

export default function Bookshelf({ dark, onToggle }) {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => books.filter((book) => (
    `${book.title} ${book.authors}`.toLowerCase().includes(query.toLowerCase())
  )), [query])

  return (
    <main className="page pb-16">
      <SiteHeader dark={dark} onToggle={onToggle} />
      <h1 className="page-title">Reading List</h1>
      <p className="page-subtitle">Books and papers that have influenced how I think about systems.</p>
      <label className="sr-only" htmlFor="book-search">Search the reading list</label>
      <input id="book-search" className="search-input mb-8" type="search" placeholder="Search the reading list" value={query} onChange={(event) => setQuery(event.target.value)} />
      <ul>
        {filtered.map((book) => (
          <li key={book.title} className="border-b border-border py-5 last:border-b-0">
            <a href={book.url} target="_blank" rel="noreferrer" className="group block no-underline">
              <p className="text-[1.8rem] group-hover:underline">{book.title} <ArrowUpRight /></p>
              <p className="mt-1 text-[1.35rem] text-muted">{book.authors}</p>
              <p className="mt-1 text-[1.2rem] text-muted">{book.status}</p>
            </a>
          </li>
        ))}
      </ul>
      {filtered.length === 0 && <p className="mt-12 text-muted italic">No books found.</p>}
      <PageFooter />
    </main>
  )
}
