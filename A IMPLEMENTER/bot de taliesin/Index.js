const { Client, Collection} = require("discord.js");
const {loadCommands, loadEvents} = require("./util/loader");
const token = require("./token.json");

const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
// client.commands, client.cooldowns
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

//variable global de l'outils d'activation/de désactivation des fonctionnalités
global.mini_jeux = true ;
//variable global des mini-jeux spéciaux
global.AncienShifumi = " " ;
global.NewJeuxNim = false ;


loadCommands(client);
loadEvents(client);

client.on("ready", async () => {
    console.log("le bot est allumé");
    client.user.setActivity("piranha plant simulator");
});

client.login(token.token);