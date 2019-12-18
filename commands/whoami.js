// ----- Command JS File -----
const Discord = require('discord.js');
module.exports = {
    name: 'whoami', //remember to make the name the thing or it will break
    description: "embed",
    execute(message, args){
        const embed = new Discord.RichEmbed()
        .setTitle(message.author.username)
        .addField('Group:', message.guild.name, true)
        .addField('Username: ', message.author.username, false)
        .setColor(0x6C1503) // remember the 0x
        .setThumbnail(message.author.avatarURL)
        .setFooter('To get more cool content like this make sure to join the Coalition of Devils roblox group or i will literally make you pregnant :pensive:')
        message.channel.sendEmbed(embed);
    }
}