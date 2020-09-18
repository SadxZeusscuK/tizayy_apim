const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setAuthor("Tizay", client.user.avatarURL)
.setColor("RANDOM") 
.setDescription(`

Dünyada İlk Oluşturulmuş ve Türk Yapım
Bilgisayarlar İçin Ayarlanmış
Yapay Zekalı Sesli Asistan
Tizay
`)

 .addField("Yardım Sistemi", `

\`logo-sistemi\`: Logo Tasarlama Menüsü ,
\`bilgi\`: Tizay Sesli Asistan Bilgilerine Bakarsınız , 
\`özellikler\`: Tizay Sesli Asistan Özelliklerine Bakarsınız , 
\`bulanık\`: Avatarınızı Bulnaık Paylaşır ,
\`ilginç-bilgi\`: Sizlere İlginç Bilgiler Paylaşır ,
\`indir\`: Tizay Sesli Asistan İndirirsiniz ,
\`sor\`: Tizay'a Sorarsınız Oda Cevaplar ,
\`youtube-arama\`: Youtube Üzerinden Bir Kanal Video Aratırsınız , 

`)
 .setFooter("Tizay", client.user.avatarURL)
 message.channel.send(Embed).then(msg => msg.delete(43000));
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım","help-system"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım-sistemi',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım-sistemi'
};
