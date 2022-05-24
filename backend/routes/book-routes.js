const express = require("express");
const Book = require("../model/Book");
const router = express.Router();
const Product = require("../model/Book");
const {
  getAllBooks,
  addBook,
  getById,
  updateBook,
  deleteBook,
} = require("../controllers/books-controller");

router.get("/", getAllBooks);
router.post("/", addBook);
router.get("/:id", getById);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
