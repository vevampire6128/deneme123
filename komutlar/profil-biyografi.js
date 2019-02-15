const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
let kanal = JSON.parse(fs.readFileSync("././jsonlar2/pb.json", "utf8"));

exports.run = async (client, message, args) => {

   
 let secenekler = args.slice(0).join('+');
  

  
    if (!secenekler) {
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setTitle(`» Yanlış Kullanım!`)
          .addField(`Doğru Kullanım`, `${ayarlar.prefix}profil-biyografi  <biyografi>`)
        message.channel.send({embed})
        return
    }
      if(!kanal[message.guild.id]){
      
        kanal[message.author.id] = {
            gkanal: secenekler
        };
      }
    fs.writeFile("././jsonlar2/pb.json", JSON.stringify(kanal), (err) => {
        console.log(err)
    })
  
message.reply("Biyografi Belirlendi Birkaç Saniye İçinde Sisteme Yansıyacaktır").then(message => {
      console.log(` Bot yeniden başlatılıyor...`)
      process.exit(1);
    }).catch(console.error)

};
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hoş-geldin-ayarla', 'giriş-çıkış-belirle'],
    permLevel: `Yönetici izni gerekiyor.`
};

exports.help = {
    name: 'profil-biyografi',
    category: 'ayarlar',
    description: 'Giriş çıkış kanalını ayarlar.',
    usage: 'r?giriş-çıkış-ayarla <#kanal>'
};