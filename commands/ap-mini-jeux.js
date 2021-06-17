const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
    if (message.member.hasPermission('admin')) {
    let bool = args.join(" ");
    if (bool != "true" && bool != "false") {
        message.channel.send("ce n'est pas le bon argument")
        console.log(bool)
        return;
    }
    if (bool == "true") {
        global.mini_jeux = true;
        message.channel.send(new MessageEmbed()
        .setTitle("Les mini_jeux sont activés")
        .setColor('#0000ff'))
        console.log("mini_jeux sont activés")
    } else {
        global.mini_jeux = false;
        message.channel.send(new MessageEmbed()
        .setTitle("Les mini_jeux sont désactivés")
        .setColor('#0000ff'))
        console.log("mini_jeux sont désactivés")
    }
    }
}
module.exports.help = MESSAGES.COMMANDS.MINI_JEUX.AP_MINI_JEUX;