const Discord = require('discord.js');
exports.run = async (client, message, args, level, groupId, maximumRank, roblox) => {
    return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["shout"],
  permLevel: "Administrator" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "Shout",
  category: "Roblox",
  description: "Shouts a message in the roblox group",
  usage: "shout <Message>"
};

