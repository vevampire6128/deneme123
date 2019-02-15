const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("KICK_MEMBERS")  && message.author.id !== "495929799882047530") return message.channel.send("Bu komutu kullanmaya yetkin bulunmuyor!");
    
  let xdemb = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTitle("Kick Komutu")
  .addField("Açıklama:", `Kickleyici`, true)
  .addField("Kullanımı:", "r!kick [user] [sebeb]", true)
  .addField("Test:" ,"r!kick @vevampire spam")

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
      
    if(!member.kickable) 
      return message.channel.send(`{member.usage.tag} başarı ile kicklendi!`);
    
    let reason = args.slice(1).join(' ');
    if(!reason) {
      res = "Sebesizce Kicklendin!";
    }
    else {
      res = `${reason}`
    }
    
    await member.kick(reason)
      .catch(error => message.reply(`Hayır kicklenemedin, sebebi: ${error}`));

      let kick = new Discord.RichEmbed()
      .setColor("#00ff00")
      .setTitle(`Kick | ${member.user.tag}`)
      .addField("Kullanıcı", member, true)
      .addField("Yetkili", message.author, true)
      .addField("Sebeb", res)
      .setTimestamp()
      .setFooter(member.id)

      message.channel.send(kick)

    message.delete();
    
}
      module.exports.help = {
        name: "kick"
      }
	  
	  	  		exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['at'], //kısa yol
  permLevel: 0  // Perm Level  0 herkez kullanabilir  /4 sadece sahib 
};

exports.help = {
  name: 'kick', // burası olmassa komutu çalıştıramassın
  description: 'Kullanıcıyu kickler/atar', // komut açıklaması
  usage: 'kick @user sebeb' 
};