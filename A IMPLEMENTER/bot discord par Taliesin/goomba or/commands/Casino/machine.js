const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args, settings) => {
    // ♠️ ♣️ ♥️ ♦️ 💰
    
    if (settings.goldcoin < 5) {
        return message.reply(" vous n'avez pas assez de <:piece:819882973545234443> pour jouer, il faut au minimum 5 <:piece:819882973545234443>!")
    }
    
    total = settings.goldcoin - 5;
    await client.updateGoldcoinneur(message.author.id, { goldcoin: total });
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

        Goldcoin = Goldcoin + 10;
        total = settings.goldcoin - 5;
        await client.updateGoldcoinneur(message.author.id, { goldcoin: total });
        message.reply(` vous avez gagné 10 <:piece:819882973545234443>!`)

    } else if (Tabresult[0] === "♣️" && Tabresult[1] === "♣️" && Tabresult[2] === "♣️") {

        total = settings.goldcoin + 20;
        await client.updateGoldcoinneur(message.author.id, { goldcoin: total });
        message.reply(` vous avez gagné 20 <:piece:819882973545234443>!`)

    } else if(Tabresult[0] === "♥️" && Tabresult[1] === "♥️" && Tabresult[2] === "♥️") {

        total = settings.goldcoin + 40;
        await client.updateGoldcoinneur(message.author.id, { goldcoin: total });
        message.reply(` vous avez gagné 40 <:piece:819882973545234443>!`)

    } else if (Tabresult[0] === "♦️" && Tabresult[1] === "♦️" && Tabresult[2] === "♦️") {

        total = settings.goldcoin + 80;
        await client.updateGoldcoinneur(message.author.id, { goldcoin: total });
        message.reply(` vous avez gagné 80 <:piece:819882973545234443>!`)

    } else if(Tabresult[0] === "💰" && Tabresult[1] === "💰" && Tabresult[2] === "💰") {
        
        total = settings.goldcoin + 160;
        await client.updateGoldcoinneur(message.author.id, { goldcoin: total });
        message.reply(` vous avez gagné 160 <:piece:819882973545234443>!`)

    } else {
        message.reply(" vous avez perdu!")
    }
}
module.exports.help = MESSAGES.COMMANDS.CASINO.MACHINE;