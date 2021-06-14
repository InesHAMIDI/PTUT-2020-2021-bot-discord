const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args, settings) => {
    
    message.reply(message.author.id);
    message.channel.send(`\`${settings.goldcoinneurName}\``)
}
module.exports.help = MESSAGES.COMMANDS.MISC.TEST;