const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, user, args) => {
    let role = message.guild.roles.cache.find(r => r.name === 'GoldCoinneur');
    if (role) {
        if (message.member.roles.cache.has(role.id)) return message.reply(" vous avez déjà se role!");
        
        if (message.member.roles.cache.has('membre')) message.member.roles.remove("membre");
        message.member.roles.add(role)
        .then(m => message.reply(" vous êtes maintenant un Goldcoinneur !"))
        .catch(e => console.log(e));

        await client.createGoldcoinneur(message.author.id);
    } else {
        message.channel.send("le role n'existe pas !")
    }
}
module.exports.help = MESSAGES.COMMANDS.ROLES.GOLDCOINNEURROLE;