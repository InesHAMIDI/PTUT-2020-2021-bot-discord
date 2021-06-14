const mongoose = require("mongoose");
const { Goldcoinneur } = require("../models/main");

module.exports = async (client, message) => {
    client.createGoldcoinneur = async pseudo => {
    const newGoldcoinneur = {
        goldcoinneurName: pseudo,
    }
    const merged = Object.assign({_id: mongoose.Types.ObjectId() }, newGoldcoinneur);
    const createGoldcoinneur = await new Goldcoinneur(merged);
    createGoldcoinneur.save().then(g => console.log(`Nouveau Goldcoinneur -> ${g.goldcoinneurName}`));
    }
    
    client.getGoldcoinneur = async pseudo => {
        const data = await Goldcoinneur.findOne({ goldcoinneurName: pseudo });
        if (data) return data;
        return 0;
    }

    client.updateGoldcoinneur = async (pseudo, settings) => {
        let data = await client.getGoldcoinneur(pseudo)
        if (typeof data !== "object") data = {};
        for (const key in settings) {
            if (data[key] !== settings[key]) data[key] = settings[key];
        }
        return data.updateOne(settings);
    }
};