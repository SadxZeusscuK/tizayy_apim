const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setAuthor("Tizay", client.user.avatarURL)
.setColor("RANDOM") 
.setThumbnail("https://cdn.discordapp.com/attachments/725736833987903528/753561906882674688/Tizay_Logo_Tm.png")
.setDescription(`

Dünyada İlk Oluşturulmuş ve Türk Yapım
Bilgisayarlar İçin Ayarlanmış
Yapay Zekalı Sesli Asistan
Tizay
`)

 .addField("Özellikler", `

\`Video açma\`: İnternet'ten İstediğiniz Video'yu Açarsınız ,
\`Google araması yapma\`: Google'da Aratmak İstediğiniz Projeyi Aratırsınız ,
\`Youtube'da arama yapma\`: Youtube'da İstediğiniz Videoyu Aratırsınız ,
\`Araştırma yapma\`: Ödeviniz Varsa Proje , Özet Gibi Araştırabilirsiniz ,
\`Sohbet etme\`: Tizay İle Sohbet Edersiniz ,
\`Kur çeviri\`: 10 Dolar'ı Kaç Türk Lirasına Çevirip Bakabilirsiniz ,
\`Program açma\`: Bilgisayarınızda İstediğiniz Programı Açar ,
\`İngilizce Türkçe çeviri\`: Yazdığınız Kelimeyi İngilizceden Türkçeye Çevirir ,
\`Hava durumu\`: Her Hangi Bir İl, İlçe Hava Durumuna Bakarsınız ,

{ İlerleyen Güncellemelerde Yeni Komutlar, Özellikler Eklenecek }
`)
 .setFooter("Tizay", client.user.avatarURL)
 message.channel.send(Embed).then(msg => msg.delete(23000));
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["özellikler","özellik"],
  permLevel: 0
};

module.exports.help = {
  name: 'özellikler',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'özellikler'
};
