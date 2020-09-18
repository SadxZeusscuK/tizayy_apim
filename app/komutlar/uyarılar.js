const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = (client, message, args) => {

 if (!message.member.hasPermission("754293288684617750")) return message.reply(`Bu İşlemi Sadece Public Sorumluları Yapabilir...`);
  
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('<a:kilsurec:754672775725056100> **Uyarısına Bakacağın Şahısı Etiketlemelisin...**');

  if (db.has(`uyarılar_${user.id}`) === false) return message.reply("<a:kitap:754679388972253274> **Bu Kullanıcının Hiç Uyarısı Bulunmuyor...**")
  
  
  const embed = new Discord.RichEmbed()
  .setColor("#ffd100")
  .setAuthor(`${user.username} - Uyarı Bilgisi`, user.avatarURL)
  .addField("Uyarı Sayısı", db.has(`uyarılar_${user.id}`) ? db.fetch(`uyarılar_${user.id}`) : 0)
  message.channel.send({embed})
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["warns"],
  permLevel: 1,
    kategori: "moderasyon"
};

exports.help = {
  name: 'uyarılar',
  category: 'moderasyon',
  description: 'İstediğiniz kişinin uyarılarını gösterir.',
  usage: 'uyarılar <@kullanıcı>'
};