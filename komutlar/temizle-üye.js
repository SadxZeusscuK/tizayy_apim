const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async function(client, message, args) {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu Komutu Kullanabilmek İçin '**Mesajları_Yönet**' İznine Sahip Olmalısın !`).then(msg => msg.delete(12000));
  
  var u = message.mentions.users.first()
  var x = args[1]
  if (!u) return message.reply("Birisini Etiketlemelisin !").then(msg => msg.delete(4000));
  
  if (!x) return message.reply("Silmek İstediğin Mesaj Miktarını Girin !").then(msg => msg.delete(4000));
  
  if (isNaN(x)) return message.reply("Silmek İstediğin Mesaj Miktarını Girin !").then(msg => msg.delete(4000));
  
  if (x < 1) return message.reply("**1** Adetten Az Mesaj Silemem !").then(msg => msg.delete(4000));
  if (x > 100) return message.reply("**100** Adetten Fazla Mesaj Silemem !").then(msg => msg.delete(4000));
  
 var timsahtim = await message.channel.fetchMessages({limit: x})
  
  if (u) {
    var timsahtim = timsahtim.filter(m => m.author.id === u.id)
    .array()
    .slice(0, x)
    }
    
  message.channel.bulkDelete(timsahtim)
  .catch(error => message.channel.send("Discord API Sistemi Zorlandığı İçin **14** Günden Önceki Mesajları Silemiyorum!")).then(msg => msg.delete(3000));
    
        
  message.channel.send(`**${args[0]}** Adet Mesaj Başarıyla **Tizay** Tarafından Silindi ! `).then(msg => msg.delete(5000));
	//message.delete();
    
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["sil-üye", "temizle-üye", "delete-user"],
  permLevel: 2,
    kategori: "moderasyon"
};

exports.help = {
  name: 'sil-üye',
  category: 'moderasyon',
  description: 'Belirtilen kişinin belirtilen miktarda mesajını siler.',
  usage: 'sil-üye <@kullanıcı> <miktar>'
};