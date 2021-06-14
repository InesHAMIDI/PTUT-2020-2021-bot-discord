const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    
    if (NewJeuxNim == false) {    
        Tabstr = []
        for (let x = 0; x < 20 ; x++ ) {
            Tabstr.push("<:JeuxNim_1:817052550825771038>")
        }
        NewJeuxNim = true ;
    } else {
        Tabstr = []
        for (let x = 0; x < 10 ; x++ ) {
            Tabstr.push("<:JeuxNim_3:817052588050350150>")
            Tabstr.push("<:JeuxNim_2:817052574783504385>")
        }
    }  
    
    let EmbedNim = new MessageEmbed()
    .setColor('#0000ff')
    .setTitle('Jeux de Nim')
    .setAuthor("Made By: ALPHA_T")
    .setDescription(Tabstr + " ");
    
    message.channel.send(EmbedNim) .then(async msg => {
        await msg.react('1️⃣');
        await msg.react('2️⃣');
        await msg.react('3️⃣');
    })
    
    
}

module.exports.help = MESSAGES.COMMANDS.MINI_JEUX.JEUXNIM;