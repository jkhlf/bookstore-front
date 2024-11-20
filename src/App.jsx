import React, { useState, useEffect } from 'react';
import { fetchBooks, syncBooks } from './api/api';
import BookList from './components/Booklist';
import SyncButton from './components/SyncButton';

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBooks(setBooks);
  }, []);

  const handleSync = () => {
    setLoading(true);
    syncBooks((data) => {
      setBooks(data);
      setLoading(false);
      alert('Livros sincronizados com sucesso!');
    });
  };

  return (
    <div className='container'>
      <h1>Biblioteca Gutendex</h1>
      <SyncButton onClick={handleSync} loading={loading} />
      <BookList books={books} />
    </div>
  );
};

export default App;
