module.exports =
{
	name: 'petcommands',
	description: 'Affichage des commandes liées aux animaux de compagnie',

	execute(message)
	{
		const discord = require('discord.js');

		const embed = new discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Liste des commandes d\'animaux de compagnie')
		.setThumbnail(message.guild.iconURL())
		.setDescription('Animaux de compagnie')
		.addField('!adopter', 'adopte un animal de compagnie')
		.addField('!food', 'nourrit l\'animal de compagnie')
		.addField('!cuddle', 'caresse l\'animal de compagnie')
		.addField('!description', 'affiche les informations sur l\'animal de compagnie')
	
		message.channel.send(embed);
	}
};