const Discord = require('discord.js');
exports.run = function(client, message, args) {



    const çekiliş = new Discord.RichEmbed()
    .setTitle("Tizay Çekiliş Sistemi", true)
    .addField("<a:tak:754671020824199178>  Çekilişi Yapan", `<@${message.author.id}>`, true)
    .addField("<a:kitap:754679388972253274>  Çekilişin Yapıldığı Kanal:", message.channel)
    .addField(`<a:kutlama:754606964738097172>  Çekilişi Kazanan`, `<@${message.guild.members.random().id}>`, true)
     .addField(`<a:hyqued:754672747296325662>  Yedek  Kazanan`, `<@${message.guild.members.random().id}>`, true)
     .addField(`<a:hyqued:754672747296325662>  Yedek  Kazanan 2`, `<@${message.guild.members.random().id}>`, true)
    .setColor("#ffd100")
    .setDescription('')
      message.react('<a:kutlama:754606964738097172>')
    return message.channel.sendEmbed(çekiliş);

    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hızlıçek"],
  kategori: 'çekiliş',
  permLevel: 2
};

exports.help = {
  name: 'hızlı-çek',
  description: 'Çekiliş yapar. (klasik)',
  usage: 'hızlı-çek'
};  