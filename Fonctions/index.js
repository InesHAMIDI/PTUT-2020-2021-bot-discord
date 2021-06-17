const { Client, Collection, Discord } = require('discord.js'); //typique #include<>
const { client, bot } = new Discord.Client(); //prérequis pour  créer le bot
const token = require('../Configs/token.json'); //le token est stocké à part pour simplifier
const prefix = require('../Configs/config.json'); //on stocke le préfix des commandes dans une variable pour rendre les fonctions plus pratiques à implémenter
const { fs, fstat } = require('fs'); //requis pour lire les fichiers de commande
const quiz = require("./images.json")
const { loadCommands, loadEvents } = require("./util/loader");

//Yvan 
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.commands = new Discord.Collection(); //Ajout des commandes au client

//commandes d'Yvan
for (const file of commandFiles) //Lecture des commandes
{
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

for (const file of eventFiles) //Lecture des évènements
{
    const event = require(`./events/${file}`);

    if (event.once)
        client.once(event.name, (...args) => event.execute(...args, client));
    else
        client.on(event.name, (...args) => event.execute(...args, client));
}

//commandes d'Angèle
//fonction qui envoie une image aléatoire et analyse la réponse
bot.on('message', message => {
    //commande pour déclencher la fonction
    if (message.content == '!image') {

        //générer un nombre aléatoire
        const nombre = quiz[Math.floor(Math.random() * quiz.length)];
        //on filtre la réponse pour savoir si elle correspond à celles de la liste 
        const filter = response => {
            return nombre.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };

        //le bot envoie l'image
        const image = { files: [`./images/${nombre.picture}`] };
        const indice = (`${nombre.indice}`);
        //message.channel.send(indice);
        message.channel.send(image).then(() => {
            //le bot attends les réponses des utilisateurs
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
                .then(collected => {
                    //si la réponse est bonne 
                    message.channel.send(`${collected.first().author} Bravo ! C'était bien *${nombre.solution}*.`);
                })
                .catch(collected => {
                    //si le temps est dépassé
                    message.channel.send(`Personne n'a trouvé... C'était *${nombre.solution}*. On retente ?`);
                });
        });
    }
});


//commandes de Taliesin
["commands", "cooldowns"].forEach(x => Tclient[x] = new Collection());
loadCommands(Tclient);
loadEvents(Tclient);




client.on("ready", async() => {
    console.log("bot allume"); //un message dans la console pour être sûr que tout marche
    bot.user.setStatus("online");
    bot.user.setActivity("*help", { type: "LISTENING" }); //sans type : "joue à", ici : "écoute ..."
}); //Quand le bot est ready, on lance la fonction async qui affiche le statut du bot "en train de jouer..." et en online

client.on('guildMemberAdd', member => {
    if (member.user.bot) return; //on ne considère pas les autres bots comme des utilisateurs
    bot.channels.cache.get("807173186373419038").send(`Bienvenue ${member}`);
    console.log(channel);
    if (!channel) return;
}); //fonction donnée comme exemple dans discord.js API

client.on('message', msg => {
    if (msg.member.user.bot || msg.channel.type === 'dm') return; //on n'accepte pas de communiquer entre bots, ni en message privé
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
}); //une fonction simple pour vérifier si le bot fonctionne, vient de l'api discord



client.login(token.token); //lance le bot