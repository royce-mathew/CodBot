const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
// Let's first check if we have a member and if we can kick them!
// message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
// We can also support getting the member by ID, which would be args[0]
let member = message.guild.members.cache.find(member => member.nickname === args[0]) || message.guild.members.cache.find(member => member.user.username === args[0]) || message.mentions.members.first() || message.guild.members.cache.get(args[0]);
// if a member isnt mentioned
if(!member) return message.reply("Please mention a valid member of this server");

// If member is kickable then
if(!member.kickable || member.roles.cache.some(role => role.name === 'Admins'))  return message.reply("Can't kick a member with a bigger pp than your's");

// slice(1) removes the first part, which here should be the user mention or ID
// join(' ') takes all the various parts to make it a single string.
var reason = args.slice(1).join(" ")

if(!reason){
  reason = "No reason provided"
}

// Now, time for a swift kick in the nuts!
member.kick(reason)
.catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));

//normal 
 const embed = new Discord.MessageEmbed()
    .setTitle(`KICKED`)
    .setDescription("User `"+member.user.tag+"` with user id `"+member.user.id+"` has been kicked for reason`"+reason+"`")
    .setColor(0x6C1503) // remember the 0x
    .setFooter('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
    .setTimestamp(message.createdAt)
  message.channel.send(embed)




//logs
embedlogs = new Discord.MessageEmbed()
.setDescription(`**KICKED**`)   
.addField(`User Id:`,"`"+member.user.id+"`",false)
.addField(`User Tag:`,member.user.tag,false)
.addField(`Reason:`,"`"+reason+"`",false)
.setColor(0x6C1503) // remember the 0x
.setAuthor('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
.setThumbnail(member.user.avatarURL())
.setFooter(`${message.author.tag} (ADMIN)`, `${message.author.avatarURL()}` )
.setTimestamp(message.createdAt)
    client.channels.cache.find(x => x.name === "modlogs").send(embedlogs)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kick"],
  permLevel: "Administrator" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "Kick",
  category: "Moderation",
  description: "Kicks the user that is mentioned.",
  usage: "kick [mention] <reason>"
};