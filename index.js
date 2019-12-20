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

// Tells us when the bot is online
bot.on('ready', async () => {
    console.log(`The Coalition is up and running!`);
});

// Whenever the player says a message
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {

        case "ping":
            
            // get the ping of the bot
            message.channel.send({embed: {
                color: 0x6C1503,
                fields: [{
                    name: "Ping",
                    value: "The bot's ping is: " + Math.round(bot.ping) + ' ms'
              }]
            }
            })
            //End

           break;
        case "whoami":
         bot.commands.get('whoami').execute(message, args, bot);
            break;
        case "info":
         bot.commands.get('info').execute(message, args, bot);
            break;
        case "test":
         bot.commands.get('test').execute(message, args, bot);
            break;
        case "kick":
         bot.commands.get('kick').execute(message, args, bot);
            break;
        case "purge":
         bot.commands.get("purge").execute(message, args, bot);
        break;
        case "8ball":
         bot.commands.get("8ball").execute(message, args, bot);
        break;
        case "mute":
         bot.commands.get("mute").execute(message, args, bot);
        break;
        case "unmute":
         bot.commands.get("unmute").execute(message, args, bot);
        break;
    } 
});

bot.on('error', err =>{
    console.log(err);
});
bot.login(process.env.TOKEN);