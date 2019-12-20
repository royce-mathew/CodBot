module.exports = {
    name: 'test',
    description: "tells if a person is an admin or not",
    execute(message, args, bot){
       if(message.member.roles.find(r => r.name === "Admins")){
           message.reply('You are an admin')
       } else {
           return message.channel.send("You do not have permissions to use this command")
       }
    }
}