const { Client, Collection} = require("discord.js");
const {loadCommands, loadEvents} = require("./util/loader");
const token = require("./token.json");

const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
require("./util/functions")(client);
client.mongoose = require("./util/mongoose");
// client.commands, client.cooldowns
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

loadCommands(client);
loadEvents(client);
client.mongoose.init();


client.on("ready", async () => {
    console.log("le bot est allumé");
    client.user.setActivity("goomba simulator");
});

client.login(token.token);