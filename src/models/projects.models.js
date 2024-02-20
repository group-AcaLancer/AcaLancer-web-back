const { DataTypes, Sequelize } = require("sequelize");
const { default: db } = require("../utils/database");

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
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Projects;
