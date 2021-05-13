const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args, settings) => {
    // 🟩 ⬛ 🟥
    
    //! problème avec la restriction de la mise en test gagnant



    var mise = args[0];
    let action = args[1];
    
    if (settings.goldcoin < mise) {
        return message.reply(` votre mise est plus grand que votre nombre de Goldcoin sur votre compte`);
    }
    if (action == undefined) {
        return message.reply(` vous avez mal rentré les arguments: \` <gain miser> <action> \``);
    }
    if (action > 36 || action < 0){
        return message.reply("action => noir/pair ou rouge/impair ou 0 à 36")
    }

    message.reply("action: <noir> ou <rouge> = 1x la mise, <nombre> = 35x la mise");
    
    const result = Math.floor(Math.random() * 36);
    let square;
    if (result == 0) {
        square = "🟩";
    } else if (result % 2 == 0) {
        square = "🟥";
    } else {
        square = "⬛";
    }

    const Embedcasino = new MessageEmbed()
    .setColor('#FFFF00')
    .setTitle('roulette')
    .setAuthor("Made By: ALPHA_T")
    .setDescription(result + " " +  square);

    message.channel.send(Embedcasino);

    total = settings.goldcoin - mise;
    await client.updateGoldcoinneur(message.author.id, { goldcoin: total });

    if (action >= 0  || action <= 36) {
        if (action == result) {
            total = settings.goldcoin + mise * 35;
            await client.updateGoldcoinneur(message.author.id, { goldcoin: total });
            return message.reply(" vous avez gagné 35x votre mise!")
        } else {
            return message.reply(" vous avez perdu!")
        }
    } else {
        switch (action) {
        case "noir":
            if (square == "⬛") {
                total = settings.goldcoin + mise * 1;
                await client.updateGoldcoinneur(message.author.id, { goldcoin: total });
                message.reply(" vous avez gagné 1x votre mise!")
            } else {
                message.reply(" vous avez perdu!")
            }
            return;

        case "rouge":
            if (square == "🟥") {
                total = settings.goldcoin + mise * 1;
                await client.updateGoldcoinneur(message.author.id, { goldcoin: total });
                message.reply(" vous avez gagné 1x votre mise!")
            } else {
                message.reply(" vous avez perdu!")
            }
            return;

        default :
        return message.reply("action => noir/pair ou rouge/impair ou 0 à 36 !!!!")
    }
    }
}
module.exports.help = MESSAGES.COMMANDS.CASINO.ROULETTE;