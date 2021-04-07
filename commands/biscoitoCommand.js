const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require("snekfetch")
exports.run = async (client, message, args) => {
      if (message.mentions.users.size < 1) return message.channel.send("Você precisa mencionar alguém pra dar um biscoito")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${message.author.username}  Deu biscoito para ${user} `,{
                embed: {
                    image: {
                        url: "https://i.imgur.com/K6VoNp3.gif"
                    }
                }
            })
}
    