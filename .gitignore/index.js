const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("!");

bot.on('ready', function() {
    bot.user.setGame("!help");
    console.log("Le bot a bien été connecté !");
});

bot.login("NDEzMDM0ODUzMDUxNjYyMzQ2.DWS8QQ.XvBkFLT-J-fs-pAV77Y7UuDinac");

bot.on('message', message => {
    if (message.content === 'ping'){
        message.reply('pong');
        console.log("ping pong");
    }

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#121480')
            .addField("Commandes du bot !", "   !help : Affiche les commandes du bot ! \n!ip : Affiche l'ip du serveur ! \n!site : Affiche le lien du site !")
            .addField("Interaction", "  ping: Le bot répond pong !"  )
            .setFooter("Copyright © 2018 PlayThisCube - Tous droits révervés")
            message.channel.sendEmbed(help_embed)
        //message.channel.sendMessage("Voici la liste des commands. :\n -!help pour afficher les commandes");
        console.log("Commande Help demandée !");
    }

});
