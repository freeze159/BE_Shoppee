"use strict";

const express = require("express");
const router = express.Router();
const { signUp } = require("../../controllers/access.controller");
// sign up
router.post("/shop/signup", signUp);
router.get("/shop/signin", (req, res) => {
  return res.status(200).json({ message: "Sign in" });
});

module.exports = router;
