import { getPaginated } from "../../middlewares/pagination.middleware.js";
import { Book } from "../../model/book.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const listFilterBook = async (req, res) => {
  try {
    const { genre, author } = req.query;

    const filters = {};

    if (genre) filters.genre = genre;
    if (author) filters.author = author;

    const paginatedBooks = getPaginated(Book, filters);
    res
      .status(200)
      .send(new ApiResponse(200, paginatedBooks, "Book fetch successfully!"));
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiResponse(500, null, "Failed to fetch book!"));
  }
};

export { listFilterBook };
