import Express from "express";
import cors from "cors";
import db from "./utils/database.js";
import initModels from "./models/initModels.js";
import apiv1Routes from "./routes/apiv1.routes.js";
import errorRoutes from "./routes/error.routes.js";
import "dotenv/config";

initModels();

db.authenticate()
  .then(() => console.log("Base de datos conectada correctamente"))
  .catch((e) => console.error(e))

db.sync() 
  .then(() => console.log("Base de datos sincronizada"))
  .catch((e) => console.error(e))

const PORT = process.env.PORT ?? 8000;
const app = Express();

app.use(Express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Ok");
});

apiv1Routes(app);
errorRoutes(app);

app.listen((PORT), () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});