/* Module ready

   Initialise le bot
   Initialise les paramètres messageCooldown, commandCooldown et bannedWords
*/

module.exports =
{
	name: 'ready',
	once: true,
	messageCooldown: 0,
	commandCooldown: 0,
	bannedWords: [],

	execute(client)
	{
		const fs = require('fs');

		//Lecture du fichier 'cooldowns.ini' et récupération des valeurs des cooldowns

		fs.readFile('settings/cooldowns.ini', 'utf8' , (err, content) =>
		{
			if (err)
			{
			 	console.error(err);
			    return;
			}

			let fileContent = content.split(/\s|\n/);

			this.messageCooldown = fileContent[2];	//Affectation de la valeur de messageCooldown
			this.commandCooldown = fileContent[5];	//Affectation de la valeur de commandCooldown
		})

		//Lecture du fichier 'banned_words.ini' et récupération des mots bannis

		fs.readFile('settings/banned_words.ini', 'utf8' , (err, content) =>
		{
			if (err)
			{
			 	console.error(err);
			    return;
			}

			let fileContent = content.split(/\s|\n/);

			for(let i = 0; i < fileContent.length; ++i)	//Récupération des mots bannis
			{
				if(fileContent[i] != "")
					this.bannedWords.push(fileContent[i]);
			}
		})

		console.log(`Connecté en tant que ${client.user.tag}.`);
	}
};