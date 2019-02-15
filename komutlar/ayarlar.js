const Discord = require('discord.js');
const db = require('quick.db');
const fs = require('fs');
let girisCikis = JSON.parse(fs.readFileSync("././jsonlar/gc.json", "utf8"));

exports.run = async (client, message, args, member) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  let küfürengel = await db.fetch(`kufur_${message.guild.id}`)
  let kufurYazi;
  if (küfürengel == null) kufurYazi = '<:hayir:530002979315777536>'
  if (küfürengel == 'acik') kufurYazi = '<:evet:530002978145304597>'
  if (küfürengel == 'kapali') kufurYazi = '<:hayir:530002979315777536>'
  //
  
   let reklamfiltre = await db.fetch(`reklam_${message.guild.id}`)
  let reklamYazi;
  if (reklamfiltre == null){ reklamYazi = '<:hayir:530002979315777536>' }
  if (reklamfiltre == 'acik'){ reklamYazi = '<:evet:530002978145304597>' }
  if (reklamfiltre == 'kapali'){ reklamYazi = '<:hayir:530002979315777536>' }
  
  let logkanali = await db.fetch(`modlogK_${message.guild.id}`)
  let log;
  if (logkanali == null) log = '<:hayir:530002979315777536>'
  else log = `#${logkanali}`
  
 let giriskanal = await db.fetch(`giriscikisKanal_${message.guild.id}`)
 let girisYazi;
  if (giriskanal == null) girisYazi = '<:hayir:530002979315777536>'
  else girisYazi = `#${giriskanal}`
  
      let pre = await db.fetch(`pre_${message.guild.id}`)
  let preYazi;
  if (pre == null) preYazi = '<:hayir:530002979315777536>'
  if (pre == 'aktif') preYazi = '<:evet:530002978145304597>'
  if (pre == 'deaktif') preYazi = '<:hayir:530002979315777536>'
  
    let prefix = await db.fetch(`prefix_${message.guild.id}`)
    let prefix_;
  if (prefix == null) prefix_ = 'r!' 
  else prefix_ = `${prefix}`
  
const ayarlar = new Discord.RichEmbed()
      .setColor("BLUE")
  .setTitle(`${message.guild.name} adlı sunucunun ayarları:`)
.addField("Küfür engelleme <:ayarlar:530067187596263434>", `${kufurYazi}`)
.addField("Reklam engelleme <:ayarlar:530067187596263434>", `${reklamYazi}`)
.addField("Giriş Çıkış Kanalı", girisCikis[message.guild.id] ? `<#${girisCikis[message.guild.id].girisCikis}>` : `Ayarlanmamış`, true)
.addField("Log Kanalı <:ayarlar:530067187596263434>", `${log}`)
.addField("Premium <:ayarlar:530067187596263434>", `${preYazi}`)
.addField("prefix <:ayarlar:530067187596263434>", `${prefix_}`)
message.channel.send(ayarlar)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["panel"],
  permLevel: 0,
 };
 
 exports.help = {
 name: 'ayarlar',
 description: 'Avatarınızı veya etiketlediğiniz kişinin avatarını atar.',
 usage: 'r!avatar [@Kişi]'
 }