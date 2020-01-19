const Discord = require('discord.js');

exports.run = (message, args, bot) => {
  const embed = new Discord.RichEmbed()
        .setTitle(message.author.username)
        .addField('Group:', message.guild.name, true)
        .addField('Username: ', message.author.username, false)
        .setColor(0x6C1503) // remember the 0x
        .setThumbnail(message.author.avatarURL)
        .setTitle("Coalition of Devils")
        .setFooter('Coalition of Devils')
        .setTimestamp(message.createdAt)
        message.channel.send(embed);
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["whoami", "Whoami", "WhoAmi", "WhoamI"],
  permLevel: 0
};

exports.help = {
  name: 'WhoAmI',
  description: 'Gives a bit of information about the user.',
  usage: '!whoami'
};