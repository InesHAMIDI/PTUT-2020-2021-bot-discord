const MESSAGES = {
    COMMANDS: {
        MINI_JEUX: {
            AP_MINI_JEUX: {
                name: "ap_mini_jeux",
                aliases: ["ap_mini_jeux", "ap-mini-jeux"], 
                description: "fichier application des mini-jeux",
                cooldown: 10,
                usage: "<true/false>",
                args: true,
                permissions: true,
            },

            JEUXNIM: {
                name: "jeux-nim",
                aliases: ["jeux-nim", "jeux_nim"],
                description: "jeux du Nim",
                cooldown: 10,
                usage: "",
                args: false,
                permissions: false,
            },

            SHIFUMI: {
                name: "shifumi",
                aliases: ['shifumi'],
                description: "jeux de pierre/papier/ciseaux",
                cooldown: 10,
                usage: '<pierre/papier/ciseaux>',
                args: true,
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
    }
}

exports.MESSAGES = MESSAGES;