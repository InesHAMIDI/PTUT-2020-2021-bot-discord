const mongoose = require("mongoose");
const { DBCONNECTION } = require("../configGoldcoinneur");

module.exports = {
    init: () => {
        const mongOptions = {
            userNewUrlParser: true,
            userUnifiedTopology: true,
            userCreateIndex: true,
            userFindAndModify: false,
            autoIndex: false,
            poolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 4500,
            family: 4
        }

        mongoose.connect(DBCONNECTION, mongOptions);
        mongoose.Promise = global.Promise;
        mongoose.connection.on("connected", () => console.log("Mongoose est connecté!"));
    }
}