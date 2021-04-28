const Discord = require('discord.js'); //typique #include<>
const bot = new Discord.Client(); //prérequis pour  créer le bot

bot.on('message', msg => {
    if (msg.author.bot) return
})


