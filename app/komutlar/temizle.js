const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
  

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu Komutu Kullanabilmek İçin '**Mesajları_Yönet**' İznine Sahip Olmalısın !`).then(msg => msg.delete(12000));
  
if(isNaN(args[0])) {
  var errembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`Tizay | Temizleme Sistemi `, `Sileceğin Miktar Kadar Bir Rakam Belirtmelisin !`)
    .addField(`Doğru Kullanım:`, `${ayarlar.prefix}temizle <Temizlenecek Mesaj Sayısı>`)
return message.channel.send(errembed);
}

if (args[0] < 1) return message.reply("**1** Adetten Az Mesaj Silemiyorum !").then(msg => msg.delete(10000));
if (args[0] > 100) return message.reply("**100** Adetten Fazla Mesaj Silemiyorum !").then(msg => msg.delete(10000));
  
 
message.channel.bulkDelete(args[0]).then(deletedMessages => {
if (deletedMessages.size < 1) return message.reply("Discord API Sistemi Zorlandığı İçin **14** Günden Önceki Mesajları Silemiyorum!").then(msg => msg.delete(10000));
})        
message.channel.send(`**${args[0]}** Adet Mesaj Başarıyla **Tizay** Tarafından Silindi ! `).then(msg => {
    msg.delete(5000)
})

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["sil", "mesaj-sil", "mesajları-sil","clear"],
  permLevel: `Mesajları yönet yetkisine sahip olmak gerekir.`
};

exports.help = {
  name: 'temizle',
  category: 'yetkili',
  description: 'Belirtilen miktarda mesaj siler.',
  usage: 'temizle <miktar>'
};