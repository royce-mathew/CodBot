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
// Token
const token = process.env.TOKEN;

// Prefix
const PREFIX = '.';
// Version
var version = '1.0.0';
// this is a simple server
http.createServer().listen(port);

bot.on('ready', () =>{
    console.log('The Coalition is Online!');
})

bot.on('message', msg=>{
    
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        // embeds
        case "embed":
           const embed = new Discord.RichEmbed()
           .setTitle("Title")
           .addField('Player Name', msg.author.username, true)
           .addField('Current Server', msg.guild.name, true)
           .setColor(B52607)
           .setThumbnail(msg.author.avatarURL0)
           .setFooter('footer')
           msg.channel.sendEmbed(embed);
           break;
    }
})

bot.on('error', err =>{
    console.log(err);
});
bot.login(process.env.token);