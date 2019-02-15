const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
message.channel.sendCode("asciidoc",`= Genel Komutlar! =

r!yaz: Botun ağzıyla mesaj yazdırır. \nr!sunucubilgi: Sunucu bilgilerini gösterir. \nr!kullanıcıbilgi: Kullanıcı ile ilgili bilgi verir. \nr!istatistik: Botun istatistiklerini gösterir. \nr!avatar: Kullanıcının avatarını gösterir. \nr!tavsiye: Bot yapımcısına tavsiye verir. \nr!bilgi: Bot ve sahip arasında bilgi verir. \nr!davet \nr!destek: Sunucuda destek talebi açmanızı sağlar.

# Komutlar hakkında yardım almak icin ${prefix}yardım <komut ismi>`);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `= ${command.help.name} =

Hakkında  :: ${command.help.description}
Kullanım  :: ${prefix}${command.help.usage}`);
    }
  }
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'genel',
  description: 'Genel Komutları gösterir.',
  usage: 'r!genel'
};