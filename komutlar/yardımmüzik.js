const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
message.channel.sendCode("asciidoc",`= Müzik Komutlar! =

r!çal: istediğiniz müziği çalar. \nr!dur: Müziği durdururu. \nr!geç: Bir sonraki müziğer geçer. \nr!ses: sesi ayarlar. \nr!çalan: çalan şarkıyı gösterir. \nr!kuyruk: Kuyruktaki şarkıları gösterir. \nr!duraklar: Müziği duraklatır. \nr!devam: Müziğe devam eder.

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
  name: 'müzik',
  description: 'Müzik Komutlarını gösterir.',
  usage: 'yardım'
};