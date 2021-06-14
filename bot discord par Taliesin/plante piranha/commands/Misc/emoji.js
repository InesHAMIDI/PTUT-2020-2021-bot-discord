const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    // 🟥 🟦 🟩 🟨

    await message.react('🟩');
    await message.react('🟦');
    await message.react('🟥');
}

module.exports.help = MESSAGES.COMMANDS.MISC.EMOJI;