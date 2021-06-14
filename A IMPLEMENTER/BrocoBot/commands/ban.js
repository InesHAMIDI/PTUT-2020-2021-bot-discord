module.exports =
{
	name: 'ban',
	despcription: 'Banissement d\'un membre',

	execute(message, args)
	{
		if(!args.length || !message.mentions.users.size)
			return message.channel.send(`Veuillez mentionner un membre.`);

		const taggedUser = message.mentions.users.first();
		message.channel.send(`Banissement de ${taggedUser.username}.`);
		message.mentions.user.first.ban();
	}
}