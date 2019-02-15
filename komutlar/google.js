const Discord = require("discord.js");
const google = require("google");
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
  
  db.fetch(`karaliste_${message.author.id}`).then(i => {
  if (i == 'aktif') {
  return message.reply(`**${message.author.id} ID si karalistede gözüküyor. Komut kullanımı engellendi.**`)
  }});

  google.resultsPerPage = 1
  google.protocol = 'https'
  var nextCounter = 0

  google(args, function (err, res) {
    if (err) console.log(err);

    for (var i = 0; i < res.links.length; ++i) {
      var link = res.links[i];
      if (link.title == null) {
      return void(0)
    }
      if (link.href == null)    {
      return void(0)
    }
      const gEmbed = new Discord.RichEmbed()
        .setAuthor(`Bulundu! Aradığınız ${args} bulundu.`.split(',').join(' '))
        .setColor('RANDOM')
        .setThumbnail('http://www.stickpng.com/assets/images/5847f9cbcef1014c0b5e48c8.png')
        .addField('**Site;**', `**"${link.title}"**`)
        .addField('**Site Açıklaması;**', `"**${link.description}**"`)
        .addField('**Site Linki;**', `**"${link.href}"**`);

        message.channel.send(gEmbed);
    }

    if (nextCounter < 1) {
      nextCounter += 1
      if (res.next) res.next()
    }

  });

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['googıl', 'ara'],
    permLevel: 0
}

exports.help = {
    name: 'google',
    description: 'Googlede Arama Yapar. ',
    usage: 'r!google'
}