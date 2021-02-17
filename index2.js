const Discord = require('discord.js');
const { fstat } = require('fs');
const bot = new Discord.Client();
const token = require("./token.json");
const fs = require("fs");
const bobot = require("./bobot.json");
let request = require ('request');
imagesbobot = require ("./images.json");

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
        Random = Math.floor(Math.random() * Compteur);
        message.channel.send({ files: [`./images/${imagesbobot[Random]}`]});
        reponse(Random);
    }
}

//fonction qui valide si la réponse est juste
function reponse(numero) {
    if(numero == 0) {
        if(message.content === 'karma') {
            if(message.member.user.bot) return ;
            message.reply('Bravo !');
        }
    }
    else if(numero == 1) {
        if(message.content === 'nagisa') {
            if(message.member.user.bot) return ;
            message.reply('Bravo !');
        }
    }
    else if(numero == 2) {
        if(message.content === 'koro') {
            if(message.member.user.bot) return ;
            message.reply('Bravo !');
        }
    }
}

bot.login(token.token);