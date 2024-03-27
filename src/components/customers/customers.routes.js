import { Router } from "express";
import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} from "./customers.controllers.js";
import customersValidator from "./customers.validators.js";

const router = Router();

router
  .route("/")
  .get(getAllCustomers)
  .post(customersValidator, createCustomer);

router
  .route("/:id")
  .get(getCustomerById)
  .put(customersValidator, updateCustomer)
  .delete(deleteCustomer);

export default router;