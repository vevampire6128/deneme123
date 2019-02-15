const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	   message.delete();

	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`sunucubilgi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
		.setFooter("RexSky Bot")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('►Ad:', message.guild.name)
    .addField('►ID', message.guild.id)
    .addField('►Ana kanal :', message.guild.defaultChannel)
    .addField('►Bölge ', message.guild.region)
    .addField('►Üye sayısı :', message.guild.memberCount)
    .addField('►Sahibi :', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('►Kanal sayısı :', message.guild.channels.size)
    .addField('►Oluşturulma tarihi :', message.guild.createdAt)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucubilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'r!sunucubilgi'
};
