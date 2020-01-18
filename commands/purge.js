const Discord = require('discord.js');


exports.run = function(bot, message, args) {
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
  
    const embed = new Discord.RichEmbed()    
    .addField(`**Purged**`,
    `**Purge Started By: **${message.author.tag}
     **Amount Purged: **${messagecount}` , false)
    .setColor(0x6C1503) // remember the 0x
    .setTitle("Coalition of Devils")
    .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
    .setTimestamp(message.createdAt)
    message.channel.send(embed)
    
    
    //logs
    const embedlogs = new Discord.RichEmbed()
    .addField(`**Purged**`,
    `**Purge Started By: **${message.author.tag}
    **Amount Purged: **${messagecount}` , false)
    .setColor(0x6C1503) // remember the 0x
    .setTitle("Coalition of Devils")
    .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
    .setTimestamp(message.createdAt)
    bot.channels.find(x => x.name === "modlogs").send(embedlogs)
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'Purge',
  description: 'Purges X amount of messages from a given channel.',
  usage: '!purge <number>'
};