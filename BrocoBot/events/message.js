/* Module message

   Gère l'envoi de messages et de commandes
   Applique le cooldown et le filtre de mots
   Lance les commandes reçues
*/

module.exports =
{
	name: 'message',

	execute(message, client)
	{
		if(message.author.bot)	//Retour si l'émetteur est un bot
			return;

		const config = require('../config.json');
		const ready = require('./ready.js');
		const now = Date.now();

		//Application du filtre à mots

		for(let i = 0; i < ready.bannedWords.length; ++i)
		{
			if(message.content.includes(ready.bannedWords[i]))
			{
				message.delete();
				return;
			}
		}
		
		if(message.content.startsWith(config.prefix))	//Commande
		{
			const args = message.content.slice(config.prefix.length).trim().split(/ +/);
			const commandName = args.shift().toLowerCase();

			if (!client.commands.has(commandName))
				return;

			//Application du cooldown

			const commandCooldownExpiration = parseInt(message.author.lastCommandTime) + parseInt(ready.commandCooldown);
			
			if (now > commandCooldownExpiration || Number.isNaN(commandCooldownExpiration))
			{
				try
				{
					client.commands.get(commandName).execute(message, args);
				}
				catch (error)
				{
					console.error(error);
					message.reply('Erreur durant l\'exécution de la commande.');
				}

				message.author.lastCommandTime = now;
			}
			else
			{
				message.delete();
				const timeLeft = (commandCooldownExpiration - now) / 1000;
				return message.reply(`Veuillez attendre ${timeLeft.toFixed(1)} seconde(s) avant de réutiliser cette commande.`);
			}
		}
		else	//Message
		{
			//Application du cooldown
			
			const messageCooldownExpiration = parseInt(message.author.lastMessageTime) + parseInt(ready.messageCooldown);

			if (now > messageCooldownExpiration || Number.isNaN(messageCooldownExpiration))
			{
				message.author.lastMessageTime = now;
			}
			else
			{
				message.delete();
				const timeLeft = (messageCooldownExpiration - now) / 1000;
				return message.reply(`Veuillez attendre ${timeLeft.toFixed(1)} seconde(s) avant de renvoyer un message.`);
			}
		}
	}
};