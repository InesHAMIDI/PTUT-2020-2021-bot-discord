const mongoose = require("mongoose");
const { DEFAULTSETTINGS: defaults } = require("../configGoldcoinneur");

const goldcoinneurSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    goldcoinneurName: String,
    goldcoin:  {
        "type": Number,
        "default": defaults.Goldcoin,
    }
})

module.exports = mongoose.model("Goldcoinneur", goldcoinneurSchema);