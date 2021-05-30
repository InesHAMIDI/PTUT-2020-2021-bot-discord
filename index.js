const Discord = require('discord.js');
const { fstat } = require('fs');
const bot = new Discord.Client();
const token = require("./token.json");
const fs = require("fs");
const bobot = require("./bobot.json");
let request = require ('request');
const quiz = require("./test.json")


bot.on("ready", async () =>{
    console.log('Le bot est allumé');
    bot.user.setStatus("dnd");
    bot.user.setActivity('rien parce qu on travaille hein');
})


bot.on('message', message => {
    if(message.content == '!question') {

        const nombre = quiz[Math.floor(Math.random() * quiz.length)];
        const filter = response => {
	        return nombre.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };

        message.channel.send(nombre.question).then(() => {
	        message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
		        .then(collected => {
			        message.channel.send(`${collected.first().author} Bravo !`);
		        })
		        .catch(collected => {
			        message.channel.send("Personne n'a trouvé... On retente ?");
		        });
        });
    }
});


bot.login(token.token);