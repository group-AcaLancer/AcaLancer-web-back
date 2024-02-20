import DataTypes from "sequelize";
import db from "../utils/database.js";
import bcrypt from "bcrypt";
import sendWelcomeEmail from "../helpers/sendMail.js";

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
    type: DataTypes.ENUM("user", "admin"),
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
  }
},
{
  modelName: 'Users',
  hooks: {
    beforeCreate: async (user, options) => {
      const hashed = await bcrypt.hash(user.password, 10);
      user.password = hashed;
    },
    afterCreate: async (user, options) => {
      const { email, firstname, lastname } = user;
      sendWelcomeEmail(email, {firstname, lastname});
    },
  },
},
);

export default Users;
