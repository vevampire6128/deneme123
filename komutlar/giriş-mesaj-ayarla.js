const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
 
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  const gmesaj2 = await db.fetch(`sayac_${message.guild.id}`);
  
  let gmesaj = args.slice(0).join(' ')
  
  if(gmesaj === "sıfırla") {
    if(!gmesaj2) {
      message.channel.send(`Ayarlanmayan şeyi sıfırlayamazsın.`)
      return
    }
    
    db.delete(`girismesaj_${message.guild.id}`)
    message.channel.send(`Giriş mesajı başarıyla sıfırlandı.`)
    return
  }
  
      if (!gmesaj) {
        return message.channel.send(`Giriş mesajını yazmalısın.`)
    }
  
    db.set(`girismesaj_${message.guild.id}`, gmesaj)
    message.channel.send(`Giriş mesajı \`${gmesaj}\` olarak ayarlandı.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['giriş-mesaj'],
    permLevel: 3
}

exports.help = {
    name: 'giriş-mesaj-ayarla',
    description: 'Giriş Mesajını Ayarlar.',
    usage: 'giriş-mesaj-ayarla <mesaj>'
}