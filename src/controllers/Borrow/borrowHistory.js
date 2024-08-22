import { Borrow } from "../../model/borrow.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const borrowHistory = async (req, res) => {
  try {
    const history = await Borrow.find({ user: req.user._id }).populate("book");

    if (!history) {
      return res
        .status(404)
        .send(new ApiResponse(404, history, "Borrow history not found!"));
    }

    res
      .status(200)
      .send(new ApiResponse(200, history, "Book returned successfully!"));
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiResponse(500, error, "Failed!"));
  }
};

export { borrowHistory };
