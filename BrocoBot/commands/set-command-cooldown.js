module.exports =
{
	name: 'set-command-cooldown',
	description: 'Modification du temps d\'attente entre chaque commande',

	execute(message, args)
	{
		let fs = require('fs');
		let ready = require(`../events/ready.js`);

		let newCommandCooldown = parseInt(args[0]);

		if(isNaN(newCommandCooldown) || newCommandCooldown <= 0 || newCommandCooldown > 10000)
			return message.reply('Vous pouvez choisir entre 0 et 10000 millisecondes.');

		let words = 'MessageCooldown' + ' = ' + ready.messageCooldown.toString() + '\n' +
					'CommandCooldown' + ' = ' + newCommandCooldown.toString();

		fs.writeFile('settings/settings.ini', words , (err, content) =>
		{
			if (err)
			{
				console.error(err);
				return;
			}
		});
		
		ready.commandCooldown = newCommandCooldown;

		return message.reply('Nouveau cooldown de commande : ' + ready.commandCooldown + ' millisecondes');
	}
};