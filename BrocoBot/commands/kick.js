module.exports = {
	name: 'kick',
	despcription: 'Exclusion d\'un membre',
	execute(message, args) {
		if(!args.length) {
			return message.channel.send(`Vous n'avez pas fourni d'arguments, ${message.author}!`);
		}

		if(!message.mentions.users.size)
			return message.reply('Vous devez mentionner un utilisateur pour pouvoir l\'exclure.');
		const taggedUser = message.mentions.users.first();

		message.channel.send(`Vous voulez exclure ${taggedUser.username}`);
	},
}