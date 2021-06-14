const { MessageEmbed, Message } = require("discord.js");

module.exports = (client, member) => {
    const embed = new MessageEmbed()
        .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
        .setcolor("#FFFF00")
        .setfooter("un utilisateur a rejoint!")
        .settimestamp();
    
    
    //client.channels.cache.get('').send(embed);
    Message.channel.send(embed);
}