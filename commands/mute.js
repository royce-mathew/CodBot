const Discord = require('discord.js');
const ms = require(`ms`);

exports.run = async (client, message, args, level) => {
  let muterole = message.guild.roles.cache.find(x => x.name === "Muted");
  const tomute = message.guild.members.cache.find(member => member.nickname === args[0]) || message.guild.members.cache.find(member => member.user.username === args[0]) || message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");

  let mutetime = args[1]

  if(!muterole){
    try {
      muterole = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "DARK_GREY",
          hoist: false,
          position: 16,
          permissions: []
        },
        reason: `Role for muted individuals - Automatically created by ${client.user.username}`
      })

      var channelsList = message.guild.channels.cache

      for(const channel of channelsList){
        if (channel.type == "text"){
          channel.updateOverwrite(muterole, {
            SEND_MESSAGES: false
          })
        }
      }

      channelsList.each((channel) => {

          var channelType = channel.type

          if (channelType == 'text') {
              channel.updateOverwrite(muterole, {
                  SEND_MESSAGES: false
              })
          } else if (channelType == 'voice') {
              channel.updateOverwrite(muterole, {
                  SPEAK: false
              });
          };
      });
  } catch(e){
    console.log(e.stack);
    };
  };

  if(tomute.roles.cache.has(muterole)) return message.channel.send("User is already muted.")
  
  // Add the muted role
  tomute.roles.add(muterole.id);

  // If args[1] is not provided then perma mute
  if(!mutetime){

  // Send the embed
  const embed = new Discord.MessageEmbed()
  .setTitle(`PERMA MUTED`)
  .setDescription("User `"+tomute.user.tag+"` has been muted.\n\nUserID: `"+tomute.id+"`")
  .setColor(0x6C1503) // remember the 0x
  .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
  .setThumbnail(tomute.user.avatarURL())
  .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL()}` )
  .setTimestamp(message.createdAt)
  message.channel.send(embed)
 
 
  //Logger Embed
  const embedlogs = new Discord.MessageEmbed()
  .setTitle(`PERMA MUTED`)
  .addField(`**Username:**`,`${tomute.user.tag}`, false)
  .addField(`**User Id:**`,`${tomute.id}`, false)
  .setColor(0x6C1503) // remember the 0x
  .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
  .setThumbnail(tomute.user.avatarURL())
  .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL()}` )
  .setTimestamp(message.createdAt)
  message.guild.channels.cache.find(x => x.name === "modlogs").send(embedlogs)
  } else {

      // Temp muter
      const embed = new Discord.MessageEmbed()
      .setTitle(`TEMP MUTED`)
      .setDescription("User `"+tomute.user.tag+"` has been muted.\n\nUserID: `"+tomute.id+"`\n\nTime: `"+ms(ms(mutetime))+"`")
      .setColor(0x6C1503) // remember the 0x
      .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
      .setThumbnail(tomute.user.avatarURL())
      .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL()}` )
      .setTimestamp(message.createdAt)
      message.channel.send(embed)
     
     
      //logs
      const embedlogs = new Discord.MessageEmbed()
      .setTitle(`TEMP MUTED`)
      .addField(`**Username:**`,`${tomute.user.tag}`, false)
      .addField(`**User Id:**`,`${tomute.id}`, false)
      .addField(`**Reason**`,`Undefined`, false)
      .addField(`**Time**`,`${ms(ms(mutetime))}`, false)
      .setColor(0x6C1503) // remember the 0x
      .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
      .setThumbnail(tomute.user.avatarURL())
      .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL()}` )
      .setTimestamp(message.createdAt)
      message.guild.channels.cache.find(x => x.name ==="modlogs").send(embedlogs)


      // Wait
      setTimeout(function(){
        // Remove the role
        tomute.roles.remove(muterole.id);

        // Send Embed
        const embedlogs = new Discord.MessageEmbed()
          .setTitle(`UNMUTED`)
          .addField(`**Username:**`,`${tomute.user.tag}`, false)
          .addField(`**User Id:**`,`${tomute.id}`, false)
          .addField(`**Reason**`,`Mute expired`, false)
          .setColor(0x6C1503) // remember the 0x
          .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
          .setThumbnail(tomute.user.avatarURL())
          .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL()}` )
          .setTimestamp(message.createdAt)
          // Find the modlogs channel
          message.guild.channels.cache.find(x => x.name ==="modlogs").send(embedlogs)
          // Wait for this amount of time
      }, ms(mutetime));
  };  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mute"],
  permLevel: "Administrator" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "Mute",
  category: "Moderation",
  description: "Mutes a mentioned user",
  usage: "mute [mention]"
};