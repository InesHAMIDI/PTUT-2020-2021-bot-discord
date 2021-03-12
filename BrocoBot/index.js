const fs = require('fs');				//FileSystem
const discord = require('discord.js');  //API Discord

const { prefix, token } = require('./config.json');	 //Configuration

const client = new discord.Client();  //Client discord

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));		 //Fichiers d'évènements
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));	 //Fichiers de commandes

const cooldowns = new discord.Collection();	 //Temps d'attente entre chaque exécution de commande
client.commands = new discord.Collection();	 //Commandes

for (const file of commandFiles)  //Lecture des commandes
{
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

for (const file of eventFiles)  //Lecture des évènements
{
	const event = require(`./events/${file}`);

	if (event.once)
		client.once(event.name, (...args) => event.execute(...args, client));
	else
		client.on(event.name, (...args) => event.execute(...args, client, prefix, cooldowns, discord));
}

client.login(token);  //Connexion