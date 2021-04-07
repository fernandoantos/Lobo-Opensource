const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let loading = new Discord.MessageEmbed()
      .setColor("2f3136")
      .setDescription(`<a:Engrenagem:786567848427651072> Carregando`)
        
     message.channel.send(loading)
    .then(m => m.delete({ timeout: 2000 }))
    .then(() => message.channel.send(info))
    let embed = new Discord.MessageEmbed()
    .setTitle(`Central de comandos`)
    .setDescription(`**Links**:
 <:youtube:791294874720272386>[Youtube](https://www.youtube.com/channel/UCzdKkvcauj4czzwbG8C3ezg)
 <:instagram:791294964314800158>[instagram](https://www.instagram.com/simon_gamer007/)
<:discord:800835741957226496>[Meu servidor de suporte](https://discord.gg/TK7bVv5MRg)

**Clique nas reações para ver meus comandos**

<a:1lux:785624500867563550> Informações

<a:2lux:785624466154848307> Moderação

<a:3lux:785624418734964827> Diversão

<a:4lux:785624351718375434> Minecraft

<a:5lux:785624301121830932> Configuraveis

<:emoji_92:785626049543143444> para voltar ao menu`)
    .setColor("RANDOM")
    .setImage('https://cdn.discordapp.com/attachments/787497457256366161/813844385069400094/Simon_1.png')
    .setFooter(`Comando Executado por ${message.author.tag} Centro`)
    message.quote(message.author, embed).then(msg => { 
      msg.react("<a:1lux:785624500867563550>")
      msg.react("<a:2lux:785624466154848307>")
      msg.react("<a:3lux:785624418734964827>")
      msg.react("<a:4lux:785624351718375434>")
      msg.react("<a:5lux:785624301121830932>")
      msg.react("<:emoji_92:785626049543143444>")

      let filtro1 = (r, u) => r.emoji.id === '785624500867563550' && u.id === message.author.id;
      let filtro2 = (r, u) => r.emoji.id === '785624466154848307' && u.id === message.author.id;
      let filtro3 = (r, u) => r.emoji.id === '785624418734964827' && u.id === message.author.id;
      let filtro4 = (r, u) => r.emoji.id === '785624351718375434' && u.id === message.author.id;
      let filtro5 = (r, u) => r.emoji.id === '785624301121830932' && u.id === message.author.id;
      let filtro7 = (r, u) => r.emoji.id === '785626049543143444' && u.id === message.author.id;
      
      let coletor = msg.createReactionCollector(filtro1);
      let coletor2 = msg.createReactionCollector(filtro2);
      let coletor3 = msg.createReactionCollector(filtro3);
      let coletor4 = msg.createReactionCollector(filtro4);
      let coletor5 = msg.createReactionCollector(filtro5);
      let coletor7 = msg.createReactionCollector(filtro7);

      coletor.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de 📜 | Informações [10]`)
        .setDescription(`
 1º botinfo
 2º clima
 3º covid
 4º cpu
 5º ping
 6º servericon
 7º serverinfo
 8º userinfo
 9º calcular`)
        .setColor("RANDOM")
            .setFooter(`Comando Executado por ${message.author.tag} Página [1/6]`)

        msg.edit(embed)
      })

      coletor2.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de 👮 | Moderação [9]`)
        .setDescription(`
 1º addemoji
 2º addrole
 3º ban
 4º unban
 5º clear 
 6º kick
 7ªº mute
 8º umute
 9º slowmode
 `)
        .setColor("RANDOM")
            .setFooter(`Comando Executado por ${message.author.tag} Página [2/6]`)

        msg.edit(embed)
      })

      coletor3.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de 🎁 | Diversão [22]`)
        .setDescription(` 
 1º ascii
 2º avatar
 3º bigtxt
 4º biscoito
 5º coinflip
 6º dado 
 7º hug
 8º kiss
 9º playstore
 10º say 
 11º tocaaqui
 12º trigger
 13º ship
 14º laranjo
 15º stonks
 16º primeiraspalavras
 17º embed`)
        .setColor("RANDOM")
                    .setFooter(`Comando Executado por ${message.author.tag} Página [3/6]`)

        msg.edit(embed)
      })

      coletor4.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de Minecraft [3]`)
        .setDescription(`
        1º mcskin
        2º mchead
        3º conquista`)
        .setColor("RANDOM")
                    .setFooter(`Comando Executado por ${message.author.tag} Página [4/6]`)

        msg.edit(embed)
      })
      coletor5.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos configuraveis `)
        .setDescription(`
        1º lembrete`)
        .setColor("RANDOM")
            .setFooter(`Comando Executado por ${message.author.tag} Página [5/6]`)

        msg.edit(embed)
      })
    
          coletor7.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Central de comandos`)
        .setDescription(`
**Links**:
 <:youtube:791294874720272386>[Youtube](https://www.youtube.com/channel/UCzdKkvcauj4czzwbG8C3ezg)
 <:instagram:791294964314800158>[instagram](https://www.instagram.com/simon_gamer007/)
<:discord:800835741957226496>[Meu servidor de suporte](https://discord.gg/TK7bVv5MRg)

**Clique nas reações para ver meus comandos**

<a:1lux:785624500867563550> Informações

<a:2lux:785624466154848307> Moderação

<a:3lux:785624418734964827> Diversão

<a:4lux:785624351718375434> Minecraft

<a:5lux:785624301121830932> Configuraveis

<:emoji_92:785626049543143444> para voltar ao menu`)
        .setColor("RANDOM")
            .setFooter(`Comando Executado por ${message.author.tag} Centro`)
 .setImage('https://cdn.discordapp.com/attachments/787497457256366161/813844385069400094/Simon_1.png')
        msg.edit(embed)
      })
                let loading1 = new Discord.MessageEmbed()
      .setColor("2f3136")
      .setDescription(`Espere as reações carregarem`)
        
     message.channel.send(loading1)
    .then(m => m.delete({ timeout: 6000 }))
    .then(() => message.channel.send(info))
      })
    }
