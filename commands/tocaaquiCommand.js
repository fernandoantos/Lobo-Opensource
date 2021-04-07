const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require("snekfetch")
exports.run = async (client, message, args) => {
      if (message.mentions.users.size < 1) return message.channel.send("Você precisa mencionar alguém pra fazer um toca aqui")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${user} Toca aqui ${message.author.username} `,{
                embed: {
                    image: {
                        url: "https://i.imgur.com/lO2xZHC.gif"
                    }
                }
            })
}
   