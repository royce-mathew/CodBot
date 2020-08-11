exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  await message.reply("Bot is shutting down.");
  await Promise.all(client.commands.map(cmd =>
    client.unloadCommand(cmd)
  ));
  process.exit(0);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reboot"],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "Reboot",
  category: "System",
  description: "Shuts down the bot.",
  usage: "reboot"
};