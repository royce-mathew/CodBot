const fs = require("fs");
const Discord = require("discord.js");
const chalk = require('chalk');
const moment = require('moment');
const client = new Discord.Client();
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");

// Query File
client.query = new Map()
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

// Login with the token
client.login(client.config.token);

}

// Run the init file
init();