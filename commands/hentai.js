const Discord = require('discord.js');
const superagent = require("superagent");
// Util Modules
const convert = require("../utils/RedditPost");
const check = require("../utils/RedditCheck")

// The main list
const sbred = [
  "hentai",
  "cutehentai",
  "freeusehentai",
  "rule34",
  "hentaihaven"
];


exports.run = async (client, message, args, level) => {

  // Set variables
  const rindex = Math.floor(Math.random() * sbred.length);

  // Call the module
  let SList = check(args)
  // Get the first value returned
  sort = SList[0]
  // Get the second value returned
  limit = SList[1]

  // If we get args
  if (args[0]){

    let israndom = false;

    // call the reddit api
    let {body} = await superagent.get(`https://www.reddit.com/r/${sbred[rindex]}/${sort}.json?limit=${limit}&sort=${sort}`)
    
    // If we dont get a body
    if(!{body}) return message.channel.send("Something went wrong, please try again.")

    // Declare posts so its easier to access
    let posts = body.data.children

    // For each post
    for (const post of posts) {
      // if the post is over 18
      if (post.data.over_18 === true && message.channel.nsfw === false) {
        // Reply message
        return message.reply(
          `This post is NSFW! Try get it on NSFW channel! :confused:`
        );
        // if the post is not over 18
      } else {
        // Call the module
        const embed = convert(post,client,sort,israndom);
        // Send the embed
        await message.channel.send({ embed });
      };
    };

    // If we get no args
  } else {
    
    let israndom = true;

    // Call the reddit api
    let {body} = await superagent.get(`https://www.reddit.com/r/${sbred[rindex]}/random/.json`)
      
    // If we get a body
    if(!{body}) return message.channel.send("Something went wrong, please try again.")

    // The random api returns a tuple so we get the tuple and go inside the tuple
    let posts = body[0].data.children


    // For each post
    for (const post of posts) {
      // if the post is over 18
      if (post.data.over_18 === true && message.channel.nsfw === false) {
        // Reply message
        return message.reply(
          `This post is NSFW! Try get it on NSFW channel! :confused:`
        );
        // if the post is not over 18
      } else {
        // Call the module
        const embed = convert(post,client,sort,israndom);
        // Send the embed
        await message.channel.send({ embed });
      };
    };
  };
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hentai"],
  permLevel: 0 // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "hentai",
  category: "Reddit",
  description: "Ah yes, whats a bot without hentai.",
  usage: "hentai <sort> <amount>"
};