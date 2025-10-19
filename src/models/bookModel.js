const { nanoid } = require('nanoid');

// In-memory storage
const books = [];

function getAllBooks() {
  return books;
}

function getBookById(id) {
  return books.find(b => b.id === id);
}

