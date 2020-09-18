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

 .addField("Logo Sistemi", `

\`ok-logo\`: Ok Üzerinden Size Logo Tasarlar ,
\`mavi-logo\`: Mavi Font İle Yazdığınız Kelimeyle Desen Tasarlar , 
\`booking-logo\`: Kırmızı Font İle Yazdığınız Kelimeyle Desen Tasarlar , 
\`bubble-logo\`: Oyuncak Font İle Yazdığınız Kelimeyle Desen Tasarlar ,
\`bubble2-logo\`: Oyuncak Font2 İle Yazdığınız Kelimeyle Desen Tasarlar , 
\`bubble3-logo\`: Oyuncak Font3 İle Yazdığınız Kelimeyle Desen Tasarlar , 
\`comic-logo\`: Yorum Font İle Yazdığınız Kelimeyle Desen Tasarlar ,
\`cool-logo\`: Güzel Üzerinden Size Logo Tasarlar ,
\`discord-logo\`: Discord Font İle Yazdığınız Kelimeyle Desen Tasarlar , 
\`fire-logo\`: Ateş Font İle Yazdığınız Kelimeyle Desen Tasarlar , 
\`gold-logo\`: Altın Font İle Yazdığınız Kelimeyle Desen Tasarlar , 
\`gold2-logo\`: Altın Font2 İle Yazdığınız Kelimeyle Desen Tasarlar , 
\`graffiti-logo\`: Graffiti Font İle Yazdığınız Kelimeyle Desen Tasarlar , 
\`yeşil-logo\`: Yeşil Font İle Yazdığınız Kelimeyle Desen Tasarlar , 

`)
 .setFooter("Tizay", client.user.avatarURL)
 message.channel.send(Embed).then(msg => msg.delete(43000));
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["logo-sistemi","logo-system"],
  permLevel: 0
};

module.exports.help = {
  name: 'logo-sistemi',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'logo-sistemi'
};
