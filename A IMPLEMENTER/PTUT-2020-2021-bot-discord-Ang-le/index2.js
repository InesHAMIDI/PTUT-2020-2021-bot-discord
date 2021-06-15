const Discord = require('discord.js');
const { fstat } = require('fs');
const bot = new Discord.Client();
const token = require("./token.json");
const fs = require("fs");
const bobot = require("./bobot.json");
let request = require ('request');
imagesbobot = require ("./images.json");
reponsesbobot = require ("./reponses.json")

bot.on("ready", async () =>{
    console.log('Le bot est allumé');
    bot.user.setStatus("dnd");
    bot.user.setActivity('rien');
})

//fonction qui envoie une message aléatoirement parmi celles de la base de données
function image() {
    if(message.content == "!image") {
        if(message.member.user.bot) return;
        var Compteur = 0;
        imagesbobot.forEach(file => {
            Compteur ++;
        })
        Chiffre = Math.floor(Math.random() * Compteur);
        message.channel.send({ files: [`./images/${imagesbobot[Chiffre]}`]});
        reponse(Chiffre);
    }
}

//fonction qui valide si la réponse est juste
function reponse(numero) {
    if(message.content == `${reponsesbobot[numero]}`){
        message.reply('Bravo, tu as trouvé !');
    }
}


bot.login(token.token);