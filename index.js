<<<<<<< HEAD
=======
// ----- Command JS File -----
module.exports = {
    name: 'ping',
    description: "says ping!",
    execute(message, args){
        message.channel.send('pong!');
    }
}
// put inside a folder called "commands" and make it a js file, name the file "ping"

>>>>>>> fcecf29fdd951e0795b55e17d6b759541a44ad74
// variables
const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require("ms");

// dotenv hides the token
require('dotenv/config');
<<<<<<< HEAD

=======
const http = require('http');
const port = process.env.PORT;
http.createServer().listen(port);
>>>>>>> fcecf29fdd951e0795b55e17d6b759541a44ad74
// Token
const token = process.env.TOKEN;

// Prefix
<<<<<<< HEAD
const PREFIX = "!";
=======
const PREFIX = '!';
>>>>>>> fcecf29fdd951e0795b55e17d6b759541a44ad74

const fs = require('fs');
bot.commands = new Discord.Collection();

// Make a command folder inside the project and name it "commands"
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}


// this is a simple server
<<<<<<< HEAD
// http.createServer().listen(port);

bot.on('ready', async () => {
    console.log(`The Coalition is up and running!`);

    // Every 5 seconds check the "muted.json" file to see when a users mute is up
    bot.setInterval(() => {
        for (const i in bot.muted) {
            const time = bot.muted[i].time;
            const guildId = bot.muted[i].guild;
            const guild = bot.guilds.get(guildId);
            const member = guild.members.get(i);
            const mutedRole = guild.roles.find(mR => mR.name === 'Muted');
            if (!mutedRole) continue;

            if (Date.now() > time) {
                member.removeRole(mutedRole);
                delete bot.muted[i];
                fs.writeFile('./muted.json', JSON.stringify(bot.muted), err => {
                    if(err) throw err;
                });
            }
        }
    }, 5000);
=======
http.createServer().listen(port);

bot.on('ready', () => {
    console.log("The Coalition is online!");
>>>>>>> fcecf29fdd951e0795b55e17d6b759541a44ad74
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
<<<<<<< HEAD


        case "ping":
         bot.commands.get('ping').execute(message, args);
           break;
        case "whoami":
         bot.commands.get('whoami').execute(message, args);
            break;
        case "info":
         bot.commands.get('info').execute(message, args);
            break;
        case "test":
         bot.commands.get('test').execute(message, args);
            break;
      //  case "mute":
     //    bot.commands.get('mute').execute(message, args);
     //   break;
     //   case "unmute":
      //   bot.commands.get('unmute').execute(message, args);
      //  break;
=======
        // embeds
        case "embed":
         bot.commands.get('ping').execute(message, args);
           break;
        case "info":
        bot.commands.get('info').execute(message, args);
        // message.channel.sendMessage('Masquence is currently working on Dementia, future projects are in mind but dementia is still in a WIP state and will remain so unless announced.')
        break;
        case "test":
        bot.commands.get('test').execute(message, args);
        // if(message.member.roles.find(r=> r.name === "Admins")) return message.channel.send('You do not have permissions to use this command')
        // .then(msg=> msg.delete(5000));
        // message.reply('test finished')
        break;
>>>>>>> fcecf29fdd951e0795b55e17d6b759541a44ad74
    } 
});

bot.on('error', err =>{
    console.log(err);
});
bot.login(process.env.token);
