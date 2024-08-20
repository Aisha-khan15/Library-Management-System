import express from "express";
import { checkAuth } from "../middlewares/auth.middleware.js";
import { borrowController } from "../controllers/borrow.controller.js";
import { admin } from "../middlewares/admin.middleware.js";

const borrowRouter = express.Router();

borrowRouter.route("/borrow/:id").post(checkAuth, borrowController.borrow);

borrowRouter.route("/return/:id").post(checkAuth, borrowController.return);

borrowRouter.route("/history").get(checkAuth, borrowController.history);

borrowRouter
  .route("/most-borrow")
  .get(checkAuth, admin, borrowController.mostBorrow);

borrowRouter
  .route("/active-member")
  .get(checkAuth, admin, borrowController.activeMember);

borrowRouter
  .route("/book-available")
  .get(checkAuth, admin, borrowController.bookAvailable);

export { borrowRouter };
