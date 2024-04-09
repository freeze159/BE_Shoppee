"use strict";

const JWT = require("jsonwebtoken");
const createTokenPair = async (payload, publicKey, privateKey) => {
  try {
    const accessToken = await JWT.sign(payload, privateKey, {
      algorithm: "RS256",
      expiresIn: "2 days",
    });
    const refreshToken = await JWT.sign(payload, privateKey, {
      algorithm: "RS256",
      expiresIn: "7 days",
    });
    JWT.verify(accessToken, publicKey, (err, decoded) => {
      if (err) {
        throw new Error("Error verify accessToken");
      } else {
        console.log("decoded", decoded);
      }
    });
    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    return {
      code: "xxx",
      error: error.message,
      status: "error",
    };
  }
};
module.exports = {
  createTokenPair,
};
