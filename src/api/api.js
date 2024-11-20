const API_BASE_URL = 'http://localhost:8080/api/books'; // Backend atualizado

export function fetchBooks(callback) {
  fetch(API_BASE_URL)
    .then((response) => {
      if (!response.ok) throw new Error('Erro ao buscar livros');
      return response.json();
    })
    .then((data) => callback(data))
    .catch((error) => console.error(error));
}

export function syncBooks(callback) {
  fetch(`${API_BASE_URL}/sync`)
    .then((response) => {
      if (!response.ok) throw new Error('Erro ao sincronizar livros');
      return response.json();
    })
    .then((data) => callback(data))
    .catch((error) => console.error(error));
}
