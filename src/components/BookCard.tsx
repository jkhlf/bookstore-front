import React from 'react';
import { Book } from '../api/api';
import { BookOpen } from 'lucide-react';

interface BookCardProps {
    book: Book;
}

export function BookCard({ book }: BookCardProps) {
    return (
        <div className="book-card">
            {book.coverImage ? (
                <img 
                    src={book.coverImage} 
                    alt={book.title}
                    className="book-cover"
                />
            ) : (
                <div className="book-cover-placeholder">
                    <BookOpen size={48} />
                </div>
            )}
            <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">By {book.author}</p>
                {book.authorLife && (
                    <p className="book-author-life">Viveu: {book.authorLife}</p>
                )}
                {book.subjects && book.subjects.length > 0 && (
                    <ul className="book-subjects">
                        {book.subjects.map((subject, index) => (
                            <li key={index}>{subject}</li>
                        ))}
                    </ul>
                )}
                <p>Downloads: {book.downloadCount}</p>
            </div>
        </div>
    );
}
