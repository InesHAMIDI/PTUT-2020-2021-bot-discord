module.exports =
{
	name: 'setbannedwords',
	description: 'Modification de la liste des mots du filtre',

	execute(message, args)
	{
		let fs = require('fs');
		let ready = require(`../events/ready.js`);

        let bannedWords = message.content.slice().trim().split(' ');
        bannedWords.shift();

		fs.writeFile('settings/banned_words.ini', bannedWords.join('\n'), (err) =>
		{
			if (err)
			{
				console.error(err);
				return;
			}
		});
		
		ready.bannedWords = bannedWords;

		return message.reply('Nouveau mots bannis : ' + args[0] + ' ' + args[1] + ' ' + args[2] + "...");
	}
};