const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
message.channel.sendCode("asciidoc",`= Sunucu ayarları komutları!  =

r!giriş-çıkış-ayarla <kanal>: Hoşgeldin ve Hoşbulduk resimlerinin atıldıgı kanalı belirler. \nr!küfür-engelle <aç/kapat>: Küfür engelleme filtresini açar. \nr!mod-log-ayarla <#kanal>: Mod-Log ayarlar. \nr!log-ayarla <#kanal>: Log kanalını ayarlar. \nr!sayaç <kişi sayısı> <#kanal>: Sayaç ayarlar. \nr!link-engelle <aç/kapat>: Link engelleme filtresini açar. \nr!ayarlar: Sunucuda ki ayarların açık olup olmadığını gösterir. \nr!stat-ayarla: ST-AT gibi bir panel ekler. \nr!stat-sıfırla: ST-AT paneli kaldırır.

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
  name: 'sunucuayarları',
  description: 'Sunucu Yetkili Komutlarını gösterir.',
  usage: 'yardım'
};