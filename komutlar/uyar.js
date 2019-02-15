const Discord = require('discord.js');
const fs = require("fs");

exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Yetkin bulunmuyor!");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Uyarmam için birini etiketlemelisin.');
  if (reason.length < 1) return message.reply('Sebebi neydi ki?.');

  let dmsEmbed = new Discord.RichEmbed()
  .setTitle("Uyar")
  .setColor("#00ff00")
  .setDescription(`Hey, Uyarı aldığın sunucu: ${message.guild.name}`)
  .addField("Uyaran yetkili", message.author.tag)
  .addField("Sebep", reason);

  user.send(dmsEmbed);

  message.delete();
  
  message.channel.send(`${user.tag} Başarı ile uyarıldı`)

}

exports.help = {
  name: 'warn'
};

		exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['warn'], //kısa yol
  permLevel: 0  // Perm Level  0 herkez kullanabilir  /4 sadece sahib 
};

exports.help = {
  name: 'uyar', // burası olmassa komutu çalıştıramassın
  description: 'Kullanıcıyı uyarır.', // komut açıklaması
  usage: 'uyar @user sebeb' 
};