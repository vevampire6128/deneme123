const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message) => {
if (!message.member.hasPermission ('MANAGE_GUILD')) return message.channel.send (':x: | Sunucuyu yönet yetkin olmalı!')
  let rol = message.mentions.roles.first()
  
  db.set(`otorol_${message.guild.id}`, rol.id)
  message.channel.send(`:white_check_mark: | Otorol <@&${rol.id}> Olarak Ayarlandı!`)
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'otorol',
  description: 'JavaScript Rolü alırsın',
  usage: 'js'
};