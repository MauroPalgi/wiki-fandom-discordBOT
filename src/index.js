require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const commandHandler = require("./commands/index");

client.once("ready", () => {
  console.log("Ready Bot!");
});

client.on("message", commandHandler);
client.login(process.env.BOT_TOKEN);

//! DOCUMENTATION
// https://discord.js.org/#/docs/main/stable/vgeneral/welcome
