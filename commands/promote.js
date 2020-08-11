const Discord = require('discord.js');
exports.run = async (client, message, args, level, groupId, maximumRank, roblox) => {
    return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["promote"],
  permLevel: "Administrator" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "Promote",
  category: "Roblox",
  description: "Promotes a user in the Roblox group.",
  usage: "promote <Roblox Username>"
};