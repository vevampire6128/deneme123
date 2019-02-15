var request = require('request');

exports.run = async (client, message) => {
request('https://api.eggsybot.xyz/espri', function (error, response, body) {
    if (error) return console.log('Hata:', error); 
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body);
        message.channel.send(info.link); 
        
    }
})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'Espiri Yapar',
  usage: 'r!espiri'
};
