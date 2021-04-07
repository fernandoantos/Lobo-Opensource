const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

  if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Você, não tem a permissão de `BAN_MEMBERS` para poder executar esse comando!')

  if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply('Eu não tenho permissão suficiente, para poder executar esse comando!')


var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

 if(!membro) return message.reply("Mencione um membro, que deseja bani-lo!")

 if (membro === message.member) return message.reply('Você não pode se banir bobão!')


  var motivo = args.slice(1).join(" ");
   if(!motivo) return message.reply('Diga, o motivo após o @Mention do banimento.')

   let banEmbed = new Discord.MessageEmbed()
    .setTitle(`Usuário banido - ${bot.user.tag}`)
    .setDescription(`Um membro, acaba de ser banido pelo ${bot.user.tag}!`)
    .addField('Membro Banido!: ', `${membro.user.tag}`)
    .addField("Autor do Ban: ", message.author.username)
    .addField("Motivo: ", motivo)
    message.channel.send(banEmbed)
   membro.ban()

    const embed2 = new Discord.MessageEmbed()
		.setTitle(`Usuário banido - ${bot.user.tag}`)
    .setDescription(`Um membro, acaba de ser banido pelo ${bot.user.tag}!`)
		.addField('Membro Banido!: ', `${membro.user.tag}`)
    .addField("Autor do Ban: ", message.author.username)
    .addField("Motivo: ", motivo)
    .addField("Server: ", `${message.guild} \`${message.guild.id}\``)
    .setColor(`RANDOM`)
		.setTimestamp();
	client.channels.cache.get('808833831980892240').send(embed2).then(msg => {
  }) 
}