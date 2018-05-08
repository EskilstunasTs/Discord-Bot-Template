# EskilstunasTs

A simple bot template for [discord.js](https://discord.js.org/).

### Getting Started

First, edit the `bot.js` correct `token`, and `prefix`.

The `token` variable is your Discord bot's token. You can get this buy creating a new Discord application.

The `prefix` is used to tell the bot what prefix it should look for. Most bots are using `!`.

### Adding Commands

To add commands to the bot, simply just write this code:

```javascript
// Specify what command you want the bot to look for.
if(cmd === `${prefix}command`) {

  // Your code here
  return;
}
```

If you need more information or help you can check the [discord.js](https://discord.js.org/#/docs/main/stable/general/welcome) documentation.
