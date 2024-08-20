import { ApiResponse } from "../utils/ApiResponse.js";

const admin = (req, res, next) => {
  if (req.user && req.user.role === "Admin") {
    next();
  } else {
    res.status(403).send(new ApiResponse(403, null, "Admin access required!"));
  }
};

export { admin };
