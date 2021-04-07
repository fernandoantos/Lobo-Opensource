const Discord = require('discord.js');


module.exports = {
    name: 'embed',
    aliases: ['embed'],
    run: async (client, message, args) => { 

     let user =  message.author   
  message.delete();
  if (!args.join(" ")) return message.reply("Digite algo!");
  let say = args.join(' ');
  message.delete();

     const embed = new Discord.MessageEmbed()

     .setDescription(`${say}`)
    .setFooter(`Embed de ${message.author.tag}`)
     .setColor('#0013ff')
     





  message.channel.send(embed)

  
 } }