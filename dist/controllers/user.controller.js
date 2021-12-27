"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = void 0;
const signUp = (req, res) => {
    res.send("signup");
};
exports.signUp = signUp;
const signIn = (req, res) => {
    res.send("signin");
};
exports.signIn = signIn;
