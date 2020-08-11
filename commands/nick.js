const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
// Let's first check if we have a member and if we can kick them!
// message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
// We can also support getting the member by ID, which would be args[0]
let member = message.guild.members.cache.find(member => member.nickname === args[0]) || message.guild.members.cache.find(member => member.user.username === args[0]) || message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!member)
  return message.reply("Please mention a valid member of this server");
if(!member.kickable){
  return message.reply("Can't nick user, has perms above 5")
}
// slice(1) removes the first part, which here should be the user mention or ID
// join(' ') takes all the various parts to make it a single string.
var newname = args.slice(1).join(" ")
if(!newname){
  newname = "User "+Math.floor((Math.random() * 1000) + 1)
}

// Nick the member
member.setNickname(newname)
.catch(error => message.reply(`Sorry ${message.author} I couldn't nick user because of : ${error}`));


if (member.setNickname(newname)){
// Send a return embed
 const embed = new Discord.MessageEmbed()
    .setTitle("Nickname")
    .setDescription("User `"+member.user.tag+"` has been nicknamed to `"+newname+"`")
    .setColor(0x6C1503) // remember the 0x
    .setFooter('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
    .setTimestamp(message.createdAt)
  message.channel.send(embed)
  };
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nick"],
  permLevel: "Administrator" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "Nickname",
  category: "Moderation",
  description: "Nicks the user / id that is mentioned.",
  usage: "nick [mention] <new nickname>"
};