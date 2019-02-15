const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const cleverbot = require('cleverbot.io');

var bot = new cleverbot("Bns5ArZIalUL2jfz","NZuGbZlV4JNSBLESgIlGKwZ32hft3eIt");

exports.run = (client, message, params) => {
  const emoji = (client.emojis.find("name", "yukleniyor").toString())
  bot.setNick('asdsad');
  
  let yazi = params.slice(0).join(' ');
  if (yazi.length < 1) return message.channel.send(`<:evet:531081106359844884>Bir soru sormalısın.`);
  
  message.channel.send(`${emoji} | Cevap yükleniyor...`).then (message => {
  bot.create(function (err, session) {
    bot.ask(yazi, function (err, response) {
     message.edit(response);
 });
 
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'soru Sorar.',
  usage: 'r!sor <soru>'
};