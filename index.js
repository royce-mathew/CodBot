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