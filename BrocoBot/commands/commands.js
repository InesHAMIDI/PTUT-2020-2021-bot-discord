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
		.addField('!admincommands', 'affiche les commandes d\'administration')
		.addField('!gamecommands', 'affiche les commandes de jeux')
		.addField('!petcommands', 'affiche les commandes d\'animaux de compagnie')
		.addField('!commands', 'affiche la liste des commandes')
	
		message.channel.send(embed);
	}
};