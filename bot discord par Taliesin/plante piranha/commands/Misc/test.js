const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
  const editEmbed = new MessageEmbed()
  .setDescription('this is the old description')
  message.channel.send(editEmbed).then((m) => 
  m.edit(editEmbed.setDescription('this is the new description')))
}
module.exports.help = MESSAGES.COMMANDS.MISC.TEST;

/*
   /*if (NewJeuxNim == false) {    
        Tabstr = []
        for (let x = 0; x < 20 ; x++ ) {
            Tabstr.push("❗")
        }
        NewJeuxNim = true ;
    } else {
        Tabstr = []
        for (let x = 0; x < 20 ; x++ ) {
            Tabstr.push("❕")
        }
    }  
    

    const EmbedNim = new MessageEmbed()
    .setColor('#0000ff')
    .setTitle('Jeux de Nim')
    .setAuthor("Made By: ALPHA_T")
    .setDescription(/*Tabstr + " ");
    
    message.channel.send(EmbedNim) 
    await message.react('1️⃣');
    await message.react('2️⃣');
    await message.react('3️⃣');
    
       





*/
