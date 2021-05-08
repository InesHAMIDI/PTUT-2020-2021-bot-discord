const { Sequelize, DataTypes } = require('sequelize');
const seq = new Sequelize('sqlite:memory');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

const RPGItems = seq.define("RPGItems", {
    ItemId: {
        type: DataTypes.INT,
        allowNull: false
    },

    Name:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    Effect:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    Description:{
        type: DataTypes.TEXT,
        allowNull: false}
})