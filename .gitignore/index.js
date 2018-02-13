const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("!help");
    console.log("Le bot a bien été connecté !");
});

bot.login("NDEzMDM0ODUzMDUxNjYyMzQ2.DWS8QQ.XvBkFLT-J-fs-pAV77Y7UuDinac");
