module.exports =
{
	name: 'gameCommands',
	description: 'Affichage des commandes liées aux jeux',

	execute(message)
	{
		const discord = require('discord.js');

		const embed = new discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Liste des commandes de jeux')
		.setThumbnail(message.guild.iconURL())
		.setDescription('Jeux')
		.addField('!shifumi', 'lance un jeu de shifumi')
		.addField('!machine', 'lance une machine de casino')
		.addField('!roulette', 'lance une roulette de casino')
		.addField('!image', 'lance un quiz sur une image')
		.addField('!number start', 'essayez de trouver le nombre mystère, !number stop pour arrêter la partie')
		.addField('!pendu', 'lance un jeu du pendu')
	
		message.channel.send(embed);
	}
};