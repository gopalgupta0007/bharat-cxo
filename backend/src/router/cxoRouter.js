const express = require("express");
const getcxoData = require("../controller/cxoController");
const cxoRouter = express.Router();
// const getcxoData = require("");

cxoRouter.get("/vivek.pravin@2324/getallcxodata", getcxoData)

module.exports = cxoRouter;