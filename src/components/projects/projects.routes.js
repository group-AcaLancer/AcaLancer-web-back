import { Router } from "express";
import {
  newProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  uploadLogo,
} from "./projects.controllers.js";
import authenticate from "../../middlewares/auth.middleware.js";
import projectsValidator from "./projects.validators.js";
import upload from "../../middlewares/imageUpload.middleware.js";

const router = Router();

router
  .route("/projects")
  .get(getAllProjects)
  .post(authenticate, projectsValidator, newProject);

router
  .route("/projects/:id")
  .get(getProjectById)
  .put(authenticate, upload.single("imgLogo"), uploadLogo)
  .put(authenticate, updateProject)
  .delete(authenticate, deleteProject);

  export default router;