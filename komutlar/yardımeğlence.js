const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
message.channel.sendCode("asciidoc",`= Eğlence Komutları! =

r!trigger: Trigger efekti koyar. \nr!slots: Slots oynanır. \nr!snipper: Snipper efekti koyar. \nr!discrim: Etiket arar. \nr!8ball: Sorulara belirli cevaplar verir. \nr!havadurumu <şehir>: Şehrin hava durumunu gösterir.\nr!sor <soru>: Sorulan soruya cevap verir.

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
  name: 'eğlence',
  description: 'Eğlence Komutlarını gösterir.',
  usage: 'eğlence'
};