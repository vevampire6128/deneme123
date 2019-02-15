const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`:x:yazı yazman gerek :x:`)).then(m => m.delete(5000));

     console.log("r!oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("RANDOM")

       .addField(`**Oylama**`, `**${question}**`)).then(function(message) {

         message.react('✅');

         message.react('❌');

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 0
};

exports.help = {
  name: 'oylama',
  description: 'Oylama Açar.',
  usage: 'r!oylama'
};
