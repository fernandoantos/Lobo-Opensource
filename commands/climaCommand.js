const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "Clima",
    description: "Verifica a previsão do tempo",

    async run (client, message, args){

    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){

        //if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Especifique um local')

        if(result === undefined || result.length === 0) return message.channel.send('***||<a:WayfarerNewLocation:770442879515623465>Localização inválida<a:WayfarerNewLocation:770442879515623465>||***');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Previsão do tempo para ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Fuso horário', `UTC${location.timezone}`, true)
        .addField('Tipo de grau', 'Celsius', true)
        .addField('Temperatura', `${current.temperature}°`, true)
        .addField('Vento', current.winddisplay, true)
        .addField('Parece', `${current.feelslike}°`, true)
        .addField('Umidade', `${current.humidity}%`, true)


        message.channel.send(`${message.author}`, weatherinfo)
        })        
    }
}