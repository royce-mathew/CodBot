const Discord = require('discord.js');
const CryptoJS = require("crypto-js");
require("crypto-js")
exports.run = async (client, message, args, level) => {
  const hi = args.join(' ');
  var encrypted = CryptoJS.AES.encrypt(hi, "UsaarQnCt");
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`**Encrypted Message**`)
  .setColor(0x6C1503) // remember the 0x
  .setTimestamp(message.createdAt)
  .setDescription(`\`${encrypted}\``)
  .setFooter('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
  //.addField()
  message.channel.send(embed)

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["encrypt"],
  permLevel: "User" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "Encrypt",
  category: "Misc",
  description: "Encrypts the message given",
  usage: "encrypt <message>"
};