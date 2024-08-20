import { Borrow } from "../../model/borrow.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const mostBorrow = async (req, res) => {
  try {
    const borrowReport = await Borrow.aggregate([
      { $group: { _id: "$book", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);

    res
      .status(200)
      .send(new ApiResponse(200, borrowReport, "Book returned successfully!"));
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiResponse(500, error, "Failed!"));
  }
};

export { mostBorrow };
