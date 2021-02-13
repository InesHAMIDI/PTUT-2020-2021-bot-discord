const Discord = require('discord.js');
const { fstat } = require('fs');
const bot = new Discord.Client();
const token = require("./token.json");
const fs = require("fs");
const bobot = require("./bobot.json");
let request = require ('request');
imagesbobot = require ("./images.json");

bot.on("ready", async () =>{
    console.log('Le bot est allumé');
    bot.user.setStatus("dnd");
    bot.user.setActivity('rien parce qu on travaille hein');
})

function EnregistrerImage() {
    fs.writeFile("./images.json", JSON.stringify(imagesbobot, null, 4), (err) => {
        if (err) message.channel.send("Il y a eu une erreur");
    });
    
}

bot.on ('message', async message =>{
    if (message.channel.id == bobot['channel-images']){
        if (message.member.user.bot) return;
        if (message.attachments){
            message.attachments.forEach(a => {
                download(a.url, message);
            });
        }
    }
})

//on créé une fonction pour enregistrer les images 
function download(url, message) {
    var Compteur = 1; //on initialise un compteur
    fs.readdirSync("./images").forEach(file => {
        Compteur++;
        //pour chaque image, on rajoute 1 au compteur
    })
    var ext = request.get(url).path.split(".").pop()
    request.get(url)
        .on('error', console.error) //on répare les erreurs
        .pipe(fs.createWriteStream(`./images/${Compteur}.${ext}`)); //on enregistre le fichier dans le dossier images
    imagesbobot.push(`${Compteur}.${ext}`)
    EnregistrerImage();
    message.channel.send("L'image a bien été ajoutée !").then(message => delete({timeout: 20000}).catch(err => console.log(err)));
}

bot.login(token.token);