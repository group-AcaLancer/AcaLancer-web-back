const Users = require("./users.models");
const Projects = require("./projects.models");

const initModels = () => {
  // inicializamos las tablas de la base de datos a partir del modelo que se encuentra en models/index.
  Users.hasMany(Projects);
  Projects.belongsTo(Users);
};

export default initModels;
