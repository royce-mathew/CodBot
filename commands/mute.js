const Discord = require('discord.js');
const ms = require(`ms`);
exports.run = (message, args, bot)=> {
               const muterole = message.guild.roles.find(x => x.name ==="Muted");
                const tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
                if(!tomute) return message.reply("Couldn't find user.");
                if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");

                let mutetime = args[1];
                let reason = args[2];
                if(!mutetime){
                  //normal
                const embed = new Discord.RichEmbed()
                .setTitle(`PERMA MUTED`)
                .addField(`**Username:**`,`${tomute.user.tag}`, false)
                .addField(`**User Id:**`,`${tomute.id}`, false)
                .addField(`**Reason**`,`${reason}`, false)
                .setColor(0x6C1503) // remember the 0x
                .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                .setThumbnail(tomute.user.avatarURL)
                .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                .setTimestamp(message.createdAt)
                message.channel.send(embed)
               
               
                //logs
                const embedlogs = new Discord.RichEmbed()
                .setTitle(`PERMA MUTED`)
                .addField(`**Username:**`,`${tomute.user.tag}`, false)
                .addField(`**User Id:**`,`${tomute.id}`, false)
                .addField(`**Reason**`,`${reason}`, false)
                .setColor(0x6C1503) // remember the 0x
                .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                .setThumbnail(tomute.user.avatarURL)
                .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                .setTimestamp(message.createdAt)
                bot.channels.find(x => x.name === "modlogs").send(embedlogs)
                if(!reason) return
                }

                
                const amount = parseInt(args[1]);

	            if (isNaN(amount)) {
		        //normal
                const embed = new Discord.RichEmbed()
                .setTitle(`PERMA MUTED`)
                .addField(`**Username:**`,`${tomute.user.tag}`, false)
                .addField(`**User Id:**`,`${tomute.id}`, false)
                .addField(`**Reason**`,`${args[1]}`, false)
                .setColor(0x6C1503) // remember the 0x
                .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                .setThumbnail(tomute.user.avatarURL)
                .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                .setTimestamp(message.createdAt)
                message.channel.send(embed)
               
               
                //logs
                const embedlogs = new Discord.RichEmbed()
                .setTitle(`PERMA MUTED`)
                .addField(`**Username:**`,`${tomute.user.tag}`, false)
                .addField(`**User Id:**`,`${tomute.id}`, false)
                .addField(`**Reason**`,`${args[1]}`, false)
                .setColor(0x6C1503) // remember the 0x
                .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                .setThumbnail(tomute.user.avatarURL)
                .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                .setTimestamp(message.createdAt)
                bot.channels.find(x => x.name === "modlogs").send(embedlogs)
	            }
            
                if(mutetime,reason){
                    tomute.addRole(muterole.id);
                    //normal
                    const embed = new Discord.RichEmbed()
                    .setTitle(`TEMP MUTED`)
                    .addField(`**Username:**`,`${tomute.user.tag}`, false)
                    .addField(`**User Id:**`,`${tomute.id}`, false)
                    .addField(`**Reason**`,`${reason}`, false)
                    .addField(`**Time**`,`${ms(ms(mutetime))}`, false)
                    .setColor(0x6C1503) // remember the 0x
                    .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                    .setThumbnail(tomute.user.avatarURL)
                    .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                    .setTimestamp(message.createdAt)
                    message.channel.send(embed)
                   
                   
                    //logs
                    const embedlogs = new Discord.RichEmbed()
                    .setTitle(`TEMP MUTED`)
                    .addField(`**Username:**`,`${tomute.user.tag}`, false)
                    .addField(`**User Id:**`,`${tomute.id}`, false)
                    .addField(`**Reason**`,`${reason}`, false)
                    .addField(`**Time**`,`${ms(ms(mutetime))}`, false)
                    .setColor(0x6C1503) // remember the 0x
                    .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                    .setThumbnail(tomute.user.avatarURL)
                    .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                    .setTimestamp(message.createdAt)
                    bot.channels.find(x => x.name ==="modlogs").send(embedlogs)
                }

                if(mutetime){
                    tomute.addRole(muterole.id);
                    //normal
                    const embed = new Discord.RichEmbed()
                    .setTitle(`TEMP MUTED`)
                    .addField(`**Username:**`,`${tomute.user.tag}`, false)
                    .addField(`**User Id:**`,`${tomute.id}`, false)
                    .addField(`**Reason**`,`Undefined`, false)
                    .addField(`**Time**`,`${ms(ms(mutetime))}`, false)
                    .setColor(0x6C1503) // remember the 0x
                    .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                    .setThumbnail(tomute.user.avatarURL)
                    .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                    .setTimestamp(message.createdAt)
                    message.channel.send(embed)
                   
                   
                    //logs
                    const embedlogs = new Discord.RichEmbed()
                    .setTitle(`TEMP MUTED`)
                    .addField(`**Username:**`,`${tomute.user.tag}`, false)
                    .addField(`**User Id:**`,`${tomute.id}`, false)
                    .addField(`**Reason**`,`Undefined`, false)
                    .addField(`**Time**`,`${ms(ms(mutetime))}`, false)
                    .setColor(0x6C1503) // remember the 0x
                    .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                    .setThumbnail(tomute.user.avatarURL)
                    .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                    .setTimestamp(message.createdAt)
                    bot.channels.find(x => x.name ==="modlogs").send(embedlogs)
                }
                  
                
                
                
                  setTimeout(function(){
                  tomute.removeRole(muterole.id);
                  const embedlogs = new Discord.RichEmbed()
                    .setTitle(`UNMUTED`)
                    .addField(`**Username:**`,`${tomute.user.tag}`, false)
                    .addField(`**User Id:**`,`${tomute.id}`, false)
                    .addField(`**Reason**`,`Mute expired`, false)
                    .setColor(0x6C1503) // remember the 0x
                    .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                    .setThumbnail(tomute.user.avatarURL)
                    .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
                    .setTimestamp(message.createdAt)
                    bot.channels.find(x => x.name ==="modlogs").send(embedlogs)
                }, ms(mutetime));
                
} 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mute"],
  permLevel: 3
};

exports.help = {
  name: 'Mute',
  description: 'Mutes a mentioned user',
  usage: '!mute [mention]'
};