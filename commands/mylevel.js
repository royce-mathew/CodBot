const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  const friendly = client.config.permLevels.find(l => l.level === level).name;
  const embed = new Discord.MessageEmbed()
      .setTitle(`Permission Level`)
      .addField(`**Permission level:**`,`${friendly}`, false)
      .addField(`**Permission No:**`,`${level}`, false)
      .setColor(0x6C1503) // remember the 0x
      .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL()}` )
      .setTimestamp(message.createdAt)
      message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mylevel"],
  permLevel: "User"
};

exports.help = {
  name: "Mylevel",
  category: "Misc",
  description: "Tells you your permission level for the current message location.",
  usage: "mylevel"
};