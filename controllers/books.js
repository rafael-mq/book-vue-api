const error = require("../services/error");
const errorMessage = require("../constants").error;
const book = require("../services/books");
const { validateBookData } = require("../util");

const controller = {
  getBooks: async (req, res, next) => {
    try {
      const docs = await book.getBooks();
      res.status(200).send(docs);
      return next();
    } catch (e) {
      console.error(e);
      error.handle(res, e);
      return next();
    }
  },

  getBook: async (req, res, next) => {
    try {
      const { id } = req.params;

      const doc = await book.getBook(id);
      res.status(200).send(doc);
      return next();
    } catch (e) {
      console.error(e);
      error.handle(res, e);
      return next();
    }
  },

  putBook: async (req, res, next) => {
    try {
      const bookData = { ...req.body };
      console.log(validateBookData(bookData));
      
      if (!validateBookData(bookData)) throw Error(errorMessage.BAD_REQUEST);

      const doc = await book.putBook(bookData);
      res.status(200).send(doc);
      return next();
    } catch (e) {
      console.error(e);
      error.handle(res, e);
      return next();
    }
  },

  updateBook: async (req, res, next) => {
    try {
      const { id } = req.params;
      const bookData = { ...req.body };
      if (!validateBookData(bookData)) throw Error(errorMessage.BAD_REQUEST);

      const doc = await book.updateBook(id, bookData);
      res.status(200).send(doc);
      return next();
    } catch (e) {
      console.error(e);
      error.handle(res, e);
      return next();
    }
  },

  deleteBook: async (req, res, next) => {
    try {
      const { id } = req.params;

      const doc = await book.deleteBook(id);
      res.status(200).send(doc);
      return next();
    } catch (e) {
      console.error(e);
      error.handle(res, e);
      return next();
    }
  },
};

module.exports = controller;
