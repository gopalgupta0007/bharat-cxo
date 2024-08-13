const express = require("express");
const app = express();
const Connection = require("./db/connect");
const cors = require('cors');
// const { get } = require("./routers/CXOroute");
// Port number
require('dotenv').config("Bharat cxo/backend/.env");
const PORT = process.env.PORT || 5000;
// connecting to the database
Connection();
console.log("backed started");


// routes
const cxoRouter = require("../src/router/cxoRouter");
// //middleware routes
app.use(express.json())
app.use("*",cors({origin:true,credentials:true})) // for cookie

app.use("/cxo", cxoRouter);
app.get("/", (req, res) => {
    res.status(200).json("get method");
})
// app.get("/bharatcxogetdata", async(req, res) => {
//     let cxodata;
//     // res.send("hello")
//     try {
//         cxodata = await CXO.find({});
//         console.log(cxodata);
//         if (!cxodata) {
//             return res.status(500).json({ massage: "unexpected error occured!" });
//         }
//     } catch (err) {
//         return res.status(500).send(err);
//     }
//     return res.status(200).json({cxodata});
// })

app.listen(PORT, () => console.log(`application running on the ${PORT} port.`));