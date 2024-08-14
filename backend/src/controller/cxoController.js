const CXO = require("../models/cxoModels");
const express = require("express");


const getcxoData = async (req, res) => {
    var cxo;
    try {
        cxo = await CXO.find({});
        // console.log(cxo);
        if (!cxo) {
            return res.status(500).json({ massage: "unexpected error occured!" });
        }
    } catch (err) {
        return res.status(500).send(err);
    }
    return res.status(200).json(cxo);
}

const updateCxoData = async (req, res) => {
    let updatedUser
    try {
        // console.log(req.user);
        // const authUserId = req.userId;
        // const authUserId = req.params.id;
        const { type, title, description, imagePath, imageSrc } = req.body;
        console.log("req.user => ", { type, title, description, imagePath, imageSrc });
        const newdata = {title:title, desc:description, img:imagePath, src:imageSrc};
        updatedUser = await CXO.findByIdAndUpdate(
            "66b74d89b79c93a04d17e659",
            {
                $push: {
                    posts:{
                        $each: [newdata],  // Add new post as an array element
                        $position: 0       // Add to the front of the array
                    }
                }
            },
            { new: true }
        );
        // res.json(updatedUser.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    return res.status(200).send({ massage: "updated data successful" });
}

module.exports = { getcxoData, updateCxoData };

