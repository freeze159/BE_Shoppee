"use strict";

const shopModel = require("../models/shop.model");
const bcript = require("bcrypt");
const { log } = require("console");
const crypto = require("crypto");
const KeyTokenService = require("./keyToken.service");
const { createTokenPair } = require("../auth/authUtils");

const RoleShop = {
  SHOP: "SHOP",
  WRITER: "WRITER",
  EDITOR: "EDITOR",
  ADMIN: "ADMIN",
};
class AccessService {
  static signUp = async ({ name, email, password }) => {
    try {
      // Check if email exists
      const holderShop = await shopModel.findOne({ email }).lean();
      if (holderShop) {
        return {
          code: "xxx",
          message: "Email already exists",
          status: "error",
        };
      }
      // Create new shop
      const hashedPassword = await bcript.hash(password, 10);
      const newShop = await shopModel.create({
        name,
        email,
        password: hashedPassword,
        roles: [RoleShop.SHOP],
      });
      if (newShop) {
        // Create privateKey,publicKey
        // privateKey to sign token
        // publicKey to verify token
        const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
          modulusLength: 4096,
          publicKeyEncoding: {
            type: "spki",
            format: "pem",
          },
        });
        const publicKeyString = await KeyTokenService.createKeyToken({
          userId: newShop._id,
          publicKey,
        });
        if (!publicKeyString) {
          return {
            code: "xxx",
            message: "Error create publicKey",
            status: "error",
          };
        }
        // Create token pair
        const tokens = await createTokenPair(
          { userId: newShop._id, email },
          publicKey,
          privateKey
        );
        return {
          code: 201,
          message: "Sign up successfully",
          status: "success",
          metadata: {
            shop: newShop,
            tokens,
          },
        };
      }
      return {
        code: 200,
        metadata: null,
      };
    } catch (error) {
      return {
        code: "2323",
        error: error.message,
        status: "error",
      };
    }
  };
}
module.exports = AccessService;
