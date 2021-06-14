module.exports =
{
	name: 'delmes',
	description: 'Suppression des derniers messages',

	execute(message, args)
	{
		const amount = parseInt(args[0]) + 1;

		if(isNaN(amount) || amount <= 1 || amount > 100)
			return message.reply('Vous pouvez supprimer entre 1 et 99 messages.');

		message.channel.bulkDelete(amount, true).catch(err =>
		{
			console.error(err);
			message.channel.send('Erreur durant la suppression des messages.');
		});
	}
};