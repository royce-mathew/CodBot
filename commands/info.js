const Discord = require('discord.js');
// ----- Command JS File -----
module.exports = {
    name: 'info',
    description: "gives info",
    execute(message, args, bot){
        const embed = new Discord.RichEmbed()
        .setDescription( `Working on: Dementia, future projects are in mind but dementia is still in a WIP state and will remain so unless announced`)
        .setColor(0x6C1503) // remember the 0x
        .setTitle(`Coalition Of Devils`)
        .setTimestamp(message.createdAt)
        message.channel.send(embed)
    }
}