const Discord = require('discord.js');
const responses = [
    "ultra small :(",
    "very very very small",
    "too small",
    "very small",
    "Small",
    "Ultra Big",
    "Moderate",
    "No",
    "Very Big",
    "Big",
    "Too big for this bot"
];

exports.run = async (client, message, args, level) => {
  // Mentioned User
  var mentioned = message.guild.members.cache.find(member => member.nickname === args[0]) || message.guild.members.cache.find(member => member.user.username === args[0]) || message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  
  // Message Embed
  const embed = new Discord.MessageEmbed()
  const randomIndex = Math.floor(Math.random() * responses.length);
  if (mentioned){
    embed.setDescription("User <@"+mentioned.user.id+"> has `"+responses[randomIndex]+"` PP")
    embed.setColor(0x6C1503) // remember the 0x
    embed.setTitle("PP machine")
    embed.setTimestamp(message.createdAt)
    embed.setFooter('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
    }
  else {
    embed.setDescription("You have `"+responses[randomIndex]+"` PP.")
    embed.setColor(0x6C1503) // remember the 0x
    embed.setTitle("PP machine")
    embed.setTimestamp(message.createdAt)
    embed.setFooter('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
    }
    message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["penis", "ppsize"],
  permLevel: 0 // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "pp",
  category: "Misc",
  description: "Tells the pp size of a user.",
  usage: "pp [mention]"
};