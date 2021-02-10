const Discord = require('discord.js'); //typique #include<>
const bot = new Discord.Client(); //prérequis pour  créer le bot
const token = require('../Configs/token.json'); //le token est stocké à part pour simplifier


bot.on("ready", async() => {
    console.log("bot allumé"); //un message dans la console pour être sûr que tout marche
    bot.user.setStatus("online");
    bot.user.setActivity("*help", { type: "LISTENING" }); //sans type : "joue à", ici : "écoute ..."
}); //Quand le bot est ready, on lance la fonction async qui affiche le statut du bot "en train de jouer..." et en online


bot.on("guildMemberAdd", member => {
    bot.channels.cache.get('807173186373419038') //on envoie le message de bienvenue du bot dans un salon spécifique via son ID
});

bot.login(token.token); //lance le bot