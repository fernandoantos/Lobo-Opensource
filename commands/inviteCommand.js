const Discord = require("discord.js");

 module.exports.run = async (client, message, args) => {

     const embed = new Discord.MessageEmbed()
    .setTitle(`Me adicione `)
    .setColor("RADOM")
    .setDescription(`**ola, me adicone[Lobo:tm:](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)**`)
    .setFooter(`Comando execultado por ${message.author.tag}`)
    
  
  message.channel.send(embed);
 };
 