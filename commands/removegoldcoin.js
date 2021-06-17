const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args, settings) => {
    if (message.member.hasPermission('admin')) {
        var gain = args[1];
        total = settings.goldcoin - gain;
        if (total < 0 ) {
            total = 0;
        }

        await client.updateGoldcoinneur(args[0], { goldcoin: total });
        message.reply("la modification a été effectué");
    }
}
module.exports.help = MESSAGES.COMMANDS.GOLDCOIN.REMOVEGOLDCOIN;