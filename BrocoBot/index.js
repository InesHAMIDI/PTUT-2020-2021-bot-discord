/* Index

   Initialise l'API DIscord et récupère les commandes
   Connecte le bot
*/

const fs = require('fs');
const discord = require('discord.js');
const config = require('./config.json');

const client = new discord.Client();

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.commands = new discord.Collection();	 //Ajout des commandes au client

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
		client.on(event.name, (...args) => event.execute(...args, client));
}

client.login(config.token);  //Connexion