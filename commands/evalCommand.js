const Discord = require('discord.js')
module.exports = {
    name: "eval",
    category: "Owner",
    usage: 'eval',
    aliases: ['execute'],
    description: "Comando privado",
    run: async (client, message, args, db) => {
     if (message.author.id == "775691594493067265" || message.author.id == "715625483211112458") {
    try {
         
        if(!args.join(' ')) return message.channel.send(`<@${message.author.id}> Insira algo para ser executado!`)
        let code = await eval(args.join(" "))
        
        if (typeof code !== 'string') code = require('util').inspect(code, { depth: 0 });
         message.channel.startTyping(5);
         message.channel.stopTyping(true);
         let embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setDescription('Eval')
        .addField('Entrada', `\`\`\`js\n${args.join(" ")}\`\`\``)
        .addField('Saída', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}
else{
    message.channel.send("So meu desenvolvedor, pode usar usar este comando")
}
    }
}
