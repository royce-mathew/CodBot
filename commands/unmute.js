const Discord = require('discord.js');

exports.run = (message, args, bot) => {
  if(message.member.roles.find(r => r.name === "Admins")){
        let mutedrole = message.guild.roles.find(`name`,"Muted");
        var unmutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
        if (!unmutedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
        unmutedmember.removeRole(mutedrole) //if reason, kick
            .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
 // the normal embed
            const embed = new Discord.RichEmbed()
        .addField(`**UNMUTED**`,
        `**User Id: **${unmutedmember.id}
        **Username: **${unmutedmember.user.tag}` , false)
        .setColor(0x6C1503) // remember the 0x
        .setAuthor(
        `${unmutedmember.user.tag}`,
        `${unmutedmember.user.avatarURL}`)
        .setTitle("Coalition of Devils")
        .setThumbnail(unmutedmember.user.avatarURL)
        .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}`)
        .setTimestamp(message.createdAt)
        message.channel.send(embed)
// the logs
        const embedlogs = new Discord.RichEmbed()
        .addField(`**UNMUTED**`,
        `**User Id: **${unmutedmember.id}
        **Username: **${unmutedmember.user.tag}` , false)
        .setColor(0x6C1503) // remember the 0x
        .setAuthor(
        `${unmutedmember.user.tag}`,
        `${unmutedmember.user.avatarURL}`)
        .setTitle("Coalition of Devils")
        .setThumbnail(unmutedmember.user.avatarURL)
        .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}`)
        .setTimestamp(message.createdAt)
        bot.channels.find(x => x.name === "modlogs").send(embedlogs)
       } else {
           return message.channel.send("You do not have permissions to use this command")
       }
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'Unmute',
  description: 'Unmutes a user.',
  usage: '!unmute [mention]'
};