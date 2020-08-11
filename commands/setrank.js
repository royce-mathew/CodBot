const Discord = require('discord.js');

exports.run = async (client, message, args, level, groupId, maximumRank, roblox) => {
return
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["setrank", "sr"],
  permLevel: "Administrator" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "Setrank",
  category: "Roblox",
  description: "Ranks a person with their roblox username",
  usage: "setrank <Roblox username> <rank>"
};