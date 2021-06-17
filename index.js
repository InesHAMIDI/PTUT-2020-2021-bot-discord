const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require("./token.json");


bot.on("ready", async () =>{
    console.log("le bot est allumé");
    bot.user.setStatus("dnd");
    setTimeout(() => {
         bot.user.setActivity("Développer mon bot");
    }, 100)
});
bot.on('message', msg => {
    if (msg.content === 'bonjour' ) {
        msg.reply('Salut');
    }
})

bot.login(token.token)
