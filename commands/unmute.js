module.exports = {
    name: 'unmute',
    description: "unmutes a person",
    execute(message, args){
       if(message.member.roles.find(r => r.name === "Admins")){
        let mutedrole = message.guild.roles.find(`name`,"Muted");
        var unmutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
        if (!unmutedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
        unmutedmember.removeRole(mutedrole) //if reason, kick
            .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
        message.reply(`${unmutedmember.user} has been unmuted by ${message.author}!`); // sends a message saying he was kicked
       } else {
           return message.channel.send("You do not have permissions to use this command")
       }
    }
}