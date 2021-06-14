module.exports =
{
	name: 'kick',
	despcription: 'Exclusion d\'un membre',

	execute(message, args)
	{
		if(!args.length || !message.mentions.users.size)
			return message.channel.send(`Veuillez mentionner un membre.`);

		const taggedUser = message.mentions.users.first();
		message.channel.send(`Exclusion de ${taggedUser.username}.`);
		message.mentions.user.first.kick();
	}
}