const Discord = require('discord.js');
const fs = require('fs'); 
let kanal = JSON.parse(fs.readFileSync("././jsonlar/md.json", "utf8"));
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı', '`sustur` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();

  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Susturulmuş');
  if(!kanal[message.guild.id]) return message.channel.send("Mod-Log Kanalı Ayarlı Değil Lütfen Kanalı Ayarlayınız Ayarlamak İçin r!mod-log ayarla #kanal")
  if (!muteRole) return message.reply('`Susturulmuş` adlı bir rol bulamıyorum.').catch(console.error);
  if (reason.length < 1) return message.reply('Susturma sebebini yazmalısın.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('Kimi susturacağını yazmalısın.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('» Eylem', 'Sustur')
    .addField('» Kullanıcı', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('» Yetkili', `${message.author.username}#${message.author.discriminator}`)
    .addField('» Sebep', reason);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('Gerekli izinlere sahip değilim.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      guild.channels.get(kanal[message.guild.id].gkanal).sendEmbed(embed).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      guild.channels.get(kanal[message.guild.id].gkanal).sendEmbed(embed).catch(console.error);
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sustur',
  description: 'İstediğiniz kişiyi  susturur.',
  usage: 'sustur [kullanıcı] [sebep]'
};
