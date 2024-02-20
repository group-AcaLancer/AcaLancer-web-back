import DataTypes from "sequelize";
import db from "../utils/database.js";

const Projects = db.define("projects", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  imgLogo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(200),
  },
  workers: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rate: {
    type: DataTypes.INTEGER,
  },
  customerId: {
    type: DataTypes.UUID,
  },
});

export default Projects;