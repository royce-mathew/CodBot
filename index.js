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

// variables
const Discord = require('discord.js');
const bot = new Discord.Client();

// dotenv hides the token
require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000;
const token = process.env.TOKEN;

// this is a simple server
http.createServer().listen(port);

bot.on('ready', () =>{
    console.log('The Coalition is Online!');
})

bot.on('message', msg=>{
    if(msg.content === 'joe'){
        msg.channel('mama');
    }
})

bot.on('error', err =>{
    console.log(err);
});
bot.login(process.env.BOT_TOKEN);