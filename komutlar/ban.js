const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

let xdemb = new Discord.RichEmbed()
        .setColor("#00ff00")
        .setTitle("Yasaklama")
        .addField("Açıklama:", `Ban Üyesi`, true)
        .addField("Nasıl Yapılır?:", `r!ban [user] [sebeb]`, true)
        .addField("Örnek:", `r!ban @vevampire spam`)

        if(!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== "495929799882047530") return message.channel.send("Özür dilerim, bunu yapmama yetkim yetmiyor!");

        let member = message.mentions.members.first();
        if(!member) return message.channel.send(xdemb)
        if(!member.bannable) return message.channel.send("Bu üyeyi banlayamam!")
        if(member.user.id === "495929799882047530") return message.channel.send("Bu benim sahibim!")

        if(member.id === message.author.id) return message.channel.send("Bilinmiyor")

        let reason = args.slice(1).join(" ");

        if(!reason) {
            res = "Sebesizce banlandın!";
        } else {
            res = reason
        }

        await member.ban(reason).catch(error => message.channel.send(`Sorry, I coldn't ban because of: ${error}`));

        let bean = new Discord.RichEmbed()
        .setColor("#00ff00")
        .setTitle(`Ban | ${member.user.tag}`)
        .addField("Kullanıcı", member, true)
        .addField("Yetkili", message.author, true)
        .addField("Sebeb", res)
        .setTimestamp()

        message.channel.send(bean)

        message.delete()

      }
      module.exports.help = {
        name: "ban"
      }
	  
	  		exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yasakla'], //kısa yol
  permLevel: 0  // Perm Level  0 herkez kullanabilir  /4 sadece sahib 
};

exports.help = {
  name: 'ban', // burası olmassa komutu çalıştıramassın
  description: 'Kullanıcıyu banlar', // komut açıklaması
  usage: 'ban @user sebeb' 
};