const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
  if(message.author.id !== "495929799882047530"){
  return  message.channel.send("Hoop! Sen bu komutu kullanamazsın")
  }
message.channel.sendMessage(' ```Botun yeniden başlatılmasına onay veriyorsanız 30 saniye içinde evet yazın.``` ')
.then(() => {
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage(`**Bot yeniden başlatılıyor...**`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot yeniden başlatılıyor...`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage('**Yeniden başlatma işlemi iptal edildi.**');
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
  name: 'reboot2',
  description: '[Admin Komutu]',
  usage: 'reboot'
};
