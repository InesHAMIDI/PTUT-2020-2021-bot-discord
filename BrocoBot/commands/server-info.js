module.exports =
{
	name: 'server-info',
	despcription: 'Informations sur le serveur',

	execute(message, args)
	{
		message.channel.send(`Nom du serveur: ${message.guild.name}\nNombre de membres: ${message.guild.memberCount}`);
	}
}