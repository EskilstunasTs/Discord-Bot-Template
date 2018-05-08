// A discord.js bot needs this.
var Discord = require('discord.js');
var client = new Discord.Client();

// Filesystem needs this.
var fs = require(`fs`);
var util = require(`util`);
var date = new Date();

// Your discord app token
var token = "insert_token_here";

// Your prefix
var prefix = "!";

// Ready message, your bot will only start reaction to information
client.on(`ready`, async () => {
  console.log(`The bot is online!`)

  // Set the bot's status, this can be set as anything.
  // Its a good idea to set the status to the help command.
  client.user.setActivity(`In ${client.guilds.size} servers!`, {type: "PLAYING"});
});

client.on(`message`, async message => {

  // Check if the message is from a bot. If it is then it will ignore
  // The message, this will make it harder to create endless loops.
  if(message.author.bot) return;

  // Check if the message is sent to the bot's dms. Then ignore!
  if(message.channel.type === "dm") return;

  // We have to split the message in order to get the args from it
  let messageArray = message.content.split(" ");

  // This is the command that we split
  let cmd = messageArray[0];

  // This is the arg that we are looking for
  let args = messageArray.slice(1);

  // Specify what command you want the bot to look for.
  if(cmd === `${prefix}help`) {

    // When the bot has found the right argument, then send a message!
    return message.channel.send(`Hello!`);

  }
});

// Login
client.login(token);
