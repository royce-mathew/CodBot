const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const Discord = require('discord.js');


exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  
  const embed = new Discord.MessageEmbed()   
    .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
    .addField( `**• Mem Usage**`, `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}\``)
    .addField( `**• Uptime**`, `\`${duration}\``)
    .addField( `**• Users**`, `\`${client.users.cache.size.toLocaleString()}\``)
    .addField( `**• Servers**`, `\`${client.guilds.cache.size.toLocaleString()}\``)
    .addField( `**• Channels**`, `\`${client.channels.cache.size.toLocaleString()}\``)
    .addField( `**• Discord.js**`, `\`v${version}\``)
    .addField( `**•  Node**`, `\`${process.version}\``)
    .setColor(0x6C1503) // remember the 0x
    .setTitle("**Coalition of Devils**")
    .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL()}` )
    .setTimestamp(message.createdAt)
    message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["stats"],
  permLevel: "User"
};

exports.help = {
  name: "Stats",
  category: "Misc",
  description: "Gives some useful bot statistics",
  usage: "stats"
};