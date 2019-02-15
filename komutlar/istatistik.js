const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg, params) => {
  console.log("r!istatistik komutu " + msg.author.username + '#' + msg.author.discriminator + " tarafından kullanıldı.")

   const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("» Botun Sahibi", "vevampire#9999",)
  .addField("» Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB")
  .addField("» Çalışma süresi", duration)
  .addField("» Kullanıcılar", client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString())
  .addField("» Sunucular", client.guilds.size.toLocaleString())
  .addField("» Kanallar", client.channels.size.toLocaleString())
  .addField("» Discord.JS sürüm", "v"+Discord.version)
  .addField("» Ping", client.ping+" ms")
  .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=511233969736384512&scope=bot&permissions=805314574)` + "** | **" + `[Destek Sunucusu](https://discord.gg/vdyatt6)`)
  .addField("» Botun Dili"," <:js:528290161788977152> Javascript ") 
  .addField("» Diğer Linkler", `[İnternet Sitesi](https://rxsky.tk)` + "** | **" + `[DBL]Aktif Olacak!`)
  return msg.channel.send(istatistikler);
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["istatistik","i"],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistik gösterir.',
  usage: 'r!istatistik'
};
