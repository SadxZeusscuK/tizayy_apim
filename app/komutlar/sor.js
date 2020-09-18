const Discord = require('discord.js');

const dangerkcevaplar = [                  'Bu Kesin.',
                                    'Kesinlikle Öyle.',
                                    'Kuşkusuz.',
                                    'Evet, Kesinlikle.',
                                    'Bana Bu Konuda Güvenebilirsin.',
                                    'Gördüğüm Kadarıyla, Evet.',
                                    'Büyük Olasılıkla.',
                                    'Görünüşe Göre, İyi.',
                                    'Evet.',
                                    'İşaretler Eveti Gösteriyor.',
                                    'Anlayamadım, Tekrar Edin.',
                                    'Daha Sonra Sor.',
                                    'Şimdi Söylemesen İyi Olur.',
                                    'Tahmin Edemiyorum...',
                                    'Konsantre Ol Ve Tekrar Sor.',
                                    'Buna Bu Konuda Güvenme.',
                                    'Cevabım, hayır.',
                                    'Kaynaklarım Hayır Diyor.',
                                    'Görünüşe Göre, Bu İyi Değil.',
                                    'Çok Şüpheli.',
                                    'Şüpheli.',
                                    'Büyük Olasılıkla, Hayır.',
                                    'İçgüdüm, Hayır Diyor.',
                                    'Kararsız Kaldım, Bir Daha Sormaya Ne Dersin?'                         
];

exports.run = function(client, message, args) {
    var tizaysoru = args.join(' ');

    var timsahtimcevap = dangerkcevaplar[Math.floor(Math.random() * dangerkcevaplar.length)];

    if(!tizaysoru) return message.reply('Bana Bir Soru Sormalısın.. **Örnek**: ti!sor <soru>')
    else message.channel.send(timsahtimcevap)

}; 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'güncel sor',
  usage: 'sor <soru>'
};