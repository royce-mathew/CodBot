const fs = require('fs');
const ms = require("ms");
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const { prefix, token } = require('./config.json');

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
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (!bot.commands.has(command)) return;

    if (command === 'ping') {
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
        } else if (command === "whoami") {
         bot.commands.get('whoami').execute(message, args, bot);
        } else if (command === "info") {
         bot.commands.get('info').execute(message, args, bot);
        } else if (command === "test") {
         bot.commands.get('test').execute(message, args, bot);
        } else if (command === "kick") {
         bot.commands.get('kick').execute(message, args, bot);
        } else if (command === "purge") {
         bot.commands.get("purge").execute(message, bot);
        } else if (command === "8ball") {
         bot.commands.get("8ball").execute(message, args, bot);
        } else if (command === "mute") {
         bot.commands.get("mute").execute(message, args, bot);
        } else if (command === "unmute") {
         bot.commands.get("unmute").execute(message, args, bot);
        } else if (command === "pp") {
         bot.commands.get("pp").execute(message, args, bot);
    } 
});

bot.on('error', err =>{
    console.log(err);
});
bot.login(token);