module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Bu komutu kullanmaya yetkin bulunmuyor!")

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.sendMessage("Lutfen ya etiketleyin ya daID girin!");

        let role = message.guild.roles.find(r => r.name === "RexSky Mute")
        
        if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("Bu kullanıcı muteli değil!");

        await toMute.removeRole(role);
        message.channel.sendMessage("Başarı ile kullanıcının mutesi kaldırıldı!");

        message.delete();

     }
    
        module.exports.help = {
            name: "unmute"
        }
		
		exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''], //kısa yol
  permLevel: 0  // Perm Level  0 herkez kullanabilir  /4 sadece sahib 
};

exports.help = {
  name: 'unmute', // burası olmassa komutu çalıştıramassın
  description: 'Kullanıcının mutesini kaldırır..', // komut açıklaması
  usage: 'unmute @user ' 
};