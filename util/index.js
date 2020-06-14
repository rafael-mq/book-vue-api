const { ObjectId } = require("mongodb");

const validId = (id) => ObjectId.isValid(id);

const getObjectId = (id) => {
  if (!validId(id)) throw Error("Invalid Id");

  return new ObjectId(id);
};

const validateBookData = (bookData) => {
  // return bookData.title && bookData.author && bookData.publisher && bookData.subject;
  return (
    "title" in bookData && "author" in bookData && "publisher" in bookData && "subject" in bookData
  );
};

module.exports = { validId, getObjectId, validateBookData };
