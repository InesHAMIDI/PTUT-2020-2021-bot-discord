module.exports =
{
	name: 'message',

	execute(message, client, prefix, discord)
	{
		if(message.author.bot)
			return;

		const now = Date.now();

		if(!message.content.startsWith(prefix))
		{
			const messageCooldown = 3000;
			const messageCooldownExpiration = message.author.lastMessageTime + messageCooldown;

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

			return;
		}
		else
		{
			const args = message.content.slice(prefix.length).trim().split(/ +/);
			const commandName = args.shift().toLowerCase();

			if (!client.commands.has(commandName))
				return;

			const command = client.commands.get(commandName);
			
			const commandCooldown = 3000;
			const commandCooldownExpiration = message.author.lastCommandTime + commandCooldown;

			if (now > commandCooldownExpiration || Number.isNaN(commandCooldownExpiration))
			{
				try
				{
					command.execute(message, args);
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
	}
};