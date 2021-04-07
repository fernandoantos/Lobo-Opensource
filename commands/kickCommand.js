exports.run = (client, message, [mention, ...reason]) => {
if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('Você não tem a permissão de expulsar membros!')

  if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.reply('Eu não tenho autorização para expulsar membros')
    

    if (message.mentions.members.size === 0)
      return message.reply("⚠️ Você deve mencionar o usuário a levar Kick");    
  
    const kickMember = message.mentions.members.first();
  
    kickMember.kick(reason.join(" ")).then(member => {
      message.reply(`✔️ ${member.user.username} Levou um belo de um Kick 👍.`);
    });
  };
