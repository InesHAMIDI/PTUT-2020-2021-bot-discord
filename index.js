const Discord = require('discord.js');
const { fstat } = require('fs');
const bot = new Discord.Client();
const token = require("./token.json");
const fs = require("fs");
const bobot = require("./bobot.json");
let request = require ('request');
imagesbobot = require ("./questions.json");

bot.on("ready", async () =>{
    console.log('Le bot est allumé');
    bot.user.setStatus("dnd");
    bot.user.setActivity('se prendre la tête');
})

const personnages = ["karma", "nagisa", "koro-sensei"];
const karma = ["karma"];
const nagisa = ["nagisa"];
const koro = ["koro-sensei", "koro"];

//fonction qui envoie une message aléatoirement parmi la base de données
function quiz() {
    if (message.content == "!image") {
        if (message.member.user.bot) return;
        var Compteur = 0;
        imagesbobot.forEach(file => {
            Compteur ++;
        })
        Chiffre = Math.floor(Math.random() * Compteur);
        message.channel.send({ files: [`./images/${imagesbobot[Chiffre]}`]});
        test(Chiffre);
    }
}

//fonction qui vérifie si la réponse est la bonne
function test(n) {
    var reponse = personnages[n];
    if (message.content == reponse) {
        message.reply('Bonne réponse !');
    }
    else {
        message.reply('Raté')
    }
}


bot.login(token.token);