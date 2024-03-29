const Discord = require('discord.js');

exports.run = (message, args, bot) => {
          if(!message.member.roles.some(r=>["Admins"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    var kickreasondelete = 11 + member.user.id.length //sets the length of the kickreasondelete
    var reason = message.content.substring(kickreasondelete).split(" ");
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    //normal 
     const embed = new Discord.RichEmbed()
      .addField(`**KICKED**`,
      `**User Id: **${member.user.id}
      **Username: **${member.user.tag}
      **Description: **${reason}` , false)
      .setColor(0x6C1503) // remember the 0x
      .setAuthor(
      `${member.user.tag}`,
      `${member.user.avatarURL}`)
      .setThumbnail(member.user.avatarURL)
      .setTitle("Coalition of Devils")
      .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
      .setTimestamp(message.createdAt)
      message.channel.send(embed)




    //logs
    embedlogs = new Discord.RichEmbed()
        .addField(`**KICKED**`,
        `**User Id: **${member.user.id}
        **Username: **${member.user.tag}
        **Description: **${reason}` , false)
        .setColor(0x6C1503) // remember the 0x
        .setAuthor(
        `${member.user.tag}`,
        `${member.user.avatarURL}`)
        .setTitle("Coalition of Devils")
        .setThumbnail(member.user.avatarURL)
        .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
        .setTimestamp(message.createdAt)
        bot.channels.find(x => x.name === "modlogs").send(embedlogs)
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kick"],
  permLevel: 3
};

exports.help = {
  name: 'Kick',
  description: 'Kicks the user that is mentioned.',
  usage: '!kick [mention] <reason>'
};