const Discord = require('discord.js'); //typique #include<>
const { fstat } = require('fs');
const BdPlayer = require('RPGPlayers.json');
const BdQuest = require('RPGQuests.json');

function SaveBdPlayer() {
    fs.writeFile("../BdPlayer.json", JSON.stringify(BdPlayer, null, 4), (err) => {
        if (err) console.log("erreur d'accès à la BD player");
    });
} //on enregistre la BD quand on la modifie