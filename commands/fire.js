const Discord = require('discord.js');

exports.run = async (client, message, args, level, groupId, maximumRank, roblox) => {
  return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fire", "resetrank"],
  permLevel: "Administrator" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "Fire",
  category: "Roblox",
  description: "Resets a user's rank to the lowest rank in the group",
  usage: "fire <Roblox Username>"
};