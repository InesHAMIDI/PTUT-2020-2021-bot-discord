const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
    let role = message.guild.roles.cache.find(r => r.name === 'membre');
    if (role) {
        if (message.member.roles.cache.has(role.id)) return message.reply(" vous avez déjà se role!");
        if (message.member.roles.cache.has('GoldCoinneur')) return message.reply(" vous avez déjà un meilleur role que celui là!");

        message.member.roles.add(role)
        .then(m => message.reply(" vous avez maintenant le role de membre !"))
        .catch(e => console.log(e));
    } else {
        message.channel.send("le role n'existe pas !")
    }
}
module.exports.help = MESSAGES.COMMANDS.ROLES.MEMBRE;