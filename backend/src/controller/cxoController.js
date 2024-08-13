const CXO = require("../models/cxoModels");

const getcxoData = async (req, res) => {
    var cxo;
    try {
        cxo = await CXO.find({});
        console.log(cxo);
        if (!cxo) {
            return res.status(500).json({ massage: "unexpected error occured!" });
        }
    } catch (err) {
        return res.status(500).send(err);
    }
    return res.status(200).json(cxo);
}


module.exports = getcxoData;

