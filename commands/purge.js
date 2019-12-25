const Discord = require('discord.js');
module.exports = {
    name: 'purge',
    description: "purges the chat",
    execute(message, bot){
        if(!message.member.roles.some(r=>["Admins"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
      
      const user = message.mentions.users.first();
      // Parse Amount
      const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
      if (!amount) return message.reply('Must specify an amount to delete!');
      if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
      // Fetch 100 messages (will be filtered and lowered up to max amount requested)
      message.channel.fetchMessages({
       limit: 100,
      }).then((messages) => {
       if (user) {
       const filterBy = user ? user.id : Client.user.id;
       messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
       }
       message.channel.bulkDelete(amount);
       embed = new Discord.RichEmbed()
    
    .addField(`**Purged**`,
    `**Purge Started By: **${message.author.tag}
     **Amount Purged: **${amount}` , false)
    .setColor(0x6C1503) // remember the 0x
    .setTitle("Coalition of Devils")
    .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
    .setTimestamp(message.createdAt)
    message.channel.send(embed)
      });
    
    




    //logs
    embedlogs = new Discord.RichEmbed()
    .addField(`**Purged**`,
    `**Purge Started By: **${message.author.tag}
    **Amount Purged: **${amount}` , false)
    .setColor(0x6C1503) // remember the 0x
    .setTitle("Coalition of Devils")
    .setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL}` )
    .setTimestamp(message.createdAt)
    bot.channels.find("name","modlogs").send(embedlogs)
    }
}
