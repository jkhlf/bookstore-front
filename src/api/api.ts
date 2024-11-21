const API_BASE_URL = 'http://localhost:8080/books';

export interface Book {
  id: number;
  title: string;
  author: string;
  authorLife: string;         
  subjects: string[];         
  coverImage: string;         
  downloadUrl: string;        
  downloadCount: number;      
}

export async function fetchBooks(url: string | null): Promise<Book[]> {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) throw new Error('Failed to fetch books');
  return response.json();  
}

export async function searchBooksByTitle(title: string): Promise<Book[]> {
  const response = await fetch(`${API_BASE_URL}/search?title=${encodeURIComponent(title)}`);
  if (!response.ok) throw new Error('Failed to search books');
  return response.json();  
}