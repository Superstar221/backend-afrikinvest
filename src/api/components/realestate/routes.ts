import { Router } from "express";
const router: Router = Router();
import * as RealEstateController from "./controller";

// //create user
// router.post("/", UserController.createUser);

// //get user
// router.get("/:userId", UserController.getUser);

// //update user
// router.patch("/", UserController.updateUser);

// get all realestates
router.get("/", RealEstateController.getRealEstates);

// get count of realestates
router.get("/count", RealEstateController.getCountRealEstates);

export default router;