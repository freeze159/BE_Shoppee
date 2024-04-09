"use strict";

const keytokenModel = require("../models/keyToken.model");
class KeyTokenService {
  static createKeyToken = async ({ userId, publicKey }) => {
    try {
      // Check if publicKey exists
      const publicKeyString = publicKey.toString();
      const tokens = await keytokenModel.create({
        user: userId,
        publicKey: publicKeyString,
      });
      return tokens ? publicKeyString : null;
    } catch (error) {
      return error;
    }
  };
}

module.exports = KeyTokenService;
