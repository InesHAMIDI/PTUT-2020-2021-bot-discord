module.exports =
{
	name: 'ready',
	once: true,
	messageCooldown: 0,
	commandCooldown: 0,

	execute(client)
	{
		let fs = require('fs');

		fs.readFile('settings/settings.ini', 'utf8' , (err, content) =>
		{
			if (err)
			{
			 	console.error(err);
			    return;
			}

			let words = content.split(/\s|\n/);

			messageCooldown = words[2];
			commandCooldown = words[5];

			module.exports.messageCooldown = messageCooldown;
			module.exports.commandCooldown = commandCooldown;
		})

		console.log(`Connecté en tant que ${client.user.tag}.`);
	}
};