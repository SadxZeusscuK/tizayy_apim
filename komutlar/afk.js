const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  let user = message.author
  let sebep = args.join(" ")
  
  if (!sebep) return message.channel.send(`**Bir Sebep Yazmalısın.**`)//Kişinin AFK Olma Sebebi DEĞİŞTİREBİLİRSİNİZ!
  
  db.set(`afk_${user.id}`, sebep)
  message.channel.send(`\`${message.author.tag}\`**Adlı Kullanıcı \`${sebep}\` Sebebiyle AFK.**`)//Kişi AFK Olduktan Sonra Atılan Mesaj DEĞİŞTİREBİLİRSİNİZ!
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'afk',
  description: "AFK olmanızı sağlar.",
  usage: 'afk <sebep>'
}