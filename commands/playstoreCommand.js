const Discord = require("discord.js");
const PlayStore = require("google-play-scraper");
const EmbedColor = ``;

//By Legendary Emoji | :D

module.exports = {
  name: "playstore",
  aliases: ["loja ps", "loja de aplicativos do Google", "ps"],
  description: "Mostre as informações do seu nome sobre o aplicativo da Play Store!",
  usage: "Loja de jogos <Application Name>",
  category: "Members",
  run: async (client, message, args) => {
    if (!args[0])
      return message.channel.send(
        `Por favor, dê algo para pesquisar - ${message.author.username}`
      );

    PlayStore.search({
      term: args.join(" "),
      num: 1
    }).then(Data => {
      let App;

      try {
        App = JSON.parse(JSON.stringify(Data[0]));
      } catch (error) {
        return message.channel.send(
          `Nenhum aplicativo encontrado  ${message.author.username}!`
        );
      }

      let Embed = new Discord.MessageEmbed()
        .setColor(EmbedColor || "RANDOM")
        .setThumbnail(App.icon)
        .setURL(App.url)
        .setTitle(`${App.title}`)
        .setDescription(App.summary)
        .addField(`Preço`, App.priceText, true)
        .addField(`Desenvolvedor(a)`, App.developer, true)
        .addField(`Ponto`, App.scoreText, true)
        .setFooter(`Comando Usador Por ${message.author.username}`)
        .setTimestamp();

      return message.channel.send(Embed);
    });
  }
};