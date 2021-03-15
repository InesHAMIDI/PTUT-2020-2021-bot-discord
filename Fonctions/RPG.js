const Discord = require('discord.js'); //typique #include<>
const { fstat } = require('fs');
const RPGPlayers = require('./BD/RPGPlayers.json');
const RPGQuests = require('./BD/RPGQuests.json');
const RPGClasses = require('./BD/RPGClasses.json');
const RPGLootables = require('./BD/RPLootables.json');
const BdItems = require('./BD/RPGItems.json');

bot.on('message', msg => {
    if (msg.author.bot) return
})

function SaveBdPlayer() {
    fs.writeFile("../BdPlayer.json", JSON.stringify(BdPlayer, null, 4), (err) => {
        if (err) console.log("erreur d'accès à la BD player");
    });
} //on enregistre la BD quand on la modifie