<<<<<<< HEAD
module.exports = {
	name: 'server-info',
	despcription: 'Informations sur le serveur',
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
=======
module.exports = {
	name: 'server-info',
	despcription: 'Informations sur le serveur',
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
>>>>>>> 737e16fe29159e4cb19b4a0cfae1e725351bcd10
}