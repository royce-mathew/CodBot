// How to upload the file to github
// 1) Make the changes
// 2) Save the changes
// 3) open the folder through right click and select open with git bash
// 4) Or just cd to the directory
// 5) Put down the code
// - git add .
// - git commit -m "What you changeed"
// - git push origin master
// This sends the file to github, now we need to redoply the file through heroku
// Go to https://dashboard.heroku.com/apps/coalitionofdevils/deploy/github
// Scroll down to manual deploy
// click deploy branch
// The procfile makes it so the bot stays up 24/7

// variables
const Discord = require('discord.js');
const bot = new Discord.Client();

// dotenv hides the token
require('dotenv/config');
const http = require('http');
const port = process.env.PORT;
http.createServer().listen(port);
// Token
const token = process.env.TOKEN;

// Prefix
const PREFIX = '!';

const fs = require('fs');
bot.commands = new Discord.Collection();

// Make a command folder inside the project and name it "commands"
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command);
}


// Version
var version = '1.0.0';
// this is a simple server
http.createServer().listen(port);

bot.on('ready', () =>{
    console.log('The Coalition is Online!');
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        // embeds
        case 'embed':
         bot.commands.get('ping').execute(message, args);
           break;
        case 'info':
        bot.commands.get('info').execute(message, args);
        // message.channel.sendMessage('Masquence is currently working on Dementia, future projects are in mind but dementia is still in a WIP state and will remain so unless announced.')
        break;
        case 'test':
        bot.commands.get('test').execute(message, args);
        // if(message.member.roles.find(r=> r.name === "Admins")) return message.channel.send('You do not have permissions to use this command')
        // .then(msg=> msg.delete(5000));
        // message.reply('test finished')
        break;
    } 
})

bot.on('error', err =>{
    console.log(err);
});
bot.login(process.env.token);
