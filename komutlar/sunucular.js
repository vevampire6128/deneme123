const Discord = require("discord.js")
exports.run = (bot, message) => {
  if(message.author.id !== "495929799882047530" ){
    return  message.channel.send("**Hoop! Sen bu komutu kullanamazsın**")
    }
  
    
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - ÜYE SAYISI : **${guild.memberCount}**`, guild.id);
      embed.setColor('#D97634')
      embed.setTitle('BULUNDUĞUM SUNUCULAR')
      embed.setDescription(`Biz büyük bir aileyiz, ailede **${bot.guilds.size}** kadar sunucu var.`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucularım", "ailemiz"],
  permLevel: 0
};

exports.help = {
  name: "sunucular",
  description: "Shows all the servers the bot is in.",
  usage: "sunucularım"
};