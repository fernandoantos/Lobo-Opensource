const Discord = require('discord.js');

exports.run = (client, message, args) => {
	if (!message.member.hasPermission('ADMINISTRATOR'))
		return message.reply('Não tem permissão para esse comando!');
	if (!message.guild.me.hasPermission('ADMINISTRATOR'))
		return message.reply('Não tenho permissão administrativas!');

	let membro = message.mentions.users.first();
	if (!membro)
		return message.reply(
			'Para poder executar o comando, tem que mencionar um membro!'
		);

	let role1 =
		message.guild.roles.cache.find(r => r.name == args[1]) ||
		message.guild.roles.cache.find(r => r.id == args[1]) ||
		message.mentions.roles.first() ||
		args.join(' ');

	var role =
		message.guild.roles.cache.find(r => r.name === args[1]) ||
		message.guild.roles.cache.find(r => r.id == args[1]) ||
		message.mentions.roles.first();

	if (!role) return message.reply(`esse cargo não existe nesse servidor.`);

	if (!role1)
		return message.reply(
			'Para poder executar o comando, tem que mencionar um cargo!'
		);

	const embed1 = new Discord.MessageEmbed()
		.setTitle('Cargo Update')
		.setDescription(
			`Membro: ${membro} 
      Cargo recebido: <@&${role1.id}> 
      Cargo dado por: ${message.author.username}`
		)
		.setFooter('© 2021', client.user.avatarURL())
		.setColor(`RANDOM`)
		.setTimestamp();

	message.guild.members.cache.get(membro.id).roles.add(role1);
 
	message.channel.send(embed1);
  };
