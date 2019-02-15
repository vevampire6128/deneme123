const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
let kanal = JSON.parse(fs.readFileSync("././jsonlar/md.json", "utf8"));

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let channel = message.mentions.channels.first()
  
    if (!channel) {
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setTitle(`» Yanlış Kullanım!`)
          .addField(`Doğru Kullanım`, `${ayarlar.prefix}mod-log-ayarla <#kanal>`)
        message.channel.send({embed})
        return
    }

    if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
            gkanal: channel.id
        };
    }
  
    fs.writeFile("././jsonlar/md.json", JSON.stringify(kanal), (err) => {
        console.log(err)
    })
  
    const embed = new Discord.RichEmbed()
    .setDescription(`»Mod-Log kanalı başarıyla ${channel} olarak ayarlandı!`)
    .setColor("RANDOM")
    message.channel.send({embed})
  
};
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hoş-geldin-ayarla', 'giriş-çıkış-belirle'],
    permLevel: `Yönetici izni gerekiyor.`
};

exports.help = {
    name: 'mod-log-ayarla',
    category: 'ayarlar',
    description: 'Mog-Log ayarlar..',
    usage: 'r!mod-log-ayarla <#kanal>'
};