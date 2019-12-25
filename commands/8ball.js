const Discord = require('discord.js');
const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes – definitely",
    "As I see it",
    "yes",
    "Most Likely",
    "Yes",
    "Signs point to yes"
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