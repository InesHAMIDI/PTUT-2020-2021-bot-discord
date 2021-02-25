module.exports = {
	name: 'avatar',
	description: 'Affichage de l\'avatar',
	execute(message, args) {
		if(!message.mentions.users.size)
			return message.channel.send(`Votre avatar: <${message.author.displayAvatarURL({ format: 'png', dynamic: true})}>`);

		const avatarList = message.mentions.users.map(user => {
			return `Avatar de ${user.username}: <${user.displayAvatarURL({ format: 'png', dynamic: true })}>`;
		})
	},
};