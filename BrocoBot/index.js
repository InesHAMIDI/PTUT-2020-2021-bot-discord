//Inclusion des modules et des fichiers de configuration

const fs = require('fs');	//FileSystem (lecture du dossier de comandes)
const discord = require('discord.js');	//API Discord
const { prefix, token } = require('./config.json');	//Configuration : prexif et token

//Initialisation du client discord et des commandes

const client = new discord.Client();
client.commands = new discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const cooldowns = new discord.Collection();	//Temps d'attente entre chaque exécution de commande

for (const file of commandFiles)
{
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () =>
{
	console.log('Ready!');
});

//Réception des commandes

client.on('message', message =>
{
	if(!message.content.startsWith(prefix) || message.author.bot)
		return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName))
		return;

	const command = client.commands.get(commandName);

	if(!cooldowns.has(command.name))
		cooldowns.set(command.name, new discord.Collection());

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	//if (timestamps.has(message.author.id))
	//{
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime)
		{
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	//}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);


	try
	{
		command.execute(message, args);
	}
	catch (error)
	{
		console.error(error);
		message.reply('Erreur durant l\'exécution de la commande');
	}
})

client.login(token);