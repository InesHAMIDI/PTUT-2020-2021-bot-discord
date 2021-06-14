const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args, settings) => {
    //  emoji : <:piece:819882973545234443>
    message.reply(` Vous avez  \`${settings.goldcoin}\` <:piece:819882973545234443>`);
}
module.exports.help = MESSAGES.COMMANDS.GOLDCOIN.MONEY;