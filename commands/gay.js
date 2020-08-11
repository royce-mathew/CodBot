const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  // Mentioned User
  var mentioned = message.guild.members.cache.find(member => member.nickname === args[0]) || message.guild.members.cache.find(member => member.user.username === args[0]) || message.mentions.members.first() || message.guild.members.cache.get(args[0]);
   
  // if a user is mentioned
  if (mentioned){
  const embed = new Discord.MessageEmbed()
  .setDescription( "User <@"+mentioned.user.id+ "> has `"+Math.floor(Math.random() * 101)+"%` gay")
  .setColor(0x6C1503) // remember the 0x
  .setTitle("Gay machine")
  .setTimestamp(message.createdAt)
  
  message.channel.send(embed)
  // If a user is not mentioned
    } else {
    const embed = new Discord.MessageEmbed()
    .setDescription("You have `"+Math.floor(Math.random() * 101)+"%` gay.")
    .setColor(0x6C1503) // remember the 0x
    .setTitle("Gay machine")
    .setTimestamp(message.createdAt)
    .setFooter('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
    message.channel.send(embed)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gay", "Howgay", "howgay"],
  permLevel: 0 // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "Gay",
  category: "Misc",
  description: "Tells how gay the user is",
  usage: "gay [mention]"
};