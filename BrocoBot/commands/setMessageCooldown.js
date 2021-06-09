module.exports =
{
	name: 'setmessagecooldown',
	description: 'Modification du temps d\'attente entre chaque message',

	execute(message, args)
	{
		let fs = require('fs');
		let ready = require(`../events/ready.js`);

		let newMessageCooldown = parseInt(args[0]);

		if(isNaN(newMessageCooldown) || newMessageCooldown <= 0 || newMessageCooldown > 10000)
			return message.reply('Vous pouvez choisir entre 0 et 10000 millisecondes.');

		let words = 'MessageCooldown' + ' = ' + newMessageCooldown.toString() + '\n' +
					'CommandCooldown' + ' = ' + ready.commandCooldown.toString();

		fs.writeFile('settings/settings.ini', words, (err, content) =>
		{
			if (err)
			{
				console.error(err);
				return;
			}
		});
		
		ready.messageCooldown = newMessageCooldown;

		return message.reply('Nouveau cooldown de message : ' + ready.messageCooldown + ' millisecondes');
	}
};