const res = require("express/lib/response");
const Book = require("../model/Book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books)
    return res
      .status(404)
      .json({ message: "No books are available right now" });
  return res.status(200).json({ books });
};

const addBook = async (req, res, next) => {
  let book;
  try {
    const { name, author, description, price, available, image } = req.body;
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (error) {
    return res.status(500).json({ message: `Unable to add ${error.message}` });
  }
  return res.status(201).json({ message: book });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;

  try {
    book = await Book.findById(id);
  } catch (error) {
    return res.status(404).json({ message: "Book not found" });
  }
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  return res.status(200).json({ book });
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    const { name, author, description, price, available, image } = req.body;
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Unable to update ${error.message}` });
  }
  return res.status(201).json({ book });
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "book not found" });
  }

  return res.status(200).json({ message: "book deleted successfully" });
};

exports.addBook = addBook;
exports.getAllBooks = getAllBooks;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
