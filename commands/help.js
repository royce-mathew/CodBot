/*
The HELP command is used to display every command's name and description
to the user, so that he may see what commands are available. The help
command is also filtered by level, so if a user does not have access to
a command, it is not shown to them. If a command name is given with the
help command, its extended help is shown.
*/
const Discord = require('discord.js');

exports.run = (client, message, args, level, prefix) => {
  
if(!args[0]) {
  const myCommands = message.guild ? client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level) : client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level &&  cmd.conf.guildOnly !== true);

  // Here we have to get the command names only, and we use that array to get the longest name.
  // This make the help commands "aligned" in the output.
  const commandNames = myCommands.keyArray();
  const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  const sorted = myCommands.array().sort((p, c) => p.help.category > c.help.category ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );


  const embed = new Discord.MessageEmbed()
  .setTitle(`**Help**`)
  .setColor(0x6C1503) // remember the 0x
  .setTimestamp(message.createdAt)
  .setThumbnail(client.user.displayAvatarURL())
  .setDescription(`These are the avaliable commands for ${message.guild.me.displayName}\nThe client prefix is: \`${message.settings.prefix}\``)
  .setFooter('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")

  sorted.forEach(c => {
      try {
          embed.addField(`❯ ${c.help.name} :`,`\`${"".repeat(longest - c.help.name.length)}${c.help.description}\``, true)
      } catch(e) {                   
          console.log(e)
      }
  })
  return message.channel.send(embed)
} else {
  const embedE = new Discord.MessageEmbed()
  .setTitle(`**Help**`)
  .setColor(0x6C1503) // remember the 0x
  .setTimestamp(message.createdAt)
  .setThumbnail(client.user.displayAvatarURL())
  .setFooter('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")


 // let command = args[0].toLowerCase()
  let command = client.commands.get(client.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
  if (command) { // it was client.commands.has(command)
    //command = client.commands.get(command);
    if (level < client.levelCache[command.conf.permLevel]) return;
    embedE.setDescription(`**Command:** \`${command.help.name}\``)
    embedE.addField(`**Description:**`, `${command.help.description}`,false)
    embedE.addField(`**Usage:**`, `\`${message.settings.prefix}${command.help.usage}\``, false)
    embedE.addField(`**Aliases:**`, `${command.conf.aliases.join(", ")}`, false)
    return message.channel.send(embedE)
  }
  if(!command){
    const embedError = new Discord.MessageEmbed()
  .setTitle(`**Invalid Command**`)
  .setColor(0x6C1503) // remember the 0x
  .setTimestamp(message.createdAt)
  .setThumbnail(client.user.displayAvatarURL())
  .setDescription(`Do \`${message.settings.prefix}help\` for the list of the commands.`)
  .setFooter('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
  message.channel.send(embedError)
  }
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h", "halp", "help"],
  permLevel: "User"
};

exports.help = {
  name: "Help",
  category: "System",
  description: "Displays all the available commands for your permission level.",
  usage: "help [command]"
};