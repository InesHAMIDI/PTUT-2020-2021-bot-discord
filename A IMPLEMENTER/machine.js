const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    // ♠️ ♣️ ♥️ ♦️ 💰
    
    let Tabresult = [];
    const Tabemoji = ["♠️","♠️","♠️","♠️","♠️","♠️","♠️","♠️","♠️","♠️","♣️","♣️","♣️","♥️","♥️","♥️","♥️","♦️","♦️","💰"];

    message.reply("♠️: 10 <:piece:819882973545234443> / ♣️: 20 <:piece:819882973545234443> / ♦️: 40 <:piece:819882973545234443> / ♥️: 80 <:piece:819882973545234443> / 💰: 160 <:piece:819882973545234443>");
    
    for (let i = 0; i < 3; i++) {
        emoji = Math.floor(Math.random() * Tabemoji.length);
        Tabresult[i] = Tabemoji[emoji];
      }

    const Embedcasino = new MessageEmbed()
    .setColor('#FFFF00')
    .setTitle('machine')
    .setAuthor("Made By: ALPHA_T")
    .setDescription(Tabresult + " ");

    message.channel.send(Embedcasino);

    if (Tabresult[0] === "♠️" && Tabresult[1] === "♠️" && Tabresult[2] === "♠️") {

        message.reply(` vous avez gagné 10 piece !`)

    } else if (Tabresult[0] === "♣️" && Tabresult[1] === "♣️" && Tabresult[2] === "♣️") {

    message.reply(` vous avez gagné 20 piece !`)

    } else if(Tabresult[0] === "♥️" && Tabresult[1] === "♥️" && Tabresult[2] === "♥️") {

        message.reply(` vous avez gagné 40 piece !`)

    } else if (Tabresult[0] === "♦️" && Tabresult[1] === "♦️" && Tabresult[2] === "♦️") {

        message.reply(` vous avez gagné 80 piece !`)

    } else if(Tabresult[0] === "💰" && Tabresult[1] === "💰" && Tabresult[2] === "💰") {
        
        message.reply(` vous avez gagné 160 piece !`)

    } else {
        message.reply(" vous avez perdu!")
    }
}
module.exports.help = MESSAGES.COMMANDS.CASINO.MACHINE;