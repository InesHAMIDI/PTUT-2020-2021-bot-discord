const { Client, Collection} = require("discord.js");
const {loadCommands, loadEvents} = require("./util/loader");
 
const prefix = 'br.';

const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

loadCommands(client);
loadEvents(client);
   
 
client.once('ready', () => {
    console.log('Breeding is online!');
});

 

client.login('ODQyMDc2ODM4NTAyNDY1NTQ3.YJwDKw.tV2OWIfkHV-7ue-OhlJrnYGJkDY');
