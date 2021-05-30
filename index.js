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

//fonction qui envoie une question aléatoire
bot.on('message', message => {
    //commande pour déclancher la fonction
    if(message.content == '!question') {

        //générer un nombre aléatoire
        const nombre = quiz[Math.floor(Math.random() * quiz.length)];
        //on filtre la réponse pour savoir si elle correspond à celles de la liste 
        const filter = response => {
	        return nombre.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };

        //le bot envoie la question
        message.channel.send(nombre.question).then(() => {
            //le bot attends les réponses des utilisateurs
	        message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
		        .then(collected => {
                    //si la réponse est bonne 
			        message.channel.send(`${collected.first().author} Bravo !`);
		        })
		        .catch(collected => {
                    //si le temps est dépassé
			        message.channel.send("Personne n'a trouvé... On retente ?");
		        });
        });
    }
});


bot.login(token.token);