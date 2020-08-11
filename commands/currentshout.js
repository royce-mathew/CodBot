const Discord = require('discord.js');
exports.run = async (client, message, args, level, groupId, maximumRank, roblox) => {
    return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["currentshout", "currentShout", "Currentshout"],
  permLevel: "User" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "CurrentShout",
  category: "Roblox",
  description: "Tells users what the current shout is",
  usage: "currentshout"
};