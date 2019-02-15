const moment = require("moment")
const Discord = require("discord.js");
const dateFormat = require('dateformat');
require('moment-duration-format')

exports.run = (client, message) => {

var user = '';
        let member = message.mentions.users.first();
        let author = message.author; 
        if(member) {
             var user = member;
        } else {
             var user = author;
        }    
    member = message.guild.member(user);
    let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
       if (roles.length < 1) roles = ['Bu Kullanıcının Rolü Yok!'];
    const millisCreated = new Date().getTime() - user.createdAt.getTime();
    const daysCreated = moment.duration(millisCreated).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
    const userJoined = moment.duration(millisJoined).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
    if(user.presence.status === "dnd"){
      var durum = '<:rahatszetmeyin:522775664919576630>'
    }
    else if(user.presence.status === "online"){
      var durum = '<:online:522774071616733211>'
    }
    else if(user.presence.status === "idle"){
      var durum = "<:beklemede:522775664827564042>"
    }
      else {
      var durum = "<:boda:522775664739221528>"
    }
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor(user.tag, user.avatarURL || user.defaultAvatarURL)
      .setThumbnail(user.avatarURL || user.defaultAvatarURL)
      .setTitle('Kullanıcı;')
      .addField("Şu anda oynadığı oyun", user.presence.game ? user.presence.game.name : 'Oynadığı bir oyun yok', true) 
      .addField('Durum:', `${durum}`)
      .addField('Katılım tarihi (Sunucu)', `${userJoined}`, true)
      .addField('Katılım Tarihi (Discord)', `${daysCreated}`, true)
      .addField('Kimlik:', user.id, true)
      .addField('Bot mu?:', user.bot ? '\n Evet' : 'Hayır', true)
      .addField('Rolleri:', message.guild.member(user).roles.map(m => m.name).join(' | '), true)
      .addField('Son gönderdiği mesaj:', user.lastMessage || 'Yok', true)
      .addField('Hesap Oluşturma tarihi:', moment(user.createdAt).format('DD/MM/YYYY'), true)

      .setFooter('RexSky BOT', client.user.avatarURL)
      .setTimestamp()
      message.channel.send(embed);
    
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  kategori: "Eğlence",
  aliases: ["kbilgim","kullanıcıbilgim","kullanıcı"],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Kullanıcı bilgilerini gösterir..',
  usage: 'r!kullanıcı <etiket/boş>'
};