import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import passport from "passport";
import passportMiddleware from "./middlewares/passport";

//initializations
const app: Application = express();

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

//routes
app.get("/", (req, res) => {
  res.send(`API at http://localhost:${app.get("port")}`);
});

app.use(authRoutes);

export default app;
