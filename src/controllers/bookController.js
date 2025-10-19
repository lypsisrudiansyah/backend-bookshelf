const bookModel = require('../models/bookModel');

exports.getAllBooks = (req, res) => {
  const books = bookModel.getAllBooks();
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
