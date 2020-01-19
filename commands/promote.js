const Discord = require('discord.js');

exports.run = (message, args, bot, groupId, maximumRank, roblox) => {
          if(!message.member.roles.some(r=>["Admins"].includes(r.name)) )
      return message.reply("Sorry, you do not have permissions to use this command!");
      var username = args[0]
        if (username){
            message.channel.send(`Checking ROBLOX for ${username}`)
            roblox.getIdFromUsername(username)
            .then(function(id){
                roblox.getRankInGroup(groupId, id)
                .then(function(rank){  
                  if(maximumRank <= rank){
                        message.channel.send(`${id} is rank ${rank} and not promotable.`);
                    } else {
                        roblox.promote(groupId, id)
                        .then(function(roles){
                           const embed = new Discord.RichEmbed()
                            .setTitle('PROMOTED')
                            .addField(`**Username:**`,`${username}`,false)
                            .addField(`**User ID:**`,`${id}`,false)
                            .addField(`**Promoted to:**`,`${roles.newRole.Name}` , false)
                            .addField(`**Older Role:**`,`${roles.oldRole.Name}`, false)
                            .setColor(0x6C1503) // remember the 0x
                            .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                            .setThumbnail(`https://www.roblox.com/headshot-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
                            .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                            .setTimestamp(message.createdAt)
                            message.channel.send(embed)

                            //logs
                           const embedlogs = new Discord.RichEmbed()
                            .setTitle('PROMOTED')
                            .addField(`**Username:**`,`${username}`,false)
                            .addField(`**User ID:**`,`${id}`,false)
                            .addField(`**Promoted to:**`,`${roles.newRole.Name}` , false)
                            .addField(`**Older Role:**`,`${roles.oldRole.Name}`, false)
                            .setColor(0x6C1503) // remember the 0x
                            .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                            .setThumbnail(`https://www.roblox.com/headshot-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
                            .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                            .setTimestamp(message.createdAt)
                            bot.channels.find(x => x.name === "rm-303").send(embedlogs)
                            
                        }).catch(function(err){
                            console.error(err);
                            const embed = new Discord.RichEmbed()
                            .setTitle(`Error`)
                            .addField(`**Unable to promote**`,`${username}`, false)
                            .addField(`**Reason:**`,`Failed to change rank`, false)
                            .setColor(0x6C1503) // remember the 0x
                            .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                            .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                            .setTimestamp(message.createdAt)
                            message.channel.send(embed) 
                        });
                    }
                }).catch(function(err){
                    const embed = new Discord.RichEmbed()
                            .setTitle(`Error`)
                            .addField(`**Unable to promote**`,`${username}`, false)
                            .addField(`**Reason:**`,`User is not inside group`, false)
                            .setColor(0x6C1503) // remember the 0x
                            .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                            .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                            .setTimestamp(message.createdAt)
                            message.channel.send(embed) 
                });
            }).catch(function(err){
                const embed = new Discord.RichEmbed()
                            .setTitle(`Error`)
                            .addField(`**Unable to promote**`,`${username}`, false)
                            .addField(`**Reason:**`,`User is not on the ROBLOX website.`, false)
                            .setColor(0x6C1503) // remember the 0x
                            .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                            .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                            .setTimestamp(message.createdAt)
                            message.channel.send(embed) 
          });
      } else {
                      const embed = new Discord.RichEmbed()
                            .setTitle(`Error`)
                            .addField(`**Unable to promote**`,`${username}`, false)
                            .addField(`**Reason:**`,`Please enter a username`, false)
                            .setColor(0x6C1503) // remember the 0x
                            .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                            .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                            .setTimestamp(message.createdAt)
                            message.channel.send(embed) 
      }
      return;
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["promote"],
  permLevel: 3
};

exports.help = {
  name: 'Promote',
  description: 'Promotes a user in the Roblox group.',
  usage: '!promote <Roblox Username>'
};