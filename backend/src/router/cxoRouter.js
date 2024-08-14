const express = require("express");
const {getcxoData, updateCxoData} = require("../controller/cxoController");
const cxoRouter = express.Router();
// const getcxoData = require("");

cxoRouter.get("/vivek.pravin@2324/getallcxodata", getcxoData)
cxoRouter.patch("/vivek.pravin@2324/data/update/updatecxodata", updateCxoData)

module.exports = cxoRouter;