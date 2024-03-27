import Customers from "../../models/customers.models.js";
import Users from "../../models/users.models.js";
import "dotenv/config";

const createCustomer = async (req, res, next) => {
  try {
    const newCustomer = req.body;
    await Customers.create(newCustomer);
    res.status(201).end();
  } catch (error) {
    next(error);    
  }
};

const getAllCustomers = async (req, res, next) => {
  try {
    const userRole = await Users.role;
    const exluded = [];
    if (userRole !== "admin") {
      exluded.push("number", "email", "quote");
    }
    const Customer = await Customers.findAll({
      attributes: {
        exclude: exluded,
      },
    });
    res.json(Customer);
  } catch (error) {
    next(error);
  }
};

const getCustomerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await Customers.findByPk(id);
    res.status(200).json(customer);
  } catch (error) {
    next(error);
  }
};

const updateCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const  updatedCustomer = await Customers.update(body, { 
      where: { id },
    });
    res.status(204).json(updatedCustomer);
  } catch (error) {
    next(error);
  }
};

const deleteCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Customers.destroy({ 
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export {createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer};