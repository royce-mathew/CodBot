

function convert(post,client,sort,israndom){
  // variables
    // Post.data, is where most of the stuff resides
    text = post.data
    // supported extensions
    const extension = [".jpg", ".png", ".svg", ".mp4", ".gif"];
    // Set the date
    const date = new Date(text["created_utc"] * 1000);
    // Initialize variables
    let image;
    let pre;
    let media;
    let des;
    let pinned;

    //If text is over 100 characters
    if (text.selftext.length > 1000) {
        des = text.selftext.substring(0, 999) + "...";
      } else {
        des = text.selftext
      };
  
    // if text preview is undefined, then get the source url
    if (text.preview != undefined) {
      pre = text.preview.images[0].source.url;
    }
    // if media is null then set the media as the thumbnial
    if (text.media != null) {
      media = text.thumbnail
   }
  // Make the extension shorter
   if (extension.includes(text.url.slice(-4))) {
     // Set the image
     image = text.url;

     // if things are not there
   } else if (pre !== null || media !== null) {
     // if media isn't there
     if (media !== null) {
       // Set the image
         image = media;
     } else {
       // Set the image
         image = pre;
     }
     // let the image be null
   } else {
     image = null;
   }
  
   // if there is a description
   if (des){
     // Put it inside formatted text
    des = "```"+des+"```"
   }
   // if the text is pinned
   if (text.stickied){
     // Let the user know its a pinned message
     pinned = "`PINNED MESSAGE:` "
   } else pinned = ""
  
   if (israndom){
     sort = "Random"
   }


   const embed = {
    // Bold title
    title: pinned+"**"+text.title+"**",
    //url: `https://www.reddit.com${text.permalink}`,

    // Author
    author: {
      // Author name
      name: text.author,
      // Author icon
      icon_url:
        "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png"
    },
    // description of the embed
    description: des,

    // Timestamp of the embed
    timestamp: date,

    // Image attached
    image: {
      url: image
    },
    //Colour for the embed
    color: 0x6C1503,

    // Footer of the embed
    footer: {
      text: "Coalition Of Devils",
      icon_url:
        "https://cdn.discordapp.com/attachments/629083352863080458/662722405755781140/cod.png"
    },

    // Set the Fields in the embed
    "fields": [
      {
        "name": `👍 Upvoted by`,//${client.emojis.cache.find(x => x.name === 'thumbsup')}
        "value": `${text.ups} people`,
        "inline": true
      },
      {
        "name": `💬 Commented by`,
        "value": `${text.num_comments} people`,
        "inline": true
      },
      {
        "name": `📮 Posted in`,
        "value": `${text.subreddit_name_prefixed}`,
        "inline": true
      },
      {
        "name": `📁 Sorted By`,
        "value": `${sort}`,
        "inline": true
      }
    ]
  };
  
// Return the embed
 return embed;
  };

module.exports = convert