const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
    message.channel.send(new MessageEmbed()
    .setTitle("Manuel du bot")
    .setDescription('')
    .setColor('#000000'))
    }
module.exports.help = MESSAGES.COMMANDS.MISC.HELP;

//[telecharger](C:\Users\talie\Desktop\Bot Discord\manuel html\ManuelDownload.html)