import DataTypes from "sequelize";
import db from "../utils/database.js";

const UserProjects = db.define("userproyects", {}, {timestamps: false});

export default UserProjects;