exports.run = async (client, message, args) => {
    const guild = client.config.servers[message.guild.id];
    message.member.removeRole(guild.verifyRole).then(() => {
        message.reply("✅ | Successfully unverified.");
    }).catch(err => {
        message.reply("⛔ | Could not remove role: " + err);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["unverify","unv"],
  permLevel: "User" // Can be "Moderator", "Administrator"
};

exports.help = {
  name: "Unverify",
  category: "Misc",
  description: "Unverify yourself",
  usage: "unverify"
};

