const Discord = require('discord.js');
const { fstat } = require('fs');
const bot = new Discord.Client();
const token = require("./token.json");
const fs = require("fs");
const bobot = require("./bobot.json");
let request = require ('request');
const quiz = require("./images.json")



bot.on("ready", async () =>{
    console.log('Le bot est allumé');
    bot.user.setStatus("dnd");
    bot.user.setActivity('rien parce qu on travaille hein');
})


//fonction qui envoie une image aléatoire et analyse la réponse
bot.on('message', message => {
    //commande pour déclencher la fonction
    if(message.content == '!image') {

        //générer un nombre aléatoire
        const nombre = quiz[Math.floor(Math.random() * quiz.length)];
        //on filtre la réponse pour savoir si elle correspond à celles de la liste 
        const filter = response => {
	        return nombre.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };

        //le bot envoie l'image
        const image = { files: [`./images/${nombre.picture}`]};
        const indice = (`${nombre.indice}`);
        //message.channel.send(indice);
        message.channel.send(image).then(() => {
            //le bot attends les réponses des utilisateurs
	        message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
		        .then(collected => {
                    //si la réponse est bonne 
			        message.channel.send(`${collected.first().author} Bravo ! C'était bien *${nombre.solution}*.`);
		        })
		        .catch(collected => {
                    //si le temps est dépassé
			        message.channel.send(`Personne n'a trouvé... C'était *${nombre.solution}*. On retente ?`);
		        });
        });
    }
});

/*
//fonction qui envoie une image aléatoire et analyse la réponse
bot.on('message', message => {
    //commande pour déclencher la fonction
    if(message.content == '!image') {

        //générer un nombre aléatoire
        const nombre = quiz[Math.floor(Math.random() * quiz.length)];
        //on filtre la réponse pour savoir si elle correspond à celles de la liste 
        const filter = response => {
	        return nombre.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };

        //le bot envoie l'image
        const image = { files: [`./images/${nombre.picture}`]};
        message.channel.send(image).then(() => {
            //le bot attends les réponses des utilisateurs
	        message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
		        .then(collected => {
                    //si la réponse est bonne 
			        message.channel.send(`${collected.first().author} Bravo ! C'était bien ${nombre.solution}`);
		        })
		        .catch(collected => {
                    //si le temps est dépassé
			        message.channel.send(`Personne n'a trouvé... C'était ${nombre.solution}. On retente ?`);
		        });
        });
    }
});
*/

bot.login(token.token);