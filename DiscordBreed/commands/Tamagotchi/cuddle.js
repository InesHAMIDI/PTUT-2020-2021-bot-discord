const { MESSAGES } = require("../../util/constants");
const bd = require("simpdatabase");
const file =  "basededonnee/bdd.json";

module.exports.run = (client, message, args) => {  
    const id = message.author.id;
    var result = bd.Search(id, "bonheur", file) +1;
    bd.Update(id, "bonheur", result, file);
    
}
module.exports.help = MESSAGES.COMMANDS.TAMAGOTCHI.CUDDLE;
