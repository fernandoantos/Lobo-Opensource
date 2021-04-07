const Discord = require('discord.js');

exports.run = async (client, message) => {
	let banperm = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setAuthor(
			'Você não tem permissão de "banir membros" para poder ver a lista de banimentos.'
		);
	let baninfo = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setAuthor(
			'Para receber a lista reaja com ✅'
		);
	let bansend = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setAuthor(
			'Ok eu enviei a lista. Caso não tenha recebido verifique suas configurações.')
	let bancancel = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setAuthor('O envio foi cancelado.');
	if (!message.member.hasPermission('SEND_MESSAGES'))
		return message.channel.send(banperm);
	try {
		let output = '';
		let i = 0;

		message.channel.send(baninfo).then(async msg => {
			await msg.react('✅');
			await msg.react('❌');
			const filtro = (reaction, user) =>
				['✅', '❌'].includes(reaction.emoji.name) &&
				user.id === message.author.id;
			const coletor = msg.createReactionCollector(filtro);

			coletor.on('collect', r => {
				switch (r.emoji.name) {
					case '✅':
						msg.reactions.removeAll;
						message.guild.fetchBans().then(async bans => {
							message.channel.send(bansend);
							bans.forEach(async ban => {
								i++;
								let bandm = new Discord.MessageEmbed()
									.setColor('RANDOM')
									.setAuthor(
										`Nome: ${ban.user.username}\nID: ${ban.user.id}\nBot: ${
											ban.user.bot
										}`
									);
								await message.author.send(bandm);
							});
						});
						break;
					case '⏹':
						msg.reactions.removeAll;
						msg.delete().then(message.channel.send(bancancel));
						break;
				}
			});
		});
	} catch (err) {
		message.channel.send('Um erro aconteceu! \n' + err).catch();
	}
};
exports.help = {
	name: 'listban',
	aliases: ['list', 'banlist']
};