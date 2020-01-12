const Discord = require('discord.js');
module.exports = {
    name: 'promote',
    description: "promotes a user",
    execute(message, args, bot, groupId, maximumRank, roblox){
        if(!message.member.roles.some(r=>["Admins"].includes(r.name)) )
      return message.reply("Sorry, you do not have permissions to use this command!");
      var username = args[0]
        var rankIdentifier = Number(args[1]) ? Number(args[1]) : args[1];
        if (!rankIdentifier) return message.channel.send("Please enter a rank");
        if (username){
            message.channel.send(`Checking ROBLOX for ${username}`)
            roblox.getIdFromUsername(username)
            .then(function(id){
                roblox.getRankInGroup(groupId, id)
                .then(function(rank){
                    if(maximumRank <= rank){
                        embed = new Discord.RichEmbed()
                            .setTitle(`Error`)
                            .addField(`**Unable to promote**`,`${username}`, false)
                            .addField(`**Reason:**`,`Input rank is higher than the max rank`, false)
                            .setColor(0x6C1503) // remember the 0x
                            .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                            .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                            .setTimestamp(message.createdAt)
                            message.channel.send(embed)
                    } else {
                        roblox.setRank(groupId, id, rankIdentifier+1)
                        .then(function(newRole){
                            embed = new Discord.RichEmbed()
                            .setTitle('PROMOTED')
                            .addField(`**Username:**`,`${username}`,false)
                            .addField(`**User ID:**`,`${id}`,false)
                            .addField(`**Promoted to:**`,`${newRole.name}` , false)
                            .setColor(0x6C1503) // remember the 0x
                            .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                            .setThumbnail(`https://www.roblox.com/headshot-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
                            .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                            .setTimestamp(message.createdAt)
                            message.channel.send(embed)

                            //logs
                            embedlogs = new Discord.RichEmbed()
                            .setTitle('PROMOTED')
                            .addField(`**Username:**`,`${username}`,false)
                            .addField(`**User ID:**`,`${id}`,false)
                            .addField(`**Promoted to:**`,`${newRole.name}` , false)
                            .setColor(0x6C1503) // remember the 0x
                            .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                            .setThumbnail(`https://www.roblox.com/headshot-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
                            .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                            .setTimestamp(message.createdAt)
                            bot.channels.find(x => x.name === "rm-303").send(embedlogs)
                            
                        }).catch(function(err){
                            console.error(err)
                            embed = new Discord.RichEmbed()
                            .setTitle(`Error`)
                            .addField(`**Unable to promote**`,`${username}`, false)
                            .addField(`**Reason:**`,`Invalid role number`, false)
                            .setColor(0x6C1503) // remember the 0x
                            .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                            .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                            .setTimestamp(message.createdAt)
                            message.channel.send(embed)
                        });
                    }
                }).catch(function(err){
                            embed = new Discord.RichEmbed()
                            .setTitle(`Error`)
                            .addField(`**Unable to promote**`,`${username}`, false)
                            .addField(`**Reason:**`,`User is not inside the group`, false)
                            .setColor(0x6C1503) // remember the 0x
                            .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                            .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                            .setTimestamp(message.createdAt)
                            message.channel.send(embed)
                });
            }).catch(function(err){
                            embed = new Discord.RichEmbed()
                            .setTitle(`Error`)
                            .addField(`**Unable to promote **`,`${username}`, false)
                            .addField(`**Reason:**`,`User not found on the ROBLOX website`, false)
                            .setColor(0x6C1503) // remember the 0x
                            .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                            .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                            .setTimestamp(message.createdAt)
                            message.channel.send(embed)
          });
      } else {
                            embed = new Discord.RichEmbed()
                            .setTitle(`Error`)
                            .addField(`**Unable to promote**`,`${username}`, false)
                            .addField(`**Reason:**`,`Please enter a username from the ROBLOX website`, false)
                            .setColor(0x6C1503) // remember the 0x
                            .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                            .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                            .setTimestamp(message.createdAt)
                            message.channel.send(embed) 
      }
    }
}

