const { nanoid } = require('nanoid');

// In-memory storage
const books = [];

function getAllBooks() {
  return books;
}

function getBookById(id) {
  return books.find(b => b.id === id);
}

function addBook(data) {
  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = data.pageCount === data.readPage;

  const newBook = {
    id,
    name: data.name,
    year: data.year,
    author: data.author,
    summary: data.summary,
    publisher: data.publisher,
    pageCount: data.pageCount,
    readPage: data.readPage,
    finished,
    reading: data.reading,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);
  return id;
}

function updateBook(id, data) {
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return false;

  const updatedAt = new Date().toISOString();
  const finished = data.pageCount === data.readPage;

  books[index] = {
    ...books[index],
    ...data,
    finished,
    updatedAt,
  };

  return true;
}

function deleteBook(id) {
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return false;

  books.splice(index, 1);
  return true;
}

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};

