const mongoose = require("mongoose");

const cxoSchema = new mongoose.Schema({
    home: [
        {
            title: String,
            desc: String,
            img: String
        },
    ],
    posts: [
        {
            title: String,
            desc: String,
            img: String,
            src: String
        },
    ],
    events: [String],
    articles: [
        {
            title: String,
            desc: String,
            img: String
        },
    ]
})


const CXO = new mongoose.model("bharatcxocoll", cxoSchema);

module.exports = CXO;








