"use strict";
const { signUp } = require("../services/access.service");

class AccessController {
  signUp = async (req, res, next) => {
    try {
      return res.status(201).json(await signUp(req.body));
    } catch (error) {
      next(error);
    }
  };
}
module.exports = new AccessController();
