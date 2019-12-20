module.exports = {
    name: 'mute',
    description: "mutes a person",
    execute(message, args){
       if(message.member.roles.find(r => r.name === "Admins")){
        let mutedrole = message.guild.roles.find(`name`,"Muted");
        var mutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
        if (!mutedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
        if (mutedmember.hasPermission("ADMINISTRATOR")) return message.reply("I cannot mute this member!") // if memebr is an admin
        var mutereasondelete = 10 + mutedmember.user.id.length //sets the length of the kickreasondelete
        var mutereason = message.content.substring(mutereasondelete).split(" "); // deletes the first letters until it reaches the reason
        var mutereason = mutereason.join(" "); // joins the list kickreason into one line
        if (!mutereason) return message.reply("Please indicate a reason for the mute!") // if no reason
        mutedmember.addRole(mutedrole) //if reason, kick
            .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
        message.reply(`${mutedmember.user} has been muted by ${message.author} because: ${mutereason}`); // sends a message saying he was muted
       } else {
           return message.channel.send("You do not have permissions to use this command")
       }
    }
}