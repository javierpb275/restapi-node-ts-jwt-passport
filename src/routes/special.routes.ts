import { Router, Request, Response } from "express";
import passport from "passport";

const router: Router = Router();

router.get(
  "/special",
  passport.authenticate("jwt", { session: false }),
  (req: Request, res: Response) => {
    res.send("success");
  }
);

export default router;
