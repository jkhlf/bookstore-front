import React, { useEffect, useState } from 'react';
import { Book, fetchBooks, searchBooksByTitle } from './api/api';
import { BookCard } from './components/BookCard';
import { SearchBar } from './components/SearchBar';
import { Library, Loader2 } from 'lucide-react';

export function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchBooks(null);
        setBooks(data);
      } catch (err) {
        setError('Failed to load books. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    try {
      setLoading(true);
      setError(null);
      if (query.trim()) {
        const results = await searchBooksByTitle(query);
        setBooks(results);
      } else {
        const allBooks = await fetchBooks(null);
        setBooks(allBooks);
      }
    } catch (err) {
      setError('Search failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <Library size={32} />
            <h1 className="logo-title">Book Library</h1>
          </div>
          <SearchBar value={searchQuery} onChange={handleSearch} />
        </div>
      </header>

      <main className="main-content">
        {error && (
          <div className="error-message">{error}</div>
        )}

        {loading ? (
          <div className="loading-container">
            <Loader2 className="animate-spin" size={32} />
          </div>
        ) : books.length > 0 ? (
          <div className="books-grid">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="empty-message">
            No books found
          </div>
        )}

      </main>
    </div>
  );
}