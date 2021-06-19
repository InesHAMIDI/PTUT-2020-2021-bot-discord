const MESSAGES = {
    COMMANDS: {
        TAMAGOTCHI: {
            ADOPT: {
                name: "adopt",
                aliases: ["adopt"],
                description: "this is the adopt command",
                cooldown: 5,
                usage: "<espece> <name>",
                args: true,
                permissions: false,
            },
            
            FOOD: {
                name: "food",
                aliases: ["food"],
                description: "this is the food command",
                cooldown: 7200,
                usage: "<food>",
                args: true,
                permissions: false,
            },

            CUDDLE: {
                name: "cuddle",
                aliases: ["cuddle"],
                description: "this is the cuddle command",
                cooldown: 0,
                usage: "",
                args: false,
                permissions: false,
            },
            TRAINING: {
                name: "training",
                aliases: ["training"],
                description: "this is the training command",
                cooldown: 0,
                usage: "",
                args: false,
                permissions: false,
            },
            DESCRIPTION: {
                name: "description",
                aliases: ["desciption", "desc"],
                description: "this is the description command",
                cooldown: 0,
                usage: "",
                args: false,
                permissions: false,
            },
        },

        MISC: {

            PING: {
                name: "ping",
                aliases: ["ping"],
                description: "this is the ping command!",
                cooldown: 2,
                usage: "",
                args: false,
                permissions: false,
            },
        },
    }
}

exports.MESSAGES = MESSAGES;