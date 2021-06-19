const { MESSAGES } = require("../../util/constants");
const bd = require("simpdatabase");
const file =  "basededonnee/bdd.json";

module.exports.run = (client, message, args) => {  
    const id = message.author.id;
    let food = args[0];
    let preference = bd.Search(id, "preference", file)
    let deteste = bd.Search(id, "deteste", file);
    let nom = bd.Search(id, "nom", file);

    if(preference == food){
        message.reply(`Tu as donné du ${food} à ${nom}, il a aimé !!`);
        var result = bd.Search(id, "bonheur", file) +1;
        bd.Update(id, "bonheur", result, file);
        console.log("2")
    } else if(deteste == food){
        message.reply(`Tu as donné du ${food} à ${nom}, il a détesté !!`);
        var result = bd.Search(id, "bonheur", file) -1;
        bd.Update(id, "bonheur", result, file);
    } 
    
}
module.exports.help = MESSAGES.COMMANDS.TAMAGOTCHI.FOOD;
