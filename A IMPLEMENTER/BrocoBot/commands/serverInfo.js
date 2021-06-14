module.exports =
{
	name: 'serverinfo',
	despcription: 'Affichage des informations sur le serveur',

	execute(message)
	{
		const discord = require('discord.js');
		
		let month = "";
		switch(message.guild.createdAt.getMonth())
		{
		case 0: month = "Janvier"; break;
		case 1: month = "Février"; break;
		case 2: month = "Mars"; break;
		case 3: month = "Avril"; break;
		case 4: month = "Mai"; break;
		case 5: month = "Juin"; break;
		case 6: month = "Juillet"; break;
		case 7: month = "Août"; break;
		case 8: month = "Septembre"; break;
		case 9: month = "Octobre"; break;
		case 10: month = "Novembre"; break;
		case 11: month = "Décembre"; break;
		default: month = "Erreur"; break;
		}

		const embed = new discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle(`${message.guild.name}`)
		.setThumbnail(message.guild.iconURL())
		.addField('Membres :', `${message.guild.memberCount}`, true)
		.setFooter(`Créé le ${message.guild.createdAt.getDate()} ${month} ${message.guild.createdAt.getFullYear()}`)
	
	
		message.channel.send(embed);
	}
}