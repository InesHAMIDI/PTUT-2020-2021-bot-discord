const Discord = require('discord.js'); //typique #include<>
const bot = new Discord.Client(); //prérequis pour  créer le bot
const token = require('../Configs/token.json'); //le token est stocké à part pour simplifier
const prefix = require('../Configs/config.json'); //on stocke le préfix des commandes dans une variable pour rendre les fonctions plus pratiques à implémenter

bot.on("ready", async() => {
    console.log("bot allume"); //un message dans la console pour être sûr que tout marche
    bot.user.setStatus("online");
    bot.user.setActivity("*help", { type: "LISTENING" }); //sans type : "joue à", ici : "écoute ..."
}); //Quand le bot est ready, on lance la fonction async qui affiche le statut du bot "en train de jouer..." et en online

bot.on('guildMemberAdd', member => {
    //if (member.user.bot) return; //on ne considère pas les autres bots comme des utilisateurs
    const channel = member.guild.channels.fetch("807173186373419038");
    console.log(channel);
    if (!channel) return;
    channel.send(`Bienvenue ${member}`);
}); //fonction donnée comme exemple dans discord.js API

bot.on('message', msg => {
    if (msg.member.user.bot || message.channel.type === 'dm') return; //on n'accepte pas de communiquer entre bots, ni en message privé
    if (msg.content === 'ping') {
        msg.reply('Pong!');

    }
}); //une fonction simple pour vérifier si le bot fonctionne, vient de l'api discord

//Fonctions utilisées :

//
bot.login(token.token); //lance le bot