const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!mute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send("Lütfen kullanıcıyı etiketleyin!");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Özür dileriz, yetkin bulunmuyor!");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bu kullanıcıyı muteleyemiyorum!");
  if (tomute.id === message.author.id) return message.channel.send("Kendini susturamazsın!");
  let muterole = message.guild.roles.find(`name`, "RexSky mute");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "RexSky mute",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.channel.send("Bir zaman belirtmediniz?!?");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> başarı ile mutelendi ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> Başarı ile susturulması kaldırıldı!`);
  }, ms(mutetime));

  message.delete();

}

module.exports.help = {
  name: "mute"
}

		exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sustur'], //kısa yol
  permLevel: 0  // Perm Level  0 herkez kullanabilir  /4 sadece sahib 
};

exports.help = {
  name: 'mute', // burası olmassa komutu çalıştıramassın
  description: 'Kullanıcıyu muteler', // komut açıklaması
  usage: 'mute @user 1s/d/h' 
};