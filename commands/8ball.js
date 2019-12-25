const Discord = require('discord.js');
const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "I doubt it",
    "Yes – definitely",
    "As I see it",
    "No",
    "Most Likely",
    "Yes",
    "Signs point to yes",
    "Signs point to no"
];


// ----- Command JS File -----
module.exports = {
    name: '8ball',
    description: "random 8ball answer",
    execute(message, args, bot){
        const randomIndex = Math.floor(Math.random() * responses.length);
        const embed = new Discord.RichEmbed()
        .setDescription( `${responses[randomIndex]}, ${message.author}.`)
        .setColor(0x6C1503) // remember the 0x
        .setTitle("Coalition of Devils")
        .setTimestamp(message.createdAt)
        message.channel.send(embed)
    }
}