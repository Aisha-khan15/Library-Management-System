import { User } from "../../model/user.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const activeMember = async (req, res) => {
  try {
    const userReport = await User.aggregate([
      {
        $group: {
          _id: "$_id",
          name: { $first: "$name" },
          count: {
            $sum: 1,
          },
        },
      },
    ]);

    res
      .status(200)
      .send(
        new ApiResponse(200, userReport, "Active members fetch successfully!")
      );
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiResponse(500, error, "Failed!"));
  }
};

export { activeMember };
