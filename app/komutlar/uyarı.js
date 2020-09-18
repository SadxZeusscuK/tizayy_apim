const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {

if (!message.member.hasPermission("754293288684617750")) return message.reply(`Bu İşlemi Sadece Public Sorumluları Yapabilir...`);

  const db = require('quick.db');
  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  if (db.has(`log_${message.guild.id}`) === false) return message.reply('Mod-Log Kanalı Ayarlanmadığı İçin Bu Komut Kullanılamıyor...');
  let modlog = message.guild.channels.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.reply('Uyaracağın Şahısı Etiketlemelisin...');
  if (reason.length < 1) return message.reply('Uyarı Sebebini Yazın...');
  if (user.id === message.author.id) return message.reply('Kendini Uyaramazsın...');
  
  
  const embed = new Discord.RichEmbed()
  .setColor("#ffd100")
  .addField('Yapılan İşlem', 'Uyarma')
  .addField('Uyarılan Kullanıcı', `${user.tag} (${user.id})`)
  .addField('Uyaran Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('Uyarı Sebebi', "```" + reason + "```")
  modlog.send(embed);
  
  message.guild.members.get(user.id).send(`<@${user.id}>, \n**${message.guild.name}** Adlı Sunucuda **${reason}** Sebebi İle Uyarıldın! \nKuralları Çiğnemeye Devam Edersen Sunucudan Son Uyarını Alıp, Atılabilir ya da Yasaklanabilirsin!`)
  
  db.add(`uyarılar_${user.id}`, 1)
  
  const embed2 = new Discord.RichEmbed()
  .setColor("#ffd100")
  .setDescription(`<@${user.id}> Adlı Şahıs **${reason}** Sebebi İle Uyarıldı!`)
  message.channel.send(embed2)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["u", "uyarı-ver"],
  permLevel: 2,
    kategori: "moderasyon"
};

exports.help = {
  name: 'uyar',
  category: 'moderasyon',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'uyar <@kişi-etiket> <sebep>'
};