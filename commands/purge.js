const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  const user = message.guild.members.cache.find(member => member.nickname === args[0]) || message.guild.members.cache.find(member => member.user.username === args[0]) || message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  const amount = !!parseInt(args[0]) ? parseInt(args[0]) : parseInt(args[1])
  if (!amount) return message.reply('Must specify an amount to delete!');
  if(user){
    message.channel.messages.fetch({
      limit: 100,
     }).then((messages) => {
      if (user) {
      const filterBy = user ? user.id : Client.user.id;
      messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
      }
      message.channel.bulkDelete(messages).catch(error => console.log(error.stack));

      const embed = new Discord.MessageEmbed()   
        .setDescription("Purged `"+amount+"` messages from `"+user.user.tag+"`.")
        .setColor(0x6C1503) // remember the 0x
        .setTitle("Purged")
        .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
        .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL()}` )
        .setTimestamp(message.createdAt)
        message.channel.send(embed)
        
        
        //logs
        const embedlogs = new Discord.MessageEmbed()
        .setDescription(`**Purged**`)
        .addField(`**Amount Purged:**`, amount , false)
        .addField("**Purged User**",user.user.tag,false)
        .addField(`**Channel Purged:**`, `${message.channel.name}`, false)
        .setColor(0x6C1503) // remember the 0x
        .setTitle("Coalition of Devils")
        .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
        .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL()}` )
        .setTimestamp(message.createdAt)
        message.guild.channels.cache.find(x => x.name === "modlogs").send(embedlogs)
     });
  } else {
      let messagecount = parseInt(args.join(' '));
      message.channel.messages.fetch({
        limit: messagecount+1
      }).then(messages => message.channel.bulkDelete(messages));
      
        const embed = new Discord.MessageEmbed()   
        .setDescription("Purged `"+messagecount+"` messages")
        .setColor(0x6C1503) // remember the 0x
        .setTitle("Purged")
        .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
        .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL()}` )
        .setTimestamp(message.createdAt)
        message.channel.send(embed)
        
        
        //logs
        const embedlogs = new Discord.MessageEmbed()
        .setDescription(`**Purged**`)
        .addField(`**Amount Purged:**`, `${messagecount}` , false)
        .addField(`**Channel Purged:**`, `${message.channel.name}`, false)
        .setColor(0x6C1503) // remember the 0x
        .setTitle("Coalition of Devils")
        .setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
        .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL()}` )
        .setTimestamp(message.createdAt)
        message.guild.channels.cache.find(x => x.name === "modlogs").send(embedlogs)
  };
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["purge"],
  permLevel: "Administrator" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "Purge",
  category: "Moderation",
  description: "Purges X amount of messages from a given channel.",
  usage: "purge <number>"
};