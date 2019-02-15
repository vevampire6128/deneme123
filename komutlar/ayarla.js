const Discord = require('discord.js');


exports.run = (client, message, params) => {

        
        message.channel.send(':1234: **RexSky Botu için gerekli şeyler kuruluyor...**');
        
        message.guild.createChannel('mod-log');
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
        message.guild.createChannel("log");
        message.guild.createChannel('giriş-çıkış');
        message.guild.createChannel('📝kurallar📝');
        message.guild.createChannel('📣duyuru📣');
        message.guild.createChannel('📌video-paylaşım📌');
        message.guild.createChannel('🌏sohbet🌏');
        message.guild.createChannel('📷fotoğraf📷');
        message.guild.createChannel('📜bot-komutları📜');
        message.guild.createChannel('🔒yetki̇li̇🔒');
       
        message.channel.send(':white_check_mark: **Herşey Hazır** tek yapman gereken ayarlamalarını yapmak!');
        
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kur',
  description: 'Bot için gerekli ayarların kurulumunu sağlar.',
  usage: 'r!kur'
};