const { MessageReaction } = require("discord.js");

module.exports = (client, messageReaction, user) => {
    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    const emoji = messageReaction.emoji.name;
    if (member.user.bot) return;

    if (emoji === "🟥") message.delete();
    if (emoji === "🟦") message.reactions.removeAll();
    if (emoji === "🟩") message.channel.send('je suis le carré vert: 🟩');
}