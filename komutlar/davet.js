const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajına davet linkimi **uçurdum**. <:bildiri:529652130253111296>');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter("RexSky BOT")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('[İşte Davet Linkim](https://discordapp.com/oauth2/authorize?client_id=511233969736384512&scope=bot&permissions=805314574)');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linkini gönderir.',
  usage: 'r!davet'
};
