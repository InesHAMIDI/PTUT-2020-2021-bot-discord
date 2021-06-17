const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require("./token.json");

var number_random = 0;

var party_launch = false;



bot.on("ready", async () =>{
    console.log("le bot est allumé");
    bot.user.setStatus("dnd");
    setTimeout(() => {
         bot.user.setActivity("Développer mon bot");
    }, 100)
});

bot.on('message', function(message){
    if(message.content == "!number start"){
        message.reply("Partie lancé")
        party_launch = true;
        number_random = Math.floor(Math.random() * (1000 - 0) + 0)
        console.log(number_random);

    }
    if(party_launch && message.content != null){
        if(Number.isInteger(parseInt(message.content))){

            if(message.content > number_random){
                message.reply("Plus petit")
            }
            else if(message.content < number_random){

                message.reply("Plus grand")

            }
            else{
                message.reply("Vous avez gagné la partie")
                party_launch = false;
            }
        }
        
    }

    if(message.content == "!number stop"){
        if(party_launch ==true){
           message.reply("Stopped Part !")
           party_launch = false;
        
        }else{
           message.reply("Pas de partie en cours")
        }
    }


});
bot.login(token.token)