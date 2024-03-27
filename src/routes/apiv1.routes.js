import userRoutes from "../components/users/users.routes.js";
import projectsRoutes from "../components/projects/projects.routes.js";
import customersRoutes from "../components/customers/customers.routes.js";

const apiv1Routes = (app) => {
  app.use("/api/v1/users", userRoutes);
  app.use("/api/v1/projects", projectsRoutes);
  app.use("/api/v1/customers", customersRoutes);
}

export default apiv1Routes;