const { DataTypes } = require("sequelize");
const { default: db } = require("../utils/database");

const Users = db.define("users", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
  },
  avatar: {
    type: DataTypes.STRING,
  },
  firstname: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  validEmail: {
    type: DataTypes.BOOLEAN,
  },
  role: {
    type: DataTypes.ENUM("admin", "user"),
  },
  decription: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  nickName: {
    type: DataTypes.STRING(10),
  },
  degree: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
  updateAt: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Users;
