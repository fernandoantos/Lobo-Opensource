const { MessageEmbed } = require('discord.js');
const moment = require('moment');


module.exports = {
    name: "user-info",
    category: "extra",
    run: async (client, message, args) => {
			
			let abacate = message.mentions.users.first() || message.author
			const corno = message.guild.member(abacate);

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        if(!isNaN(args[0])) return message.reply('Mencione um usuário válido') 
const membro = message.mentions.users.first() || message.author
const badge = membro.flags.toArray().join(' ').replace('HOUSE_BALANCE', '<:hypesquad_balance:556683254586015765>').replace('HOUSE_BRILLIANCE', '<:hypesquad_brilliance:556683174563020810>').replace('HOUSE_BRAVERY', '<:hypesquad_bravery:556683071529811983>').replace('<:bughunter:556682363120254979>', ':Hunter:').replace('BUGHUNTER_LEVEL_2', '<:bughunter:556682363120254979>').replace('VERIFIED_DEVELOPER', '<a:botdeveloper:763815297186267176>').replace('DISCORD_PARTNER', '<:partner2:767235399943979038>').replace('VERIFIED_BOT', '<:verified_bot:763819634369495063>').replace('EARLY_SUPPORTER', '<:earlysupporter:556682087579516968>').replace('HYPESQUAD_EVENTS', '<:hypesquadevents:556682499569221662>').replace('TEAM_USER', '<:staff:556680099865427978>').replace('SYSTEM', '<:staff:556680099865427978>')

        let status;
        switch (user.presence.status) {
            case "online":
                status = " Online";
                break;
            case "dnd":
                status = " Não Pertube";
                break;
            case "idle":
                status = " Ausente";
                break;
            case "offline":
                status = " Offiline";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username}`)
            .setColor(`#f3f3f3`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "Nome do usuário:",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: " Tag do usuário: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "ID: ",
                    value: user.user.id,
                },
                {
                    name: " Status: ",
                    value: status,
                    inline: true
                },
                {
                    name: "Jogando: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `Esse usuário não esta jogando nada.`,
                    inline: true
                },
                {
                    name: ' Avatar',
                    value: `[Clique Aqui para baixar](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Conta criada em: ',
                    value: moment.utc(abacate.createdAt).format("LL"),
                    inline: true
                },
                {
                    name: 'Entrou aqui em: ',
                    value: moment.utc(corno.joinedAt).format("LL"),
                    inline: true
                }
            )
            .setDescription(`${message.author} Reaja com <:emoji_91:785625985374224454> para ver os cargos do ${user.user.username} 
            Reaja com <:emoji_92:785626049543143444> para voltar as informações do ${user.user.username}`)
                        .setFooter(`de ${message.author.tag}`)
            
            try {
            
            } catch (err) {
                  console.error("Erro:" + err)
            }
   message.quote(message.author, embed).then(msg => { 
        
        msg.react("<:emoji_91:785625985374224454> ")
        msg.react("<:emoji_92:785626049543143444>")

      let filtro1 = (r, u) => r.emoji.id === '785625985374224454' && u.id === message.author.id;
      let filtro2 = (r, u) => r.emoji.id === '785626049543143444' && u.id === message.author.id;
     
      let coletor = msg.createReactionCollector(filtro1);
      let coletor2 = msg.createReactionCollector(filtro2);
      

      coletor.on("collect", c => {
               const embed = new MessageEmbed()
            .setTitle(`Cargos de ${user.user.username}`)
            .setColor(`#f3f3f3`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: ' Cargos: ',
                    value: user.roles.cache.map(role => role.toString()).join(","),
                    inline: true
                }
            )
            .setFooter(`de ${message.author.tag}`)
            try {
            
            } catch (err) {
                  console.error("Erro:" + err)
            }
        msg.edit(embed)
      })

            coletor2.on("collect", c => {
const embed = new MessageEmbed()
            .setTitle(` ${user.user.username}`)
            .setColor(`#f3f3f3`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "Nome do usuário:",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: " Tag do usuário: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "ID: ",
                    value: user.user.id,
                },
                {
                    name: " Status: ",
                    value: status,
                    inline: true
                },
                {
                    name: "Jogando: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `Esse usuário não esta jogando nada.`,
                    inline: true
                },
                {
                    name: ' Avatar',
                    value: `[Clique Aqui para baixar](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Conta criada em: ',
                    value: moment.utc(abacate.createdAt).format("LL"),
                    inline: true
                },
                {
                    name: 'Entrou aqui em: ',
                    value: moment.utc(corno.joinedAt).format("LL"),
                    inline: true
                }
            )
                        .setDescription(`Reaja com <:emoji_91:785625985374224454> para ver os cargos do ${user.user.username} 
            Reaja com <:emoji_92:785626049543143444> para voltar as informações do ${user.user.username}`)
                        .setFooter(`de ${message.author.tag}`)
            try {
            
            } catch (err) {
                  console.error("Erro:" + err)
            }
        msg.edit(embed)
      })
        
   })
    }
}



exports.help = {
    name: 'userinfo',
    aliases: ['ui']
}