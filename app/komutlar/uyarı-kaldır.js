const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = (client, message, args) => {
if (!message.member.hasPermission("754293288684617750")) return message.reply(`Bu İşlemi Sadece Public Sorumluları Yapabilir...`);

  const embed = new Discord.RichEmbed()
  
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('<a:kilsurec:754672775725056100> **Uyarıları Kaldıralacak Şahısı Etiketlemelisin!**')
  
  if (db.has(`uyarılar_${user.id}`) === false) return message.reply("<a:kitap:754679388972253274> **Bu Kullanıcının Hiç Uyarısı Bulunmuyor...**")

  db.delete(`uyarılar_${user.id}`)
  
  .setColor("#ffd100")
  .setAuthor(`${user.username} - Uyarı Bilgisi`, user.avatarURL)
  .setDescription(`<a:reddorutik:754607641833242636> <@${user.id}> Adlı Kullanıcının Başarıyla Uyarıları Kaldırıldı!`)
  message.channel.send({embed})
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["warn-delete", "uyarı-sil","uyarı-kaldır"],
  permLevel: 1,
    kategori: "moderasyon"
};

exports.help = {
  name: 'uyarı-sil',
  category: 'moderasyon',
  description: 'İstediğiniz kişinin uyarılarını kaldırır.',
  usage: 'uyarı-sil <@kullanıcı>'
};