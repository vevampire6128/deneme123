const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
 
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  const cmesaj2 = await db.fetch(`sayac_${message.guild.id}`);
  
  let cmesaj = args.slice(0).join(' ')
  
  if(cmesaj === "sıfırla") {
    if(!cmesaj2) {
      message.channel.send(`Ayarlanmayan şeyi sıfırlayamazsın.`)
      return
    }
    
    db.delete(`cikismesaj_${message.guild.id}`)
    message.channel.send(`Çıkış mesajı başarıyla sıfırlandı.`)
    return
  }
  
      if (!cmesaj) {
        return message.channel.send(`Çıkış mesajını yazmalısın.`)
    }
  
    db.set(`cikismesaj_${message.guild.id}`, cmesaj)
    message.channel.send(`Çıkış mesajı \`${cmesaj}\` olarak ayarlandı.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['çıkış-mesaj'],
    permLevel: 3
}

exports.help = {
    name: 'çıkış-mesaj-ayarla',
    description: 'Çıkış Mesajını Ayarlar.',
    usage: 'çıkış-mesaj-ayarla <mesaj>'
}