const Discord = require('discord.js'); //typique #include<>
const bot = new Discord.Client(); //prérequis pour  créer le bot
const token = require('../Configs/token.json'); //le token est stocké à part pour simplifier


bot.on("ready", async() => {
    console.log("bot allume"); //un message dans la console pour être sûr que tout marche
    bot.user.setStatus("online");
    bot.user.setActivity("*help", { type: "LISTENING" }); //sans type : "joue à", ici : "écoute ..."
}); //Quand le bot est ready, on lance la fonction async qui affiche le statut du bot "en train de jouer..." et en online


bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'ines');
    // On veut envoyer un message de bienvenue dans un salon spécial par rapport à son nom pour qu'il s'adapte à tous les serveurs, si le channel n'existe pas, on arrête
    if (!channel)
        console.log("error, channel de bienvenue not found");
    channel.send(`Bienvenue ${member}`);
});

bot.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
}); //une fonction simple pour vérifier si le bot fonctionne

bot.login(token.token); //lance le bot