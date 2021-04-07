const Discord = require("discord.js");
const firebase = require("firebase");
const db = firebase.database()
const os = require('os')

module.exports.run = async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `${days.toFixed()} dias,${hours.toFixed()} horas,${minutes.toFixed()} minutos,${seconds.toFixed()} segundos`;
  
  let loading = new Discord.MessageEmbed()
      .setColor("2f3136")
      .setDescription(`<a:Engrenagem:786567848427651072> Carregando`)
        
     message.channel.send(loading)
    .then(m => m.delete({ timeout: 2000 }))
        const embed  = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Info do Lobo™')
            .setColor('#000000')
           .setDescription(`olá ${message.author.username} meu nome é Lobo™ Veja mais sobre mim
           \n\nBot: \n\nServidores: ${client.guilds.cache.size} \nCanais: ${client.channels.cache.size} \nUsuários: ${client.users.cache.size} \nprefix:lm! \nMeu id:786953231187050517 \nDatabase: [firebase](https://firebase.google.com/?hl=pt-br) | [moongodb](https://mongodb.com/) \n\nSobre os desenvolvedores: \n\nDesenvolvedores: \n<@775691594493067265> | \`SimonGamer_YT
#6645\` \n<@715625483211112458> | \`pdr👑
#1234\` \n<@568502491608514575> | \`Enzo de munique
#6533\`\nid:\nSimonGamer: \n775691594493067265 \nPdr:\n715625483211112458 \nEnzo de Munique: \n568502491608514575 \n\nHost: \n\nLinguagem: [JavaScript](https://www.javascript.com/) \nLivraria: [Discord.js](https://discord.js.org/#/) \nHost: [Relp.it](https://repl.it/) \n\nOutros: \n\nUptime: ${uptime} \nPing: ${Math.round(client.ws.ping)}ms \nData de criação: 11 de dezembro de 2020`)

     .setFooter(`Comando solicitado por: ${message.author.tag}`, message.author.displayAvatarURL())
            
            .setImage('https://cdn.discordapp.com/attachments/801962057137127475/813845277604839464/BOTINFO.png')
            message.quote(message.author , embed).then(msg => {
            })
}