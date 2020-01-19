const Discord = require('discord.js');

exports.run = (message, args, bot) => {
  console.log('Yes')
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["default"],
  permLevel: 0
};

exports.help = {
  name: 'Default',
  description: 'testing command used for testing purposes',
  usage: '!default'
};