module.exports =
{
	name: 'ping',
	description: 'Appel de test',

	execute(message, args)
	{
		message.channel.send('Pong.');
	}
};