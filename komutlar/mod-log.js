const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require("../ayarlar.json");
exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:bakmda:754609117972135996> Bu İşlemi Sadece Sunucu Yetkilileri Kullanabilir...`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`Modlog Kanalı Zaten Ayarlı Değil...`);
    db.delete(`log_${message.guild.id}`)
   message.channel.send(`ModLog Kanalı Başarıyla Sıfırlandı...`);
  
    return
  }
  
if (!logk) return message.channel.send(`Bir Modlog Kanalı Belirtmelisin...`);

db.set(`log_${message.guild.id}`, logk.id)

message.channel.send(`Mod-Log Kanalı Başarıyla ${logk} Olarak Ayarlandı...`);
 message.react('<a:bakmda:754609117972135996>')

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log','modlog','log-ayarlama','logayarla','log','vkanal','kayıtkanalı','d'],
    permLevel: 2 ,//Kendi permlerinize göre ayarlayın,
  kategori:'moderasyon'
};

exports.help = {
    name: 'mod-log',
    description: 'Mod-Log kanalını belirler.',
    usage: 'mod-log <#kanal>'
};
   