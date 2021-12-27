import { Request, Response } from "express";
import User, { IUser } from "../models/user";

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ msg: "Please. Send your email and password" });
  }
  const user: IUser | null = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ msg: "Wrong email. Try again" });
  }
  const newUser: IUser = new User(req.body);
  await newUser.save();
  return res.status(201).json(newUser);
};

export const signIn = async (
  req: Request,
  res: Response
): Promise<Response> => {
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ msg: "Please. Send your email and password" });
  }
  const user: IUser | null = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({ msg: "Wrong credentials" });
  }
  const isMatch: boolean = await user.comparePassword(req.body.password);
  if (!isMatch) {
    return res.status(400).json({ msg: "Wrong credentials" });
  }
  return res.send("signin");
};
