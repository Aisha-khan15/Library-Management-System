import { activeMember } from "./Borrow/activeMember.js";
import { bookAvailable } from "./Borrow/bookAvailable.js";
import { borrowBook } from "./Borrow/borrowBook.js";
import { borrowHistory } from "./Borrow/borrowHistory.js";
import { mostBorrow } from "./Borrow/mostBorrow.js";
import { returnBook } from "./Borrow/returnBook.js";

const borrowController = {
  borrow: borrowBook,
  return: returnBook,
  history: borrowHistory,
  mostBorrow: mostBorrow,
  activeMember: activeMember,
  bookAvailable: bookAvailable,
};

export { borrowController };
