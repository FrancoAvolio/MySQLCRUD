import express from "express";
import * as dotenv from "dotenv";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";
import "./config.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", indexRoutes);
app.use("/api", employeesRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Not Found",
  });
});

app.listen(process.env.PORT, () =>
  console.log(`App listening on port ${process.env.PORT}`)
);
