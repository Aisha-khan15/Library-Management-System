import { addBook } from "./Book/addBook.js";
import { deleteBook } from "./Book/deleteBook.js";
import { listBook } from "./Book/listBook.js";
import { listFilterBook } from "./Book/listFilterBook.js";
import { updateBook } from "./Book/updateBook.js";

const bookController = {
  add: addBook,
  get: listBook,
  getFilterBook: listFilterBook,
  update: updateBook,
  delete: deleteBook,
};

export { bookController };
