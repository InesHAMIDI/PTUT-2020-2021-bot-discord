const Discord = require('discord.js'); //typique #include<>

bot.on('message', msg => {
    if (msg.author.bot) return
})

function SaveBdPlayer() {
    fs.writeFile("../BdPlayer.json", JSON.stringify(BdPlayer, null, 4), (err) => {
        if (err) console.log("erreur d'accès à la BD player");
    });
} //on enregistre la BD quand on la modifie