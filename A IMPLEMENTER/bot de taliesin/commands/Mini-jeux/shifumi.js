const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
    if (global.mini_jeux == true ) {
    let j1 = args.join(" ");

    if (AncienShifumi == " ") {
        console.log("1ere partie!");
    }
    if (j1 != "pierre" && j1 != "feuille" && j1 != "ciseaux") {
        message.channel.send("ce n'est pas le bon argument")
        return
    }
    
    if (AncienShifumi == " ") {
        shifumi = ["pierre", "feuille", "feuille", "ciseaux", "ciseaux", "pierre"];
    } else if (AncienShifumi == "pierre") {
        shifumi = ["pierre", "feuille", "ciseaux", "feuille", "ciseaux", "ciseaux"];
    } else if (AncienShifumi == "feuille") {
        shifumi = ["pierre", "feuille", "pierre", "ciseaux", "ciseaux", "pierre"];
    } else if (AncienShifumi == "ciseaux") {
        shifumi = ["pierre", "feuille", "feuille", "ciseaux", "feuille", "pierre"];
    }
    
    var randbot = Math.floor(Math.random() * shifumi.length);
    message.channel.send(new MessageEmbed()
        .setTitle(shifumi[randbot])
        .setColor('#0000ff'))
    if (shifumi[randbot] == j1) {
        message.reply("on a fait égalité !")
    } else if (j1 == "pierre" && shifumi[randbot] == "ciseaux" || j1 == "feuille" && shifumi[randbot] == "pierre" || j1 == "ciseaux" && shifumi[randbot] == "feuille" ) {
        AncienShifumi = j1;
        message.reply("tu as gagné!")
    } else {
        AncienShifumi = j1;
        message.reply("tu as perdu!")
    } 
    }
}


module.exports.help = MESSAGES.COMMANDS.MINI_JEUX.SHIFUMI;