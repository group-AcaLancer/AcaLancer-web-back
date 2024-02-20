import Users from "./users.models.js";
import Projects from "./projects.models.js"
import UserProjects from "./userProjects.models.js";
import Customers from "./customers.models.js";

const initModels = () => {
  // inicializamos las tablas de la base de datos a partir del modelo que se encuentra en models/index.
  Users.belongsToMany(Projects, { through: UserProjects });
  Projects.belongsToMany(Users, { through: UserProjects });

  Projects.belongsTo(Customers, { foreignKey: "customerId" });
  Customers.hasMany(Projects, { foreignKey: "customerId" });
};

export default initModels;
