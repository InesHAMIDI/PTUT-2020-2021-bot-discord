const Discord = require('discord.js');
const { fstat } = require('fs');
const bot = new Discord.Client();
const token = require("./token.json");
const fs = require("fs");
const bobot = require("./bobot.json");
let request = require ('request');
imagesbobot = require('./images.json');
reponsesbobot = require ("./reponses.json")

const quiz = require('./films.json');
const item = quiz[Math.floor(Math.random() * quiz/length)];
const filter = response => {
    return item.answers.some(answers => answers.toLowerCase() === response.content.toLowerCase());
};

bot.on("ready", async () =>{
    console.log('Le bot est allumé');
    bot.user.setStatus("dnd");
    bot.user.setActivity('rien');
})

//fonction qui envoie une message aléatoirement parmi celles de la base de données
function image() {
    if (message.content == "!image") {
        if (message.member.user.bot) return;
        var Compteur = 0;
        imagesbobot.forEach(file => {
            Compteur ++;
        })
        Chiffre = Math.floor(Math.random() * Compteur);
        message.channel.send({ files: [`./images/${imagesbobot[Chiffre]}`]});
        reponse(Chiffre);
    }
}



bot.login(token.token);