module.exports =
{
	name: 'admincommands',
	description: 'Affichage des commandes liées à l\'administration',

	execute(message)
	{
		const discord = require('discord.js');

		const embed = new discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Liste des commandes d\'administration')
		.setThumbnail(message.guild.iconURL())
		.setDescription('Gestion administrative')
		.addField('!ban', 'bannit le membre mentionné')
		.addField('!commands', 'affiche la liste des commandes')
		.addField('!delmes', 'supprime une quantité choisie de messages')
		.addField('!kick', 'exclut le membre sélectionné')
		.addField('!memberinfo', 'affiche les informations du membre mentionné')
		.addField('!serverinfo', 'affiche les informations sur le serveur')
		.addField('!setcannedwords', 'ajoute les mots choisis au filtre de mots')
		.addField('!setcommandcooldown', 'définit le temps d\'attente entre chaque envoi de commande')
		.addField('!setmessagecooldown', 'définit le temps d\'attente entre chaque envoi de message')
	
		message.channel.send(embed);
	}
};