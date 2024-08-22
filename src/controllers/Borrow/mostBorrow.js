import { Book } from "../../model/book.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const mostBorrow = async (req, res) => {
  try {
    const { _id, count } = borrowReport;
    const { title } = borrowReport._id;

    const borrowReport = await Book.aggregate([
      {
        $group: {
          _id: {
            _id: "$_id",
            title: "$title",
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);

    res
      .status(200)
      .send(
        new ApiResponse(
          200,
          { _id, title, count },
          "Borrow report fetch successfully!"
        )
      );
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiResponse(500, error, "Failed!"));
  }
};

export { mostBorrow };
