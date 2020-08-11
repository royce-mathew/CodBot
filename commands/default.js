const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  console.log('Default command')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["default"],
  permLevel: "Bot Admin" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "Default",
  category: "System",
  description: "Default command used for testing purposes",
  usage: "default"
};