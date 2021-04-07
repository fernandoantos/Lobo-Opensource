const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let reason = args.slice(0).join(' ');
    const embed1 = new Discord.MessageEmbed()
    .setTitle(`Como usar?`)
   .setDescription(`🔨 Ultilização: 
   \`lm!conquista <nome-da-conquista>\`
   
   📖 Exemplo:
   \`lm!conquista Lobos-são lindos\`
   
   📖 Exemplo nº2:
   \`lm!conquista SimonGamer007\``)
   .setFooter(`Author: ${message.author.tag} | id:${message.author.id}`)
    if (reason.length < 1) return message.channel.send(embed1)
let rnd = Math.floor((Math.random() * 39) + 1);

  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;
    let embed = new Discord.MessageEmbed()

        .setTitle(`Conquista  desbloquada`)
        .setImage(`https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=Nova+conquista&t=${args[0]}`)
        .setColor('RANDOM')
 .setFooter(`Author: ${message.author.tag} | id:${message.author.id}`)
    
    message.channel.send(embed)
}

exports.help = {
    name: 'conquista',
    aliases: ['conquista']
    }
