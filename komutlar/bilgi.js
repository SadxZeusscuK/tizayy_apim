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

 .addField("Hakkında Bilgiler", `

\`Nasıl adı bulundu\`: TimsahTim Owner : DangerK  Buldu ,
\`Tizay nedir\`: Tizay Bir Bilgisayarlar İçin Sesli Asistandır ,
\`Ne işe yarıyor\`: Bu Bilgi İçin ti!özellikler Komutunu Kullanın ,
\`Yapımcıları kim\`: KutaN ,
\`Geliştiricileri kim\`: DangerK , AhmetK , ZeusscuK ,
\`Nasıl indirebilirim\`: ti!indir Komutunu Kullanarak İndirebilirsiniz ,
\`Ne zaman yapıldı\`: 06.09.2020 Tarihinde Kuruldu ,
\`neden yapıldı\`: Telefonlarda Var Ancak Bilgisayarlarda Yok O Yüzden ,
\`kim tarafından denetlenicek\`: TimsahTim Yetkilileri Tarafından Denetlenecek ,
\`firması varmı\`: TimsahTim Adlı Firma Tarafından Yapılmıştır , 
\`hangi dil\`: Şuanlık Türkçe Dili Vardır Yakında Uluslararası Sesli Asistan Olacak ,

`)
 .setFooter("Tizay", client.user.avatarURL)
 message.channel.send(Embed).then(msg => msg.delete(43000));
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bilgi","bilgiler"],
  permLevel: 0
};

module.exports.help = {
  name: 'bilgi',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'bilgi'
};
