const Discord = require('discord.js');
const snekfetch = require("snekfetch");
exports.run = async (client, message, args) => {
  if (!args[0]) { 
    return message.channel.send("Hastebin'e ne göndermek istersen yazmalısın!") }
  snekfetch.post("https://hastebin.com/documents").send(args.slice(0).join(" ")).then(body => {
    message.channel.send("İşlem başarılı!\n:white_check_mark: işte linki: https://hastebin.com/" + body.body.key);
       });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hastebin'],
  permLevel: 0
};

exports.help = {
  name: 'hastebin',
  description: 'İstediğiniz Yazıyı Hastebin sitesine atıp linkini verir.',
  usage: 'r!hastebin'
};