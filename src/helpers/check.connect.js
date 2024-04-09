"use strict";
const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
// count Connect

const countConnect = () => {
  const numConnection = mongoose.connections.length;
  return numConnection;
};
// check overload
const INTERVAL_SECOND = 5000;
const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    // Example maximum number of connection based on number of cores
    const maxConnections = numCores * 5;
    console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);
    console.log(`Active connection ::: ${numConnection}`);
    if (numConnection >= maxConnections) {
      console.log(`Connect overload dectected`);
    }
  }, INTERVAL_SECOND); // Check every 5s
};
module.exports = {
  countConnect,
  checkOverload,
};
