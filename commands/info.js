const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  const embed = new Discord.MessageEmbed()
  .setDescription( "Working on: `Dementia`, future projects are in mind but dementia is still in a WIP state and will remain so unless announced")
  .setColor(0x6C1503) // remember the 0x
  .setTitle(`Coalition Of Devils`)
  .setTimestamp(message.createdAt)
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["info", "inf"],
  permLevel: "User" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "Info",
  category: "Misc",
  description: "Gives info on the things that Masq is working on.",
  usage: "info"
};