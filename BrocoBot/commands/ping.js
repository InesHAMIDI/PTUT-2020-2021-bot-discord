<<<<<<< HEAD
module.exports = {
	name: 'ping',
	description: 'Appel de test',
	cooldown: 5,
	execute(message, args) {
		message.channel.send('Pong.');
	},
=======
module.exports = {
	name: 'ping',
	description: 'Appel de test',
	execute(message, args) {
		message.channel.send('Pong.');
	},
>>>>>>> 737e16fe29159e4cb19b4a0cfae1e725351bcd10
};