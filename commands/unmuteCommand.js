const Discord = require('discord.js')


module.exports = {
  name: "unmute",
  category: "moderation",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Você não tem permissao para executar esse comando!"
      );
    }


var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("Eu não tenho permissão!");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Por, Favor Mencione o membro que deseja desmutar!"
      );
    }
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Silenciado")
      
      let embed = new Discord.MessageEmbed()
     .setTitle('unMute')
        .setThumbnail(user.user.displayAvatarURL())
        .addField('Usuário Desmutado:', user)
        .addField('Desmutado por:', message.author)
       
        .setFooter('Desmutado não fale bobagens novamente!', client.user.displayAvatarURL())
        .setTimestamp()
    
 if(user.roles.cache.has(muterole)) {
      return message.channel.send("Neste, servidor não existe o cargo `Silenciado`, Crie-o.")
    }
    
    
    user.roles.remove(muterole)
    
  message.channel.send(embed)
    
    user.send(`Você, foi desmutado no servidor: **${message.guild.name}** espero que não fale bobagens denovo!`)

  }
};