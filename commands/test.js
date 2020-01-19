const Discord = require('discord.js');

exports.run = (message, args, bot) => {
  if(message.member.roles.find(r => r.name === "Admins")){
           message.reply('You are an admin')
       } else {
           return message.channel.send("You do not have permissions to use this command")
       }
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["test"],
  permLevel: 0
};

exports.help = {
  name: 'Test',
  description: 'testing command, tells you whether you are an admin or not',
  usage: '!test'
};