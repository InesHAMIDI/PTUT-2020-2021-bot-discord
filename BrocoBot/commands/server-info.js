module.exports = {
	name: 'server-info',
	despcription: 'Informations sur le serveur',
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
}