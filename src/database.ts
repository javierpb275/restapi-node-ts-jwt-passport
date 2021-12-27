import mongoose from "mongoose";
import config from "./config/config";

mongoose
  .connect(config.DB.URI)
  .then((db) => console.log("db is connected"))
  .catch((err) => console.log(err));
