const Discord = require('discord.js');

exports.run = async (client, message, args, level, groupId, maximumRank, roblox) => {
  return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["demote"],
  permLevel: "Administrator" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "Demote",
  category: "Roblox",
  description: "Demotes a user.",
  usage: "demote <Roblox Username>"
};