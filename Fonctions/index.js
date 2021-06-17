const { Client, Collection, Discord } = require('discord.js'); //typique #include<>
const { client, bot } = new Client(); //prérequis pour  créer le bot
const token = require('../Configs/token.json'); //le token est stocké à part pour simplifier
const prefix = require('../Configs/config.json'); //on stocke le préfix des commandes dans une variable pour rendre les fonctions plus pratiques à implémenter
const { fs, fstat } = require('fs'); //requis pour lire les fichiers de commande
const quiz = require("../BD/images.json")
const { workerData } = require('worker_threads');
const { loadCommands, loadEvents } = require("../util/loader");

//Yvan 
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.commands = new Discord.Collection(); //Ajout des commandes au client

//commandes d'Yvan
for (const file of commandFiles) //Lecture des commandes
{
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

for (const file of eventFiles) //Lecture des évènements
{
    const event = require(`./events/${file}`);

    if (event.once)
        client.once(event.name, (...args) => event.execute(...args, client));
    else
        client.on(event.name, (...args) => event.execute(...args, client));
}

//commandes d'Angèle
//fonction qui envoie une image aléatoire et analyse la réponse
bot.on('message', message => {
    //commande pour déclencher la fonction
    if (message.content == '!image') {

        //générer un nombre aléatoire
        const nombre = quiz[Math.floor(Math.random() * quiz.length)];
        //on filtre la réponse pour savoir si elle correspond à celles de la liste 
        const filter = response => {
            return nombre.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };

        //le bot envoie l'image
        const image = { files: [`./images/${nombre.picture}`] };
        const indice = (`${nombre.indice}`);
        //message.channel.send(indice);
        message.channel.send(image).then(() => {
            //le bot attends les réponses des utilisateurs
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
                .then(collected => {
                    //si la réponse est bonne 
                    message.channel.send(`${collected.first().author} Bravo ! C'était bien *${nombre.solution}*.`);
                })
                .catch(collected => {
                    //si le temps est dépassé
                    message.channel.send(`Personne n'a trouvé... C'était *${nombre.solution}*. On retente ?`);
                });
        });
    }
});

//commandes de Taliesin
["commands", "cooldowns"].forEach(x => Tclient[x] = new Collection());
loadCommands(Tclient);
loadEvents(Tclient);


//Commandes de Kalid

//Jeu du pendu
let GameStarted = false;
const words = ["COMPUTER", "PROGRAMMER", "ANALYST", "KEYBOARD"];
let Word = {
    solution: null,
    mystery: null,
    displayMystery: null,
};

let lettersSaid = [];
const defaulttries = 10;
let tries = defaulttries;

bot.on("ready", async() => {
    console.log("le bot est allumé");
    bot.user.setStatus("dnd");
    setTimeout(() => {
        bot.user.setActivity("Développer mon bot");
    }, 100)

});

bot.on("message", (msg) => {
    if (GameStarted === false) {
        if (msg.content.startsWith("!pendu") === true) {
            msg.channel.send("Le jeu démarera dans 3 secondes!");
            Word = getRandomWord();
            setTimeout(() => {
                msg.channel.send(`le mot à deviner est :${Word.mystery}`);

            }, 3000);
            GameStarted = true;

        }
        return;
    }
    // if GameStarted is true

    // check for a word
    if (msg.content.length > 1 && msg.content.split(" ").length === 1) {
        if (Word.solution === msg.content.toUpperCase()) {
            msg.channel.send(`Vous avez gagné ! Mot trouvé par : ${msg.author.username}`);
            restartgame();

        }
    }
    // check for a letter
    if (msg.content.length === 1) {
        const letter = msg.content.toUpperCase();

        // Checking the letter
        if (LetterInWord(letter) === true) {
            msg.channel.send(`${Word.mystery}`);
            if (Word.mystery.match(/\?/) === null) {
                msg.channel.send(`Vous avez gagné ! Mot trouvé par : ${msg.author.username}`);
                restartgame();
            }
        } else {
            //error

            if (lettersSaid.includes(letter) === false) {
                lettersSaid.push(letter);
                tries--;
            }

            msg.channel.send(`Cette lettre "${letter}" n'est pas dans le mot . Tentatives restantes : ${tries}/ ${defaulttries}`);

            if (tries === 0) {
                //lost game
                msg.channel.send(`Vous avez perdus ! le mot était : ${Word.solution}`);
                GameStarted = false;
            }
        }
    }

});

const getMysteryFromSolution = (word) => {
    const wordsArr = word.split('');
    const mystery = wordsArr.map((letter, index) => {
        if (index === 0 || index === wordsArr.length - 1) {
            return letter;
        }
        return "?";
    });

    return mystery.join("");
};
const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const getRandomWord = () => {
    const rand = getRandomInt(words.length - 1);
    console.log("rand", rand);
    const solution = words[rand];

    const mystery = getMysteryFromSolution(solution); // P????????R
    console.log("mystery", mystery);
    return {
        solution,
        mystery,
    };

};

const LetterInWord = (letter) => {
    const Presented = Word.solution.match(new RegExp(letter, "i")) !== null;
    if (Presented === false) {
        return Presented;
    }

    const mysteryArr = Word.mystery.split("");
    const solutionArr = Word.solution.split("");
    Word.mystery = mysteryArr
        .map((mysteryLetter, index) => {
            const solutionLetter = solutionArr[index];

            if (mysteryLetter !== "?") {
                return mysteryLetter;
            }
            if (solutionLetter === letter) {
                return solutionLetter;
            }
            return "?";
        })
        .join("");

    return Presented;
};

const restartgame = () => {
    GameStarted = false;
    tries = defaulttries;
    lettersSaid = [];
};

//jeu qui devine un nombre
var number_random = 0;
var party_launch = false;

bot.on('message', function(message) {
    if (message.content == "!number start") {
        message.reply("Partie lancé")
        party_launch = true;
        number_random = Math.floor(Math.random() * (1000 - 0) + 0)
        console.log(number_random);

    }
    if (party_launch && message.content != null) {
        if (Number.isInteger(parseInt(message.content))) {

            if (message.content > number_random) {
                message.reply("Plus petit")
            } else if (message.content < number_random) {

                message.reply("Plus grand")

            } else {
                message.reply("Vous avez gagné la partie")
                party_launch = false;
            }
        }
    }

    if (message.content == "!number stop") {
        if (party_launch == true) {
            message.reply("Stopped Part !")
            party_launch = false;

        } else {
            message.reply("Pas de partie en cours")
        }
    }
});






//Fonctions de bases du bot (Ines)
client.on("ready", async() => {
    console.log("bot allume"); //un message dans la console pour être sûr que tout marche
    bot.user.setStatus("online");
    bot.user.setActivity("*help", { type: "LISTENING" }); //sans type : "joue à", ici : "écoute ..."
}); //Quand le bot est ready, on lance la fonction async qui affiche le statut du bot "en train de jouer..." et en online

client.on('guildMemberAdd', member => {
    if (member.user.bot) return; //on ne considère pas les autres bots comme des utilisateurs
    bot.channels.cache.get("807173186373419038").send(`Bienvenue ${member}`);
    console.log(channel);
    if (!channel) return;
}); //fonction donnée comme exemple dans discord.js API

client.on('message', msg => {
    if (msg.member.user.bot || msg.channel.type === 'dm') return; //on n'accepte pas de communiquer entre bots, ni en message privé
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
}); //une fonction simple pour vérifier si le bot fonctionne, vient de l'api discord



client.login(token.token); //lance le bot