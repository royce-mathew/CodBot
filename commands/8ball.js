var eightball = [ // sets the answers to an eightball
    "yeeah",
    "100 percent",
    "no...",
    "maybe?",
    "probably.",
    "I don't think so.",
    "never!",
    "you can try...",
    "up to you!",
    "your mom",
]

// ----- Command JS File -----
module.exports = {
    name: '8ball',
    description: "random 8 ball message",
    execute(message, args){
        if (args[1] != null) message.reply(eightball[Math.floor(Math.random() * eightball.length).toString(16)]); // if args[1], post random answer
        else message.channel.send("bruh whats your question :niggaangry: (Correct usage: *8ball [question])"); // if not, error
    }
}