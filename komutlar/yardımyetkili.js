const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
message.channel.sendCode("asciidoc",`= Yetkili Komutları! =

r!oylama <konu>: Oylama başlatır. \nr!duyuru <duyuru yazısı>: duyuru yapar. \nr!temizle <kaç tane>: Mesaj siler. \nr!ses-kanal-aç <isim>: sesli kanal açar. \nr!yazı-kanal-aç <isim>: Yazılı kanal açar. \nr!çekiliş <konu>: Çekiliş başlatır.\nr!ban @user sebeb: Kişiyi banlar! \nr!kick @user sebeb: Kişiyi sunucudan atar!\nr!uyar @user sebeb: Kişiyi uyarır!\nr!mute @user 1s/d/h: Kişiyi muteler!\nr!unmute @user: Kişinin mutesini açar!

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
  name: 'yetkili',
  description: 'Yetkili Komutlarını gösterir.',
  usage: 'yardım'
};