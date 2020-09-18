const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Sunucu Yedek Al ve Yükle Komutları')
.setTimestamp()
.addField('ti!yedek-al','Sunucunuzun Yedeğini Alır.')
.addField('ti!yedek-yükle','Aldığınız Yedeği Geri Yükler.')
.setFooter('Sunucu Yedekleme Sistemi')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'sunucu-yedekleme-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};