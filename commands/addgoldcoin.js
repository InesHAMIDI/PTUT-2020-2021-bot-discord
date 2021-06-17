const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args, settings) => {
    if (message.member.hasPermission('admin')) {
        
        var gain = args[1];
        var nb = 0;
        for (let i = 0; i < gain; i++) {
            nb++;
          }
        total = settings.goldcoin + nb;

        await client.updateGoldcoinneur(args[0], { goldcoin: total });
        message.reply("la modification a été effectué");
    }
}
module.exports.help = MESSAGES.COMMANDS.GOLDCOIN.ADDGOLDCOIN;