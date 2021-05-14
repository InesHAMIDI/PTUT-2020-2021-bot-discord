const { MESSAGES } = require("../../util/constants");
const bd = require("simpdatabase");
const file =  "basededonnee/bdd.json";

module.exports.run = (client, message, args) => {  
    const id = message.author.id;
    const tabAliment = ["bambou", "banane", "raisin", "croquette", "melon", "avocat", "fraise", "pomme de terre"];
    var preference = Math.floor(Math.random() * tabAliment.length);
    while(true){
        var deteste = Math.floor(Math.random() * tabAliment.length);
        if ( preference != deteste){
            break;
        }
    }


    let espece = args[0]; 
    const tabAnimaux = ["chat", "panda"];
    var compt = 0;
    for (let i = 0; i < tabAnimaux.length; i++) {
        if (espece != tabAnimaux[i]){ 
            compt = compt +1
        }

        if (compt == tabAnimaux.length) { 
            return message.reply("Désolé mais cet animal n'est pas disponible.")

        }
    }
    if (args[1] == undefined){  
        return message.reply("Problème, il manque un argument!");
    }

    let nom = args[1];
    
    bd.Insert(id, "", "", file);
    bd.Insert(id, "espece", espece, file);
    bd.Insert(id, "nom", nom, file);
    bd.Insert(id, "preference", tabAliment[preference], file);
    bd.Insert(id, "deteste", tabAliment[deteste], file);
    bd.Insert(id, "bonheur", 0, file);

    message.reply(", Félécitation, vous avez adopté un nouvelle animal !")
}
module.exports.help = MESSAGES.COMMANDS.TAMAGOTCHI.ADOPT;