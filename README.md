# CodBot

How to upload the file to github
1) Make the changes
2) Save the changes
3) open the folder through right click and select open with git bash
4) Or just cd to the directory
5) Put down the code
```
$ git add .
$ git commit -m "What you changeed"
$ git push origin master

```

This sends the file to github, now we need to redoply the file through heroku
Go to https://dashboard.heroku.com/apps/coalitionofdevils/deploy/github
Scroll down to manual deploy
click deploy branch
The procfile makes it so the bot stays up 24/7
