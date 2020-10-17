require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async msg => {
  if(msg.content == "test"){
    msg.channel.send("testing");
  }
});

client.login(process.env.TOKEN);