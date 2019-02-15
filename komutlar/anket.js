const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
	let guild = message.guild
	let duyurular = guild.channels.find('name', 'anketler');
	if (!duyurular) return message.reply('`anketler` kanalını bulamıyorum.');
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Bir şey yazmadınız.');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setDescription(`**Anket**\n${mesaj}`)
    return guild.channels.get(duyurular.id).sendEmbed(embed);
	message.react("💩")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'anket',
  description: 'Sunucuda Anket yapmanızı sağlar.',
  usage: 'r!anket [yazı]'
};