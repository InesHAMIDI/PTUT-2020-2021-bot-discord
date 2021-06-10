module.exports =
{
	name: 'commands',
	description: 'Affichage du menu des commandes',

	execute(message)
	{
		const discord = require('discord.js');

		const embed = new discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Liste des commandes')
		.setThumbnail(message.guild.iconURL())
		.setDescription('Entrez l\'une des commandes suivantes')
		.addField('!adminCommands', 'affiche les commandes d\'administration')
		.addField('!commands', 'affiche la liste des commandes')
		.setFooter('Les majuscules ne sont pas prises en compte')
	
		message.channel.send(embed);
	}
};