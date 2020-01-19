const fs = require("fs");
const ms = require("ms");
const Discord = require("discord.js");
const chalk = require('chalk');
const moment = require('moment');
const settings = require('./config.json');
const client = new Discord.Client();
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");

// Config File
client.config = require("./config.js");

//Logger File
client.logger = require("./modules/Logger");

// Let's start by getting some useful functions that we'll use throughout
// the bot, like logs and elevation features.
require("./modules/functions.js")(client);

// Aliases and commands are put in collections where they can be read from,
// catalogued, listed, etc.
client.commands = new Enmap();
client.aliases = new Enmap();

// Now we integrate the use of Evie's awesome EnMap module, which
// essentially saves a collection to disk. This is great for per-server configs,
// and makes things extremely easy for this purpose.
client.settings = new Enmap({name: "settings"});

//Checks if the node version that is required is the same as the node version that is needed to run the bot
if (Number(process.version.slice(1).split(".")[0]) < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");


                      //ROBLOX THINGS
                      const roblox = require("noblox.js");
                      const { prefix, cookie, groupId, maximumRank } = require("./config.json");
                      let token = process.env.TOKEN;
                      let username = "CoalitionOfDevils"; // ROBLOX
                      let password = "mathewr2468"; // ROBLOX

                      function rbxlogin() {
                        return roblox.cookieLogin(cookie);
                        let currentUser = roblox.getCurrentUser();
                      }
                      rbxlogin()
                        .then(function() {
                          // After the function has been executed
                          console.log("Logged in."); // Log to the console that we've logged in
                        })
                        .catch(function(error) {
                          // This is a catch in the case that there's an error. Not using this will result in an unhandled rejection error.
                          console.log(`Login error: ${error}`); // Log the error to console if there is one.
                        });


                      // Express thing, Pings the bot to keep it online.
                      const http = require('http');
                      const express = require('express');
                      const app = express();
                      app.get("/", (request, response) => {
                        console.log(Date.now() + " Ping Received");
                        response.sendStatus(200);
                      });
                      app.listen(process.env.PORT);
                      setInterval(() => {
                        http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
                      }, 280000);




const init = async () => {

  // Here we load **commands** into memory, as a collection, so they're accessible
  // here and everywhere else.
  const cmdFiles = await readdir("./commands/");
  client.logger.log(`Loading a total of ${cmdFiles.length} commands.`);
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (response) console.log(response);
  });

  // Then we load events, which will include our message and ready event.
  const evtFiles = await readdir("./events/");
  client.logger.log(`Loading a total of ${evtFiles.length} events.`);
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    client.logger.log(`Loading Event: ${eventName}`);
    const event = require(`./events/${file}`);
    // Bind the client to any event, before the existing arguments
    // provided by the discord.js event. 
    // This line is awesome by the way. Just sayin'.
    client.on(eventName, event.bind(null, client));
  });

  // Generate a cache of client permissions for pretty perm names in commands.
  client.levelCache = {};
  for (let i = 0; i < client.config.permLevels.length; i++) {
    const thisLevel = client.config.permLevels[i];
    client.levelCache[thisLevel.name] = thisLevel.level;
  }
}

client.on("error", err => {
  console.log(err);
});
client.login(token);
