const Discord = require('discord.js');
module.exports = {
    name: 'unmute',
    description: "unmutes a person",
    execute(message, args, bot){
       if(message.member.roles.find(r => r.name === "Admins")){
        let mutedrole = message.guild.roles.find(`name`,"Muted");
        var unmutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
        if (!unmutedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
        unmutedmember.removeRole(mutedrole) //if reason, kick
            .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
        message.reply(`${unmutedmember.user} has been unmuted by ${message.author}!`); // sends a message saying he was kicked
        const embed = new Discord.RichEmbed()
        .addField(`**UNMUTED**`,
        `**User Id: **${unmutedmember.id}
        **Username: **${unmutedmember.user.tag}` , false)
        .setColor(0x6C1503) // remember the 0x
        .setAuthor(
        `${unmutedmember.user.tag}`,
        `${unmutedmember.user.avatarURL}`)
        .setThumbnail(unmutedmember.user.avatarURL)
        .setFooter(`${message.author.tag} (ADMIN)   ||   ${timestamp = new Date()}`, `${message.author.avatarURL}` )
        bot.channels.find("name","modlogs").sendEmbed(embed)
       } else {
           return message.channel.send("You do not have permissions to use this command")
       }
    }
}