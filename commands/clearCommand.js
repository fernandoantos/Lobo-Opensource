const Discord = require('discord.js');

module.exports = {
    config: {
        name: "clear",
        aliases: ['limpar'],
        description: "Limpe mensagens!",
        example: "/clear 50",
        usage: '/clear <quantia>'
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('você precisa de permissão para isso!');
        if (!message.guild.me.hasPermission("MANAGES_MESSAGES")) return message.reply('eu preciso de permissão para isso!');

        let quantia = args[0]
        if (!quantia) return message.reply('você precisa botar uma quantidade de `1 ate 100!`');
        if (isNaN(quantia)) return message.reply('você só pode colocar apenas números!');

        if (parseInt(quantia) > 100 || parseInt(quantia) < 1) return message.reply('você só pode botar entre `1 a 100`');

        try {
            message.channel.bulkDelete(quantia);
             const embed1 = new Discord.MessageEmbed()
           .setDescription(`Foram deletadas ${quantia} de mensagens pelo usuáro ${message.author}`)
          message.quote(message.author , embed1).then(msg => {      
              
            });
        
        } catch (err) {
            console.log(err);
            message.channel.send(`Ocorreu um erro ao limpar as mensagens!`)
        }

    }
}