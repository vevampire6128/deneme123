const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  const db = require('quick.db')  
  db.fetch(`karaliste_${message.author.id}`).then(i => {
    if (i == 'aktif') {
    return message.reply('Botun Karalistesindesin')
    }
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor("Bir çay içtin!")
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription('')
		.setImage(`https://images-ext-1.discordapp.net/external/JYiaThRlKzJ80pvIAKWGAzz1YTU84Y-sR17HzUWznHo/http/cdn.yemek.com/mncrop/940/625/uploads/2015/04/turkiyede-cay-kulturu22.jpg?width=374&height=250`)
    return message.channel.sendEmbed(sunucubilgi);
    }
})}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çayiç',
  description: 'Çay İçer.',
  usage: 'r!çayiç'
};
