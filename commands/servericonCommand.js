const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

  const embed = new Discord.MessageEmbed()

//Créditos ao ,_, sᴀɪᴛ </ >#3333 mans!!!!

            .setImage(message.guild.iconURL({size: 2048, format: "png", dynamic : true}))
            .setColor('993623')
            .setTitle(`***Ícone do Servidor  -  ${message.guild.name}***`)
            .setDescription(`**🖼️ Quer a imagem? [Clique Aqui](${message.guild.iconURL({size: 2048, format:"png", dynamic : true})})**`)
            .setFooter("ServerICON")

    message.reply(embed)
}