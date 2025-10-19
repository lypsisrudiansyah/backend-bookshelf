const bookModel = require('../models/bookModel');

exports.getAllBooks = (req, res) => {
  const { reading, finished, name } = req.query; 
  let books = bookModel.getAllBooks();
  if (books.length > 0) {
    if (reading !== undefined) {
      if (reading === '1') {
        books = books.filter(b => b.reading === true);
      } else if (reading === '0') {
        books = books.filter(b => b.reading === false);
      }
    }
    if (finished !== undefined) {
      if (finished === '1') {
        books = books.filter(b => b.finished === true);
      } else if (finished === '0') {
        books = books.filter(b => b.finished === false);
      }
    }

    if (name !== undefined) {
      const keyword = name.toLowerCase();
      books = books.filter(b => b.name.toLowerCase().includes(keyword));
    }
  }
  // const simplified = books;
  const simplified = books.map(({ id, name, publisher }) => ({ id, name, publisher }));


  res.json({
    status: 'success',
    data: { books: simplified },
  });
};

exports.getBookById = (req, res) => {
  const book = bookModel.getBookById(req.params.id);

  if (!book) {
    return res.status(404).json({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    });
  }

  res.json({
    status: 'success',
    data: { book },
  });
};

exports.addBook = (req, res) => {
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.body;

  // validating according our rules
  if (!name) {
    return res.status(400).json({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
  }

  if (readPage > pageCount) {
    return res.status(400).json({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
  }

  const bookId = bookModel.addBook({
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  });

  res.status(201).json({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: { bookId },
  });
};

exports.updateBook = (req, res) => {
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.body;

  if (!name) {
    return res.status(400).json({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    });
  }

  if (readPage > pageCount) {
    return res.status(400).json({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    });
  }

  const updated = bookModel.updateBook(req.params.id, {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  });

  if (!updated) {
    return res.status(404).json({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });
  }

  res.json({
    status: 'success',
    message: 'Buku berhasil diperbarui',
  });
};

exports.deleteBook = (req, res) => {
  const deleted = bookModel.deleteBook(req.params.id);

  if (!deleted) {
    return res.status(404).json({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    });
  }

  res.json({
    status: 'success',
    message: 'Buku berhasil dihapus',
  });
};



