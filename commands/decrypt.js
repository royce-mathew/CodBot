const Discord = require('discord.js');
const CryptoJS = require("crypto-js");
require("crypto-js")
exports.run = async (client, message, args, level) => {
  const hi = args.join(' ');
  var decrypted = CryptoJS.AES.decrypt(hi, "UsaarQnCt");
  var joe = decrypted.toString(CryptoJS.enc.Utf8); 

  const embed = new Discord.MessageEmbed()
  .setTitle(`**Decrypted Message**`)
  .setColor(0x6C1503) // remember the 0x
  .setTimestamp(message.createdAt)
  .setDescription(`\`${joe}\``)
  .setFooter('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
  //.addField(`Decrypted Message: `, `\`${joe}\``)  
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["decrypt"],
  permLevel: "User" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "Decrypt",
  category: "Misc",
  description: "Encrypts the message given",
  usage: "decrypt <message>"
};