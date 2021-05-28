const Discord = require('discord.js') //typique #include<>
const bot = new Discord.Client()
const token = require('../Configs/token.json') //le token est stocké à part pour simplifier
const prefix = require('../Configs/config.json') //on stocke le préfix des commandes dans une variable pour rendre les fonctions plus pratiques à implémenter

bot.on("ready", async() => {
    console.log("bot allume") //un message dans la console pour être sûr que tout marche
    await bot.user.setStatus("online")
    await bot.user.setActivity("Beep Boop", { type: "PLAYING" })
}); //bot ready : make it have some status on discord to make it look cool

bot.on('guildMemberAdd', member => {
    if (member.user.bot) return //on ne considère pas les autres bots comme des utilisateurs
    bot.channels.cache.get("807173186373419038").send(`Bienvenue ${member}`);
    console.log(channel)
    if (!channel) return
}); //fonction donnée comme exemple dans discord.js API

bot.on('message', msg => {
    if (msg.member.user.bot || msg.channel.type === 'dm') return; //on n'accepte pas de communiquer entre bots, ni en message privé
    if (msg.content === 'ping') {
        msg.reply('Pong!')
    }
}); //une fonction simple pour vérifier si le bot fonctionne, vient de l'api discord

bot.login(token.token); //lance le bot