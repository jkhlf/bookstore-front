import React from 'react';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div className="book-card" key={book.id}>
          <img 
            src={book.coverImage || '/placeholder.jpg'} 
            alt={book.title} 
            className="book-cover" 
          />
          <div className="book-info">
            <h3>{book.title}</h3>
            <p>
              <strong>Autor:</strong> {book.author} ({book.authorLife})
            </p>
            <p>
              <strong>Assuntos:</strong> {book.subjects.join(', ')}
            </p>
            <p>
              <strong>Downloads:</strong> {book.downloadCount}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
