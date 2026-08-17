import "./unread.css";

const currentlyReading = {
  title: "The Sun Also Rises",
  author: "Ernest Hemingway",
  year: "1926",
  shelf: "Modernism · Lost Generation · Travel",
};

const unreadBooks = [
  { title: "The Scarlet Letter", author: "Nathaniel Hawthorne", year: "1850", shelf: "American classics · Guilt and society", href: "https://standardebooks.org/ebooks/nathaniel-hawthorne/the-scarlet-letter", tone: "brick" },
  { title: "Gulliver’s Travels", author: "Jonathan Swift", year: "1726", shelf: "Satire · Voyages · Society", href: "https://standardebooks.org/ebooks/jonathan-swift/gullivers-travels", tone: "blue" },
  { title: "Oliver Twist", author: "Charles Dickens", year: "1837–1839", shelf: "Victorian · Society · Coming of age", href: "https://standardebooks.org/ebooks/charles-dickens/oliver-twist", tone: "brown" },
  { title: "The Wind in the Willows", author: "Kenneth Grahame", year: "1908", shelf: "Countryside · Friendship · Adventure", href: "https://standardebooks.org/ebooks/kenneth-grahame/the-wind-in-the-willows", tone: "willow" },
  { title: "Sense and Sensibility", author: "Jane Austen", year: "1811", shelf: "Society · Sisters · Love", href: "https://standardebooks.org/ebooks/jane-austen/sense-and-sensibility", tone: "rose" },
  { title: "The Strange Case of Dr. Jekyll and Mr. Hyde", author: "Robert Louis Stevenson", year: "1886", shelf: "Gothic · Identity · Mystery", href: "https://standardebooks.org/ebooks/robert-louis-stevenson/the-strange-case-of-dr-jekyll-and-mr-hyde", tone: "black" },
  { title: "Little Women", author: "Louisa May Alcott", year: "1868–1869", shelf: "Family · Sisters · Coming of age", href: "https://standardebooks.org/ebooks/louisa-may-alcott/little-women", tone: "plum" },
  { title: "Frankenstein", author: "Mary Shelley", year: "1818", shelf: "Gothic · Science fiction · Belonging", href: "https://standardebooks.org/ebooks/mary-shelley/frankenstein", tone: "storm" },
  { title: "War and Peace", author: "Leo Tolstoy", year: "1869", shelf: "Russia · History · Family", href: "https://standardebooks.org/ebooks/leo-tolstoy/war-and-peace/louise-maude_aylmer-maude", tone: "gold" },
  { title: "The Time Machine", author: "H. G. Wells", year: "1895", shelf: "Science fiction · Time travel · Society", href: "https://standardebooks.org/ebooks/h-g-wells/the-time-machine", tone: "steel" },
  { title: "Around the World in Eighty Days", author: "Jules Verne", year: "1872", shelf: "Adventure · Travel · Race against time", href: "https://standardebooks.org/ebooks/jules-verne/around-the-world-in-eighty-days/george-makepeace-towle", tone: "teal" },
];

export const metadata = {
  title: "To Be Read · Library Nebari",
  description: "Books currently being read and waiting on the Library Nebari shelf.",
};

export default function UnreadPage() {
  return (
    <main className="unread-page">
      <header className="unread-header">
        <a className="unread-wordmark" href="/" aria-label="Return to Library Nebari">
          <span>Library</span><i>Nebari</i>
        </a>
        <nav aria-label="Library navigation">
          <a href="/">Read books</a>
          <a className="active" href="/unread">To be read</a>
          <a href="https://nebari.com.au">Nebari ↗</a>
        </nav>
      </header>

      <section className="unread-hero">
        <p className="unread-eyebrow">The next shelf</p>
        <h1>Books still<br />to be opened.</h1>
        <p>A place for books in progress and those waiting patiently for their turn.</p>
      </section>

      <section className="reading-now">
        <div className="section-label"><p>Currently reading</p><span>01</span></div>
        <article>
          <div className="reading-spine" aria-hidden="true"><span>In progress</span></div>
          <div className="reading-copy">
            <p className="book-detail">{currentlyReading.author} · {currentlyReading.year}</p>
            <h2>{currentlyReading.title}</h2>
            <p>{currentlyReading.shelf}</p>
            <span className="status">A review will follow when the final page is turned.</span>
          </div>
        </article>
      </section>

      <section className="waiting-shelf">
        <div className="section-label"><p>To be read</p><span>{String(unreadBooks.length).padStart(2, "0")}</span></div>
        <div className="unread-grid">
          {unreadBooks.map((book, index) => (
            <article className="unread-card" key={book.title}>
              <div className={`mini-cover ${book.tone}`} aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{book.title}</strong>
                <small>{book.author}</small>
              </div>
              <div className="unread-copy">
                <p className="book-detail">{book.author} · {book.year}</p>
                <h2>{book.title}</h2>
                <p className="shelf-tags">{book.shelf}</p>
                <a href={book.href} target="_blank" rel="noreferrer">Free edition available <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="unread-footer"><p>Library Nebari</p><a href="/">Return to the main shelves →</a></footer>
    </main>
  );
}
