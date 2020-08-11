const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  // 1: Find by nickname, 2: Find by username, 3: find by mentions, 4: Find by ID
  let member = message.guild.members.cache.find(member => member.nickname === args[0]) || message.guild.members.cache.find(member => member.user.username === args[0]) || message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  
  if (member){
    const embed = new Discord.MessageEmbed()
    .addField('**Name:**', "`"+member.user.username+"`", true)
    .addField('**Nick Name:**', "`"+member.nickname+"`", true)
    .addField('**Tag:**', "`"+member.user.tag+"`", true)
    .addField("**Discrim:**","`#"+member.user.discriminator+"`", true)
    .addField("**ID:**", "`"+member.user.id+"`", true)
    .addField("**Status:**", "`"+member.presence.status+"`", true)
    .addField("**Last Message Id:**", "`"+member.lastMessage+"`", true)
    .addField("**Nitro / Boost Date:**", "`"+member.premiumSince+"`", true)
    .addField("**Account Created:**", "`"+member.user.createdAt+"`", true)
    .addField("**Account Created {Snowflake}:**", "`"+member.user.createdTimestamp+"`", true)
    .addField("**Joined Guild:**", "`"+member.joinedAt+"`", true)
    .addField("**Joined Guild {Snowflake}:**", "`"+member.joinedTimestamp+"`", true)
    .setColor(0x6C1503) // remember the 0x
    .setThumbnail(member.user.avatarURL())
    .setTitle("User Info")
    .setFooter('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
    .setTimestamp(message.createdAt)
    message.channel.send(embed);
  }
  else {
  const embed = new Discord.MessageEmbed()

  .addField('**Name:**', "`"+message.author.username+"`", true)
  .addField('**Nick Name:**', "`"+message.author.nickname+"`", true)
  .addField('**Tag:**', "`"+message.author.tag+"`", true)
  .addField("**Discrim:**","`#"+message.author.discriminator+"`", true)
  .addField("**ID:**", "`"+message.author.id+"`", true)
  .addField("**Status:**", "`"+message.author.presence.status+"`", true)
  .addField("**Last Message Id:**", "`"+message.author.lastMessage+"`", true)
  .addField("**Nitro / Boost Date:**", "`"+message.author.premiumSince+"`", true)
  .addField("**Account Created:**", "`"+message.author.createdAt+"`", true)
  .addField("**Account Created {Snowflake}:**", "`"+message.author.createdTimestamp+"`", true)
  .addField("**Joined Guild:**", "`"+message.author.joinedAt+"`", true)
  .addField("**Joined Guild {Snowflake}:**", "`"+message.author.joinedTimestamp+"`", true)
  .setColor(0x6C1503) // remember the 0x
  .setThumbnail(message.author.avatarURL())
  .setTitle("User Info")
  .setFooter('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
  .setTimestamp(message.createdAt)
  message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["whoami", "Whoami", "WhoAmi", "WhoamI", "userinfo", "Userinfo", "userInfo"],
  permLevel: "User" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "UserInfo",
  category: "Misc",
  description: "Gives info about the user.",
  usage: "userinfo"
};