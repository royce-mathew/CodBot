const Discord = require('discord.js');
exports.run = (bot, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = bot.channels.find(x => x.name === "modlogs")
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the warning.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
    const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Action:', 'Warning')
  .addField('User:', `${user.username}#${user.discriminator}`)
  .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`);
  bot.channels.find(x => x.name === "modlogs").send(embed)
  const embedlogs = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Action:', 'Warning')
  .addField('User:', `${user.username}#${user.discriminator}`)
  .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`);
  bot.channels.find(x => x.name === "modlogs").send(embedlogs)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["warn"],
  permLevel: 0
};

exports.help = {
  name: 'Warn',
  description: 'Issues a warning to the mentioned user.',
  usage: '!warn [mention]'
};