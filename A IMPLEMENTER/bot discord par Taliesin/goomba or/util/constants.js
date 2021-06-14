const MESSAGES = {
    COMMANDS: {
        CASINO: {
            MACHINE: {
                name: "machine",
                aliases: ["machine"],
                description: "",
                cooldown: 10,
                usage: "",
                args: false,
                permissions: false,
            },

            ROULETTE: {
                name: "roulette",
                aliases: ["roulette"],
                description: "",
                cooldown: 10,
                usage: "<gain miser> <action>",
                args: true,
                permissions: false,
            },
        },
        
        GOLDCOIN: {
            ADDGOLDCOIN: {
                name: "addgoldcoin",
                aliases: ["addgoldcoin"],
                description: "ajoute du Goldcoin à quelqu'un",
                cooldown: 10,
                usage: "<id_utilisateur> <nombre>",
                args: true,
                permissions: true,
            },

            REMOVEGOLDCOIN: {
                name: "removegoldcoin",
                aliases: ["removegoldcoin"],
                description: "enleve du Goldcoin à quelqu'un",
                cooldown: 10,
                usage: "<id_utilisateur> <nombre>",
                args: true,
                permissions: true,
            },

            MONEY: {
                name: "money",
                aliases: ["money"],
                description: "affiche le nombre de Goldcoin de quelqu'un",
                cooldown: 10,
                usage: "<pseudo>",
                args: false,
                permissions: false,
            },

            
        },

        MISC: {
            HELP: {
                name: "help",
                aliases: ["help", "SOS"],
                description: "help",
                cooldown: 10,
                usage: "",
                args: false,
                permissions: false,
            },

            PING: {
                name: "ping",
                aliases: ["ping"],
                description: "renvoie pong!",
                cooldown: 10,
                usage: "",
                args: false,
                permissions: false,
            },

            TEST: {
                name: "test",
                aliases: ["test"],
                description: "fichier test",
                cooldown: 10,
                usage: "",
                args: false,
                permissions: false,
            },

            EMOJI: {
                name: "emoji",
                aliases: ["emoji"],
                description: "renvoie un emoji sur notre message",
                cooldown: 0.1,
                usage: "",
                args: false,
                permissions: false,
            },
        },

        ROLES: {
            GOLDCOINNEURROLE: {
                name: "goldcoinneurrole",
                aliases: ["goldcoinneurrole"],
                description: "ajoute le role de goldcoinneur",
                cooldown: 10,
                usage: "",
                args: false,
                permissions: false,
            },

            MEMBRE: {
                name: "membrerole",
                aliases: ["membrerole"],
                description: "ajoute le role de membre",
                cooldown: 10,
                usage: "",
                args: false,
                permissions: false,
            },
        },
    }
}

exports.MESSAGES = MESSAGES;