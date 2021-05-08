const Discord = require('discord.js'); // #include<>
const bot = require('../Configs/config.json');
const prefix = require('../Configs/config.json')
const RPGItems = require('RPGBDs')

bot.on('message', msg => {
    if (msg.author.bot) return

    if (msg.startsWith(prefix))
        switch (true){
            case msg.indexOf("RpgCreate"):

        }


    else
        console.log("command not valid");
})


