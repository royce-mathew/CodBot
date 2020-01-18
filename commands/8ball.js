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

exports.run = (message, args, bot) => {
  const randomIndex = Math.floor(Math.random() * responses.length);
        const embed = new Discord.RichEmbed()
        .setDescription( `${responses[randomIndex]}, ${message.author}.`)
        .setColor(0x6C1503) // remember the 0x
        .setTitle("Coalition of Devils")
        .setTimestamp(message.createdAt)
        message.channel.send(embed)
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'The 8 ball tells all, and knows all.',
  usage: '!8ball <question>'
};