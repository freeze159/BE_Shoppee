"use strict";

// const mongoose = require("mongoose");
const {
  db: { host, port, name },
} = require("../configs/config.mongodb");
// const connectString = `mongodb://${host}:${port}/${name}`;

// class Database {
//   constructor() {
//     this.connect();
//   }
//   connect(type = "mongodb") {
//     if (1 === 1) {
//       mongoose.set("debug", true);
//       mongoose.set("debug", { color: true });
//     }
//     mongoose
//       .connect(connectString, {
//         maxPoolSize: 50,
//       })
//       .then((_) => console.log("Connect success Pro Buid"))
//       .catch((err) => console.log(`Error Connect`));
//   }
//   static getInstance() {
//     if (!Database.instance) {
//       Database.instance = new Database();
//     }
//     return Database.instance;
//   }
// }
// const instanceMongodb = Database.getInstance();
// module.exports = instanceMongodb;
const mongoose = require("mongoose");
const connectString = `mongodb://${host}:${port}/${name}`;
const { countConnect } = require("../helpers/check.connect");

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    if (1 === 1) {
      // Vi du trong moi truong DEV thif bat debug
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectString)
      .then((_) => console.log("Connected to Mongodb Pro", countConnect()))
      .catch((err) => console.log("Errorrrrr:::"));
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
