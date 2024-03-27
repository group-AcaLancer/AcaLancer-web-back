import DataTypes from "sequelize";
import db from "../utils/database.js";

const Customers = db.define("customers", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  country: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  typeofproject: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  quote: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

export default Customers;