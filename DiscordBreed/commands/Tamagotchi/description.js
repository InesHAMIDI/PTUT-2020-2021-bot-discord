const { MESSAGES } = require("../../util/constants");
const bd = require("simpdatabase");
const file =  "basededonnee/bdd.json";
const discord = require("discord.js");

module.exports.run = (client, message, args) => {  
    const id = message.author.id;
    let espece = bd.Search(id, "espece", file); 
    let nom = bd.Search(id, "nom", file);
    let preference = bd.Search(id, "preference", file);
    let deteste = bd.Search(id, "deteste", file);
    var bonheur = bd.Search(id, "bonheur", file);

    const descEmbed = new discord.MessageEmbed()
        .setColor('047080')
        .setTitle('Fiche animal')
        .addFields(
            { name: 'espece', value: espece },
		    { name: 'nom', value: nom },
		    { name: 'préférence', value: preference},
		    { name: 'déteste', value: deteste},
            { name: 'Bonheur', value: bonheur},
        )
    
    message.channel.send(descEmbed);
    
}
module.exports.help = MESSAGES.COMMANDS.TAMAGOTCHI.DESCRIPTION;
