const express = require("express");
const Router = express.Router();
const employeeRoute = require("./employeeRoute");

Router.use("/employees", employeeRoute);
module.exports = Router;
