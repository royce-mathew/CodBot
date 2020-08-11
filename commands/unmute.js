const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
    let mutedrole = message.guild.roles.cache.find(r => r.name === "Muted");
    var member = message.guild.members.cache.find(member => member.nickname === args[0]) || message.guild.members.cache.find(member => member.user.username === args[0]) || message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!member) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var

    // Check if user has muted role
    if (member.roles.cache.find(r => r.name === "Muted")){
    
      //  Remove the role from user
      member.roles.remove(mutedrole) //if reason, kick
        .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error

      // Channel embed
    const embed = new Discord.MessageEmbed()
    .setDescription("User `"+member.user.tag+"` has been unmuted.\n\nUserID: `"+member.id+"`")
    .setColor(0x6C1503) // remember the 0x
    .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
    .setTitle("UNMUTED")
    .setThumbnail(member.user.avatarURL())
    .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL()}`)
    .setTimestamp(message.createdAt)
    message.channel.send(embed)


    // the logs
    const embedlogs = new Discord.MessageEmbed()
    .addField(`**User Id:**`,`${member.id}`,false)
    .addField(`**Username:**`, `${member.user.tag}`, false)
    .setColor(0x6C1503) // remember the 0x
    .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
    .setTitle("UNMUTED")
    .setThumbnail(member.user.avatarURL())
    .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL()}`)
    .setTimestamp(message.createdAt)
    client.channels.cache.find(x => x.name === "modlogs").send(embedlogs)
    } else {
      message.channel.send("User already is unmuted")
    };
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["unmute"],
  permLevel: "Administrator" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "Unmute",
  category: "Moderation",
  description: "Unmutes a user.",
  usage: "unmute [mention]"
};