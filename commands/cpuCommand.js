const Discord = require("discord.js");
const os = require("os");
const config = require('../config.json')

module.exports.run = async (client, message, args, db) => {

  let modelo = os.cpus().map((i) => `${i.model}`)[0]


  const botinfo = new Discord.MessageEmbed()
  .addField(`<:gaming_keyboard:800835629101350942>┃Memória RAM`,`\`${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB de 1024MB\``)
  .addField(`💻┃CPU`, `\`${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}% de CPU\``)
  .addField(`<:cpu:800835702069264474>┃Processador`, `\`${modelo}\``)
  .setImage('')
  message.channel.send(botinfo)
}
exports.help = {
    name: 'cpu',
    aliases: ['cpu'],
    status: 'on'
}