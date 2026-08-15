const books = [
  { number: "01", title: "Three Men in a Boat", subtitle: "To Say Nothing of the Dog", author: "Jerome K. Jerome", year: "1889", shelf: "Humour · Travel · Friendship", review: "Reading Three Men in a Boat felt like discovering the summer journal of a friend’s adventures. It draws you so naturally into their holiday—the conversations, mishaps and ordinary little moments—that it feels less like reading a story and more like being there with them.", href: "https://standardebooks.org/ebooks/jerome-k-jerome/three-men-in-a-boat", tone: "sage" },
  { number: "02", title: "Dangerous Liaisons", author: "Pierre Choderlos de Laclos", year: "1782", shelf: "Letters · Seduction · Power", review: "I enjoyed the intrigue and the almost absurd lengths the characters go to in their games of seduction. It was also fascinating to recognise the story in modern adaptations such as Cruel Intentions.", href: "https://standardebooks.org/ebooks/pierre-choderlos-de-laclos/dangerous-liaisons/thomas-moore", tone: "claret" },
  { number: "03", title: "Main Street", author: "Sinclair Lewis", year: "1920", shelf: "Small-town life · Social satire", review: "I loved the feeling of small-town life, where everyone knows everyone else’s business. The girl arriving from an even smaller town and thinking Main Street was amazing especially made me laugh.", href: "https://standardebooks.org/ebooks/sinclair-lewis/main-street", tone: "ochre" },
  { number: "04", title: "Treasure Island", author: "Robert Louis Stevenson", year: "1883", shelf: "Adventure · Pirates · Coming of age", review: "I found it interesting to experience the story through the eyes of an inexperienced young boy caught between two very different worlds.", href: "https://standardebooks.org/ebooks/robert-louis-stevenson/treasure-island", tone: "navy" },
  { number: "05", title: "Journey to the Centre of the Earth", author: "Jules Verne", year: "1864", shelf: "Science fiction · Adventure · Exploration", review: "I enjoyed its sense of adventure and the fear created by their experiences, all without the story ever becoming overdramatic.", href: "https://standardebooks.org/ebooks/jules-verne/journey-to-the-center-of-the-earth/f-a-malleson", tone: "rust" },
  { number: "06", title: "The War of the Worlds", author: "H. G. Wells", year: "1898", shelf: "Science fiction · Invasion · Survival", review: "I felt completely in the characters’ shoes throughout the adventure. It didn’t feel like a story being retold afterwards, but as though I were travelling alongside them as everything unfolded.", href: "https://standardebooks.org/ebooks/h-g-wells/the-war-of-the-worlds", tone: "charcoal" },
  { number: "07", title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: "1925", shelf: "Jazz Age · Wealth · Love and obsession", review: "I enjoyed the book, although I didn’t connect with it quite as much as I did with the film. It was still a very enjoyable read.", href: "https://standardebooks.org/ebooks/f-scott-fitzgerald/the-great-gatsby", tone: "midnight" },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Library Nebari home"><img src="/library-nebari-mark.png" alt="" /><span><b>Library</b><i>Nebari</i></span></a>
      <nav aria-label="Primary navigation"><a href="#books">Books</a><a href="#about">About</a><a className="return-link" href="https://nebari.com.au">Nebari ↗</a></nav>
    </header>
    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow">A small, growing collection</p><h1>Books worth keeping<br/>in circulation.</h1><p className="intro">Free classics to read and keep, accompanied by short notes from one reader to another.</p><a className="browse" href="#books">Browse the shelves <span>↓</span></a></div>
      <div className="hero-mark" aria-hidden="true"><img src="/library-nebari-mark.png" alt="" /></div>
    </section>
    <section className="collection" id="books">
      <div className="section-heading"><div><p className="eyebrow">The collection</p><h2>On the shelves</h2></div><p>{books.length} books · Public domain editions</p></div>
      <div className="book-list">{books.map((book) => <article className="book" key={book.title}>
        <div className={`cover ${book.tone}`} aria-hidden="true"><span className="cover-number">{book.number}</span><div><p>{book.title}</p>{book.subtitle && <small>{book.subtitle}</small>}</div><span className="cover-author">{book.author}</span></div>
        <div className="book-copy"><div className="book-meta"><p>{book.author} · {book.year}</p><span>{book.shelf}</span></div><h3>{book.title}</h3>{book.subtitle && <p className="subtitle">{book.subtitle}</p>}<blockquote>“{book.review}”</blockquote><a href={book.href} target="_blank" rel="noreferrer">Read or download free <span>↗</span></a></div>
      </article>)}</div>
    </section>
    <section className="about" id="about"><p className="eyebrow">About this library</p><div><h2>A personal shelf,<br/>left open for visitors.</h2><p>Library Nebari gathers books that can be freely and legally shared. Each is accompanied by a short, personal reflection—not a formal review, just what remained after the final page.</p></div></section>
    <footer><p>Library Nebari</p><p>Perth, Western Australia · Est. 2026</p><a href="#top">Back to top ↑</a></footer>
  </main>;
}
