module.exports =
{
	name: 'message',

	execute(message, client, prefix, cooldowns, discord)
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

		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime)
		{
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`Veuillez attendre ${timeLeft.toFixed(1)} seconde(s) avant de réutiliser cette commande.`);
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

		try
		{
			command.execute(message, args);
		}
		catch (error)
		{
			console.error(error);
			message.reply('Erreur durant l\'exécution de la commande.');
		}
	}
};