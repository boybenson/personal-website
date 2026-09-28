import { useMemo, useState } from "react";
import { PageFooter, SiteHeader } from "../components";
import { posts } from "../data";

export default function Posts({ dark, onToggle }) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("");
  const tags = [...new Set(posts.flatMap((post) => post.tags))].sort();
  const filtered = useMemo(
    () =>
      posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) &&
          (!tag || post.tags.includes(tag)),
      ),
    [query, tag],
  );
  const grouped = filtered.reduce((years, post) => {
    const year = post.date.slice(-4);
    years[year] ??= [];
    years[year].push(post);
    return years;
  }, {});

  return (
    <main className="page pb-16">
      <SiteHeader dark={dark} onToggle={onToggle} />
      <h1 className="page-title">Articles</h1>
      <p className="page-subtitle">
        Ideas and practical lessons I have published on Medium.
      </p>

      <div className="mb-8">
        <label className="sr-only" htmlFor="post-search">
          Search by title
        </label>
        <input
          id="post-search"
          className="search-input"
          type="search"
          placeholder="Search by title"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div
          className="mt-4 flex flex-wrap gap-3"
          aria-label="Filter posts by tag"
        >
          {tags.map((item) => (
            <button
              key={item}
              type="button"
              className={`tag-pill ${tag === item ? "tag-pill-active" : ""}`}
              onClick={() => setTag(tag === item ? "" : item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {Object.entries(grouped)
        .sort(([a], [b]) => b.localeCompare(a))
        .map(([year, yearPosts]) => (
          <section key={year}>
            <h2 className="section-heading mt-13">{year}</h2>
            <ul>
              {yearPosts.map((post) => (
                <li
                  key={post.url}
                  className="border-b border-border py-5 last:border-b-0"
                >
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group block no-underline"
                  >
                    <p className="text-[1.8rem] group-hover:underline">
                      {post.title}
                      {post.featured && (
                        <span
                          className="ml-1 text-accent"
                          aria-label="Selected article"
                        >
                          ★
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-[1.2rem] text-muted">
                      {post.date} • {post.tags.join(" · ")}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      {filtered.length === 0 && (
        <p className="mt-12 text-muted italic">No posts found.</p>
      )}
      <PageFooter />
    </main>
  );
}
