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

exports.run = async (client, message, args, level) => {
    const randomIndex = Math.floor(Math.random() * responses.length);
        const embed = new Discord.MessageEmbed()
        .setTitle('8ball')
        .setDescription( `${responses[randomIndex]}, ${message.author}.`)
        .setColor(0x6C1503) // remember the 0x
        .setTimestamp(message.createdAt)
        .setFooter('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
        message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["8b"],
  permLevel: "User" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "8ball",
  category: "Misc",
  description: "The 8ball knows all, and it tells all.",
  usage: "8ball <question>"
};