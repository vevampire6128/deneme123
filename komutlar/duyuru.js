const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply(':x:**Duyurmam İçin Birşey Yazmalısınız**:x:');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
		.setTitle("Duyuru")
    .setDescription(`**${mesaj}**`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuru'],
  permLevel: 0
};

exports.help = {
  name: 'duyuru',
  description: 'Sunucuda Duyuru Yapmanızı Sağlar.',
  usage: 'r!duyuru [Duyuruda Yazılacak Metin]'
};
