const Discord = require('discord.js');
const { fstat } = require('fs');
const bot = new Discord.Client();
const token = require("./token.json");
const fs = require("fs");
const bobot = require("./bobot.json");
let request = require ('request');
imagesbobot = require('./images.json');
reponsesbobot = require ("./reponses.json")

const quiz = require('./test.json');
const item = quiz[Math.floor(Math.random() * quiz.length)];

//boolen qui teste si la reponse est dans le tableau
const filter = response => {
	return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};

if (message.content == "!test") {
    message.channel.send(item.question).then(() => {
        message.channel.awaitMessages(filter, { max: 2, time: 30000, errors: ['time'] })
            .then(collected => {
                message.channel.send(`${collected.first().author} got the correct answer!`);
            })
            .catch(collected => {
                message.channel.send('Looks like nobody got the answer this time.');
            });
    });
}




bot.login(token.token);