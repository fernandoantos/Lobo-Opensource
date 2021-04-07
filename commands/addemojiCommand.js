const Discord = require('discord.js')

exports.run = async (client, message, args, prefix) => {
    if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send(` ${message.author}, Você não tem permissão para usar este comando!`); 
    if (!message.guild.me.hasPermission("MANAGE_EMOJIS")) return message.channel.send(` ${message.author}, Eu não tenho permissão para executar este comando!`);
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.author}, eu preciso do nome do emoji para adicionar, ultilize: \`l!addemoji <nome> <url>\``)
    
    if (!args[0]) return message.channel.send(embed);
    if(!args[1]) {
        const emoji = args[0];
              let embed = new Discord.MessageEmbed()
               .setDescription(`${message.author}, eu preciso do nome do emoji para adicionar, ultilize: \`l!addemoji <nome> <url>\``)
    if (!emoji) return message.channel.send(embed);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
        const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
            customemoji.animated ? 'gif' : 'png'
        }`;
        const name = args.slice(1).join(' ');
        message.guild.emojis.create(`${Link}`, `${name || `${customemoji.name}`}`);
        let embed = new Discord.MessageEmbed()
        .setDescription(`Emoji adicionado com sucesso.`)
        message.channel.send(embed);
        }
    }
    try {
    message.guild.emojis.create(args[1], args[0]).then(emoji => {
      let embed = new Discord.MessageEmbed()
        .setDescription(`Emoji adicionado com sucesso.`)
        message.channel.send(embed);
    });
  } catch(err) {
    message.channel.send(`\`\`\`js\n${err}\n\`\`\``);
}
}
exports.help = {
    name: 'addemoji',
    aliases: ['adicionaremoji'],
    category: 'mod'
}