import { Router } from "express";
import { 
  registerUser, 
  loginUser, 
  validateUserEmail, 
  getAllUsers, 
  uploadAvatar, 
} from "./users.controllers.js";
import authenticate from "../../middlewares/auth.middleware.js";
import { registerUserValidator, loginValidation } from "./users.validators.js";
import upload from "../../middlewares/imageUpload.middleware.js";

const router = Router();

router
  .route("/")
  .get(authenticate, getAllUsers)
  .post(registerUserValidator, registerUser);

router.put("/:id", authenticate, upload.single("avatar"), uploadAvatar);

router.post("/login", loginValidation, loginUser);

router.post("/validate", validateUserEmail);

export default router;