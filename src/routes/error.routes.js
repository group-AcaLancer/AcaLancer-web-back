import {
  getError,
  notFoundErrorHandler,
  jwtErrorHandler,
  ormErrorHandler,
  errorLogger,
  errorHandler,
} from "../middlewares/errors.middleware.js";

const errorRoutes = (app) => {
  app.use(errorHandler);
  app.use(notFoundErrorHandler);
  app.use(jwtErrorHandler);
  app.use(ormErrorHandler);
  app.use(errorLogger);
  app.use(getError);
};

export default errorRoutes;