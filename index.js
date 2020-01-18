const fs = require("fs");
const ms = require("ms");
const Discord = require("discord.js");
const chalk = require('chalk');
const moment = require('moment');
const settings = require('./config.json');
const bot = new Discord.Client();
require('./util/eventLoader')(bot);


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


const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    const props = require(`./commands/${f}`);
    log(`Loading Command: ${props.help.name}. 👌`);
    bot.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name);
    });
  });
});

bot.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      const cmd = require(`./commands/${command}`);
      bot.commands.delete(command);
      bot.aliases.forEach((cmd, alias) => {
        if (cmd === command) bot.aliases.delete(alias);
      });
      bot.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        bot.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

bot.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  const mod_role = message.guild.roles.find('name', settings.modrolename);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  const admin_role = message.guild.roles.find('name', settings.adminrolename);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  if (message.author.id === settings.ownerid) permlvl = 4;
  return permlvl;
};


bot.on("error", err => {
  console.log(err);
});
bot.login(token);
