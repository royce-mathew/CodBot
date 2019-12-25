const Discord = require('discord.js');
const responses = [
    "8D",
    "8=D",
    "8==D",
    "8===D",
    "8====D",
    "8=====D",
    "8======D",
    "8=======D",
    "8========D",
    "8=========D",
    "8==========D"
];


// ----- Command JS File -----
module.exports = {
    name: 'pp',
    description: "random pp",
    execute(message, args, bot){
        const randomIndex = Math.floor(Math.random() * responses.length);
        var mentioned = message.mentions.members.first();
        if (!mentioned) return message.reply("@ someone to use this command")
        const embed = new Discord.RichEmbed()
        .addField( `${mentioned.user.username}'s pp size:`, `${responses[randomIndex]}`, false)
        .setColor(0x6C1503) // remember the 0x
        .setTitle("Coalition of Devils")
        .setTimestamp(message.createdAt)
        message.channel.send(embed)
    }
}