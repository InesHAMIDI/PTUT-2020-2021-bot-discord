const Discord = require('discord.js');
const { workerData } = require('worker_threads');
const bot = new Discord.Client();
const token = require("./token.json");
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

bot.on("ready", async () =>{
    console.log("le bot est allumé");
    bot.user.setStatus("dnd");
    setTimeout(() => {
         bot.user.setActivity("Développer mon bot");
    }, 100)

});

bot.on("message", (msg) =>  {
    if (GameStarted === false ) {
        if(msg.content.startsWith("!pendu") === true) {
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
        if (index === 0 || index === wordsArr.length -1) {
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
    const rand = getRandomInt(words.length -1);
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
    .map((mysteryLetter,index) => {
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



bot.login(token.token)