const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
message.channel.sendCode("asciidoc",`

r!steam <oyun>: Etiketlenen oyyunun bilgilerini verir. \nr!batlefield <oyuncu ismi>: verilen isimli kişinin bilgilerini verir. \nr!rocketleague <isim>: İsimli kişinin detaylarını verir. \nr!mcsunucu <ip>: Bilgileri verir. \nr!mcödül: Minecraft kutu açar. \nr!mcbaşarım: Başarım oluşturur. \nr!mcskin: Minecraft skini gösterir.

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
  name: 'oyun',
  description: 'Oyun Komutlarını gösterir.',
  usage: 'yardım'
};