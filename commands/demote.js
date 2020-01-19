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
						                embed = new Discord.RichEmbed()
                            .setTitle(`Error`)
                            .addField(`**Unable to demote*`,`${username}`, false)
                            .addField(`**Reason:**`,`Input rank is higher than the max rank`, false)
                            .setColor(0x6C1503) // remember the 0x
                            .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                            .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                            .setTimestamp(message.createdAt)
                            message.channel.send(embed)
					} else {
						roblox.demote(groupId, id)
						.then(function(newRole){
                            embed = new Discord.RichEmbed()
                            .setTitle('DEMOTED')
                            .addField(`**Username:**`,`${username}`,false)
                            .addField(`**User ID:**`,`${id}`,false)
                            .addField(`**DEMOTED to:**`,`${newRole.Name}` , false)
                            .setColor(0x6C1503) // remember the 0x
                            .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                            .setThumbnail(`https://www.roblox.com/headshot-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
                            .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                            .setTimestamp(message.createdAt)
                            message.channel.send(embed)

                            //logs
                            embedlogs = new Discord.RichEmbed()
                            .setTitle('DEMOTED')
                            .addField(`**Username:**`,`${username}`,false)
                            .addField(`**User ID:**`,`${id}`,false)
                            .addField(`**DEMOTED to:**`,`${newRole.Name}` , false)
                            .setColor(0x6C1503) // remember the 0x
                            .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                            .setThumbnail(`https://www.roblox.com/headshot-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
                            .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                            .setTimestamp(message.createdAt)
                            bot.channels.find(x => x.name === "rm-303").send(embedlogs)
						}).catch(function(err){
							embed = new Discord.RichEmbed()
                            .setTitle(`Error`)
                            .addField(`**Unable to demote**`,`${username}`, false)
                            .addField(`**Reason:**`,`Unknown Error`, false)
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
                            .addField(`**Unable to demote**`,`${username}`, false)
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
                            .addField(`**Unable to demote**`,`${username}`, false)
                            .addField(`**Reason:**`,`User is not on ROBLOX`, false)
                            .setColor(0x6C1503) // remember the 0x
                            .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                            .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                            .setTimestamp(message.createdAt)
                            message.channel.send(embed)
			});
    	} else {
    		                    embed = new Discord.RichEmbed()
                            .setTitle(`Error`)
                            .addField(`**Unable to demote**`,`${username}`, false)
                            .addField(`**Reason:**`,`Please enter a username to demote`, false)
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
  aliases: ["demote"],
  permLevel: 3
};

exports.help = {
  name: 'Demote',
  description: 'Demotes a user.',
  usage: '!demote <Roblox Username>'
};

        




