module.exports =
{
	name: 'ping',
	description: 'Appel de test',

	execute(message)
	{
		message.channel.send('Pong.');
	}
};