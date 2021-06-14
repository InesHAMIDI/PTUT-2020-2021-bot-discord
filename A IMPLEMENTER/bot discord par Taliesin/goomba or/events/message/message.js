const { Collection } = require("discord.js");
const prefix = "$";

module.exports = async (client, message) => {
    if(!message.content.startsWith(prefix)  || message.author.bot) return;

    const settings = await client.getGoldcoinneur(message.author.id);

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const user = message.mentions.users.first();

    // vérification Aliases
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
    if (!command) return;
    
    if (command.help.permissions && !message.member.hasPermission('ADMINISTRATOR')) {
        return message.channel.send(new Discord.MessageEmbed()
            .setTitle(`${message.author}, la commande est réservée aux admins`)
            .setColor('#ff0000'))
        console.log("erreur utilisateur non-admin")
    }
    
    if (command.help.args && !args.length) {
        let noArgsReply = `Il nous faut des arguments pour cette commande, ${message.author}!`
        
        if (command.help.usage) noArgsReply += `\nVoici comment utiliser la commande: \`${prefix}${command.help.name} ${command.help.usage}\``
        
        return message.channel.send(noArgsReply)
    }

    // vérification cooldowns
    if (!client.cooldowns.has(command.help.name)) {
        client.cooldowns.set(command.help.name, new Collection());
    }

    const timeNow = Date.now();
    const tStamps = client.cooldowns.get(command.help.name);
    const cdAmount = (command.help.cooldown || 5) * 1000;

    if (tStamps.has(message.author.id)) {
        const cdExprirationTime = tStamps.get(message.author.id) + cdAmount;

        if (timeNow < cdExprirationTime) {
            timeLeft = (cdExprirationTime - timeNow) / 1000;
            return message.reply(`merci d'attendre ${timeLeft.toFixed(0)} seconde(s) avant ré-utiliser la commande \`${command.help.name}\`.`);
        }
    }

    tStamps.set(message.author.id, timeNow);
    setTimeout(() => tStamps.delete(message.author.id), cdAmount)

    command.run(client, message, args, settings);
}
