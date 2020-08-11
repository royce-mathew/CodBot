const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  let mchannel = message.mentions.channels.first()
  
  if(mchannel){
    let topic = args[1]
    arslt = args.slice(2).join(" ")
    const embed = new Discord.MessageEmbed()
        //.setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
        .setTitle(topic)
        .setDescription( `${arslt}`)
        .setColor(0x6C1503)
        .setTimestamp(message.createdAt)
        .setFooter(`${message.author.tag}`, `${message.author.avatarURL()}` )
        mchannel.send(embed)
  } else {
    let topic = args[0]
    arslt = args.slice(1).join(" ")
    const embed = new Discord.MessageEmbed()
    //.setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
    .setTitle(topic)
    .setDescription( `${arslt}`)
    .setColor(0x6C1503)
    .setTimestamp(message.createdAt)
    .setFooter(`${message.author.tag}`, `${message.author.avatarURL()}` )
    message.channel.send(embed)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["announce", "ann"],
  permLevel: "Administrator" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "Announce",
  category: "Moderation",
  description: "Announces the message in a channel",
  usage: "announce [channel (OPTIONAL) ] [Topic] <announcement>"
};