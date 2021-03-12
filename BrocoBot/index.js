//Inclusion des modules et des fichiers de configuration

const fs = require('fs');	//FileSystem (lecture du dossier de comandes)
const discord = require('discord.js');	//API Discord
const { prefix, token } = require('./config.json');	//Configuration : prexif et token

//Initialisation du client discord et des commandes

const client = new discord.Client();

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client, prefix, cooldowns, discord));
	}
}

client.commands = new discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const cooldowns = new discord.Collection();	//Temps d'attente entre chaque exécution de commande

for (const file of commandFiles)
{
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.login(token);