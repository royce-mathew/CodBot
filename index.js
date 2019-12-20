// variables
const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require("ms");

// dotenv hides the token
require('dotenv/config');

// Token
const token = process.env.TOKEN;

// Prefix
const PREFIX = "!";

const fs = require('fs');
bot.commands = new Discord.Collection();

// Make a command folder inside the project and name it "commands"
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}


// this is a simple server
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
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {


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
    } 
});

bot.on('error', err =>{
    console.log(err);
});
bot.login(process.env.token);