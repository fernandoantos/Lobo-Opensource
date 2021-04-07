const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
const Discord = require("discord.js"); //livraria Discord.js
const client = new Discord.Client(); //Criando um novo Client
const config = require("./config.json");
const botDB = require('./database.js'); 
const emoji = require("./jsons/emojis.json");
const guildblacklist = require("./guildblacklist.js"); // Exporta a lista de membros banidos dos comandos em um array
const blacklist = require("./blacklist.js")
const chalk = require("chalk");
const firebase = require('firebase'); 
  var firebaseConfig = {
    apiKey: "AIzaSyBeB29Kw9PW7QB-MW6cUa_qr8zKQIWyHHk",
    authDomain: "database-lobo.firebaseapp.com",
    databaseURL: "https://database-lobo-default-rtdb.firebaseio.com",
    projectId: "database-lobo",
    storageBucket: "database-lobo.appspot.com",
    messagingSenderId: "765866561203",
    appId: "1:765866561203:web:69e99a337afa710cd26ac6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 const database = firebase.database();
console.log(`[${chalk.green("DATABASE")}] Conectado ao banco de dados`);
client.on('ready', () => {
    setInterval(() => {
       txts = [`💬 Conversando em  ${client.guilds.cache.size} servidores`,`🔭 Monitorando ${client.channels.cache.size} canais`,`🎉Obrigado aos ${client.users.cache.size} usuários!`,`Utilize lm!help para obter ajuda`, `me ajude votando em mim na top.gg: https://top.gg/bot/786953231187050517`, `🍕minha comida preferida é pizza`, `ultilize lm!invite para me adicionar`];
                 status = [ 'online','dnd', 'idle'];
                types = ['PLAYING','LISTENING', 'WATCHING'];
                urls = ['https://www.twitch.tv/noobsdosgames']
                client.user.setPresence({
                    activity: {
                        name: `${txts[Math.floor(Math.random() * txts.length)]}`,
                        type: `${types[Math.floor(Math.random() * types.length)]}`
                    },
                });
    }, 5000);
});


 client.on('message', message => { 
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) 
     return;
     if (guildblacklist.includes(message.guild.id)) {
  let embedblack = new Discord.MessageEmbed()
  .setDescription(`${emoji.nao} | ${message.author}, esse server está na minha blacklist`)
        return message.channel.send(embedblack)
    };
    
if (blacklist.includes(message.author.id)) {
  let embedblack1 = new Discord.MessageEmbed()
  .setDescription(`${emoji.nao} | ${message.author}, você  está na minha blacklist`)
        return message.channel.send(embedblack1)
    };
    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();
    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args, database);
    } catch (err) {
    console.error('Erro:' + err);
  } finally {
   let embed = new Discord.MessageEmbed()
  .setTitle('Comando execultado!')
    .setDescription(`Comando: \`lm!${command}\` \nUsuário: \`${message.author.tag} (${message.author.id})\` \nServer: \`${message.guild} (${message.guild.id}/${message.guild.memberCount} Membros)\` \nCanal: \`${message.channel.name} (${message.channel.id})\``)
    .setFooter(`Comando execultado`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();
    client.channels.cache.get('813783290573225984').send(embed).then(msg => {
  })
}
}); 

 

client.on("guildCreate", async guild => {
        
  const enviar = client.guilds.cache.get("794677379892903967").channels.cache.get("813783290573225984")


  let canal = "";

  guild.channels.cache.forEach((channel) => {

    if (channel.type == "text" && canal == "") {
      if (channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
        canal = channel;
      }
    }
}
)

  let convite = await canal.createInvite({
    maxAge: 0,
    maxUses: 0
  })

    let entrei2v = new Discord.MessageEmbed()
  .setColor('#303138')
  .setTitle('Fui adicionado')
  .setDescription(`Dono: ${guild.owner.user.username} \nId: ${guild.owner.user.id} \n**Informaçao do server** \nNome do server: ${guild.name} \nId: ${guild.id} \nInvite: [Convite](${convite})`)
  .setFooter('Agradecemos o incrível dono desse server')
  .setTimestamp()

  enviar.send(entrei2v)
});

client.on("guildMemberAdd", async (member) => { 

  let guild = await client.guilds.cache.get("794677379892903967");
  let channel = await client.channels.cache.get("794677380181786661");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "nomedoemoji");
  if (guild != member.guild) {

   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`Boas-vindas`)
      .setDescription(`**${member.user.tag}**, bem-vindo(a) ao **${guild.name}**! 
      Atualmente estamos com ${member.guild.memberCount} membros!`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();
 
    channel.send(`${member.user}`, embed);
    
 }
});


client.on("guildMemberRemove", async (member) => { 

  let guild = await client.guilds.cache.get("794677379892903967");
  let channel = await client.channels.cache.get("794677380181786662");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "nomedoemoji");
  if (guild != member.guild) {
    return console.log(`${message.guild.invite}`);
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`Adeus!`)
      .setDescription(`**${member.user.tag}**, saiu do servidor! 💔 Agora estamos com **${member.guild.memberCount} membros**`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();

    channel.send(embed);
  }
});

const { APIMessage, Message } = require('discord.js');

Message.prototype.quote = async function(content, options) {
    const reference = {
        message_id:
            (!!content && !options
                ? typeof content === 'object' && content.messageID
                : options && options.messageID) || this.id,
        message_channel: this.channel.id
    };

    const { data: parsed, files } = await APIMessage.create(
        this,
        content,
        options
    )
        .resolveData()
        .resolveFiles();

    let msg = await this.client.api.channels[this.channel.id].messages.post({
        data: { ...parsed, message_reference: reference },
        files
    });

    await this.channel.messages
        .fetch(msg.id)
        .then(message => (msg = message))
        .catch(err => {
            console.log(err.stack,);
        });

    return msg;
};

client.on('message', async message => {
    if (message.channel.type == 'dm') return;
    
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
        .setTitle(`olá ${message.author.tag}`)
         .setDescription("(<a:emoji:801210180619468810>) meu prefixo é `lm!` ultilize `lm!help` para obter ajuda! \n(<a:wumpus_floss:801210719504433202>)`Espero ter te ajudado!`\n \n(<a:alerta:799804301484621884>)[Meu servidor de suporte](https://discord.gg/TK7bVv5MRg) \n(<:discord:800835741957226496>)[Me adicione](https://discord.com/oauth2/authorize?client_id=786953231187050517&scope=bot&permissions=8)");


    let mention = [`<@${client.user.id}>`, `<@!${client.user.id}>`];
    mention.find(mention => {
        if (message.content === mention) {
      message.quote(message.author , embed).then(msg => {      
              
            });
        }
    });
});
console.log(`[${chalk.red("SYSTEM")}] Sucesso ao logar no Discord!`);
console.log(`${chalk.blue("PAI TA OFF")}`);

    
    client.login(process.env.TOKEN); //acessando o token do bot