const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args) => {
if(message.author.id !== '495929799882047530' & message.author.id !== '495929799882047530') return message.channel.send('Bu Komutu Sadece Yapımcım Kullanabilir!')
  var premium = args[0]
var id = client.guilds.get(args[1])
if (!premium) return message.reply("Lütfen **aktif** ya da **deaktif Yazın!")
if (!id) return message.reply("Premium'un Aktif Edileceği Sunucunun ID sini Yazmalısın!")
  
  if (premium === 'aktif') {
 db.set(`pre_${id.id}`, "aktif")
  message.channel.send('Başarılı! ' + id.id + " ID sine Sahip Sunucu Artık Premium!")
  };

  if (premium === 'deaktif') {
    db.delete(`pre_${id.id}`)
  message.channel.send('Başarılı! ' + id.id + " ID sine Sahip Sunucu Artık Premium Değil!")
  };
  
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["pre","prever","premium-ver"],
    permLevel: 0,
};


exports.help = {
    name: 'premium',
    description: 'Premium vermenizi sağlar!',
    usage: 'r!pre'
}