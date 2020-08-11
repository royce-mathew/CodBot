const {randomBytes} = require("crypto");
const Discord = require("discord.js");
const Jimp = require("jimp");

const threenums = [1,2,3]

const rotatenum = Array(5,6,7,10,-5,-16,-7,-9,-11);


exports.run = async (client, message, args) => {
       // Check if channel name is "verify" or in verificationChannels array
       if (message.channel.id !== (client.config.servers[(message.guild || {id: "0"}).id] || {verificationChannel: "0"}).verificationChannel && message.channel.name !== "verify") return;
      
       // Check if the guild has a verified role
       //if (!message.guild.roles.cache.find(role => role.name === 'Verified') || !client.config.servers[message.guild.id].verifyRole) //return client.logger.log("Guild `"+message.guild.name+"` does not have a verify role")

        // if user provides args
        if (!args[0]) {

           // If no args are provided:
           const startembed = new Discord.MessageEmbed()
           .setTitle("Verification")
           .setDescription("Sending you the captcha, please check your DM's")
           .setFooter('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
           .setColor(0x6C1503) // remember the 0x
           .setTimestamp(message.createdAt)
           message.channel.send(startembed)
        

            // The captcha that we will be using
            const captcha = randomBytes(32).toString("hex").substr(0, 6);
           
            // Rotate it randomized
            const randomizedrotation = rotatenum[Math.floor(Math.random()* rotatenum.length)]

            //Get the random num for the font
            const fontnum = threenums[Math.floor(Math.random()*threenums.length)]
            
            // Load one of the random fonts
            const font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK || Jimp.FONT_SANS_64_BLACK);
           
            // Create a blank canvas
            const fontCanvas = await Jimp.create(600, 600);
           
            // Get the noise image for the background
            const mainimage = await Jimp.read("./assets/noise.jpg");
           
            // Get a random font and then create a fake image
            fontCanvas.print(font, 0, 0, captcha).rotate(randomizedrotation);
           
            // prints the fake image on the capthca background
            mainimage.blit(fontCanvas,0,0)
   
           const buffer = await mainimage.getBufferAsync(Jimp.MIME_JPEG); 
           // Makes the main image into a jpeg format
   
           // Start embed
           const embed = new Discord.MessageEmbed()
               .setTitle("Verification")
               .setDescription("This server is protected by The Coalition Of Devils Captcha.\n\n" +
                   "Please solve this captcha by sending ` !verify [put the code down below here]` in <#" + message.channel.id + "> \n\n\n"+
                   "**Captcha**")
               .setFooter('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
               .setColor(0x6C1503) // remember the 0x
               .setTimestamp(message.createdAt)
               .attachFiles({attachment: buffer, name: "CODCaptcha.jpeg"})// {attachment: buffer, name: "captcha.jpeg" }
               .setImage("attachment://CODCaptcha.jpeg");
           

           message.author.send(embed).catch(() => {
               // if it is not able to send a dm, then send this message.
               message.reply("Could not send captcha, maybe you have Direct Messages disabled?");
           });
           
           client.query.set(message.author.id, captcha);

        // If user provides args
        } else {

            // If the query has the user id then tell the user
            if (!client.query.has(message.author.id)) return message.reply("Please request a captcha by sending `!verify`");
    
            // Get the captcha set in the query
            const givencaptcha = client.query.get(message.author.id);
    
            // If the args is not equal to the given captcha
            if (args[0] !== givencaptcha) return message.reply("Invalid captcha, please try again.");
           
            // if user provides the right captcha
            else {

                // Add the verify role to the user
               message.member.roles.add(client.config.servers[message.guild.id].verifyRole || message.guild.roles.cache.find(role => role.name === 'Verified') ).then(() => {

                    // Tell the user that he is verified
                   const finembed = new Discord.MessageEmbed()
                   .setDescription(`Thankyou for verifying in Coalition Of Devils, <@${message.author.id}>. You now have access to all the main channels.\n\n`+
                   `Welcome to the Coalition, we hope you have a good time here, ${message.author.username}.`)
                   .setFooter('Coalition Of Devils', "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png")
                   .setColor(0x6C1503) // remember the 0x
                   .setTimestamp(message.createdAt)
                   message.author.send(finembed);
                   

                // If client catches an error
               }).catch(console.error)
              
               // Delete the query
               client.query.delete(message.author.id)
           };
   
       };

       // Delete every messages
       setTimeout(() => { 
        
        message.channel.messages.fetch({ limit: 100 })
        .then(fetched => {
          const notPinned = fetched.filter(fetchedMsg => !fetchedMsg.pinned);
      
          message.channel.bulkDelete(notPinned, true);
        })
        .catch(console.error);
        

        // 20 seconds
    }, 20000);
    
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["verify"],
    permLevel: "User" // Can be "Moderator", "Administrator"
};

exports.help = {
    name: "Verify",
    category: "Misc",
    description: "Verify to get access to all the channels",
    usage: "verify [code]"
};
