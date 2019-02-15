const db = require('quick.db');

exports.run = (client, message, args, func) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let preffix = db.fetch(`prefix_${message.guild.id}`)
  
    if(args[0] === "sıfırla") {
    if(!preffix) {
      message.channel.send(`<:hayir:530002979315777536> Ayarlanmayan şeyi sıfırlayamazsın.`)
      return
    }
    
    db.delete(`prefix_${message.guild.id}`)
    message.channel.send(`<:evet:530002978145304597> Prefix başarıyla sıfırlandı. Mevcut prefix \`!\``)
    return
  }
  
  if (!args[0])
    return message.channel.send(`<:hayir:530002979315777536> Bir prefix girmelisin.`)
  db.set(`prefix_${message.guild.id}`, args[0])
    message.channel.send(`<:evet:530002978145304597> Prefix başarıyla \`${args[0]}\` olarak ayarlandı.`)
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['prefix-ayarla'],
    permLevel: 0
};
  
  exports.help = {
    name: 'prefix',
    description: 'Prefix değiştirmenizi sağlar.',
    usage: 'prefix <prefix>'
};