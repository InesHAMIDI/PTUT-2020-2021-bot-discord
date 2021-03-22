module.exports =
{
	name: 'member-info',
	description: 'Affichage des informations du membre mentionné',

	execute(message, args, discord)
	{
		const user = message.mentions.users.first() || message.author;

		let month = "";
		switch(message.member.joinedAt.getMonth())
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

		const exampleEmbed = new discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle(`${message.author.username}`)
		.setThumbnail(user.avatarURL())
		.addField('Statut :', `${user.presence.status}`, true)
		.addField('Profil :', 'Some value here', true)
		.setFooter(`Membre depuis le ${message.member.joinedAt.getDate()} ${month} ${message.member.joinedAt.getFullYear()}`)
	
	
		message.channel.send(exampleEmbed);
	}
};