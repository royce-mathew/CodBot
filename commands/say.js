const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  arslt = args.join(" ")
  
  const embed = new Discord.MessageEmbed()
  .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
  .setDescription( `${arslt}`)
  .setColor(0x6C1503)
  .setTimestamp(message.createdAt)
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["say"],
  permLevel: "Moderator" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "Say",
  category: "Misc",
  description: "Make the bot say things",
  usage: "say <message>"
};