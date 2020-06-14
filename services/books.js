const { getObjectId } = require("../util");
const { Books } = require("../data/models/books");
const { error } = require("../constants");

const service = {
  getBook: async (id) => {
    const doc = await Books.findById(getObjectId(id));
    if (!doc) throw Error(error.NOT_FOUND);

    return doc;
  },

  getBooks: async () => {
    const docList = await Books.find({});
    return docList;
  },

  putBook: async (bookData) => {
    const book = new Books({ ...bookData });
    return await book.save();
  },

  updateBook: async (id, bookData) => {
    const doc = await Books.findByIdAndUpdate(getObjectId(id), bookData, {
      new: true,
      omitUndefined: true,
    });
    if (!doc) throw Error(error.NOT_FOUND);
    return doc;
  },

  deleteBook: async (id) => {
    const doc = await Books.findByIdAndDelete(getObjectId(id));
    if (!doc) throw Error(error.NOT_FOUND);
    return doc;
  },
};

module.exports = service;
