const Discord = require ('discord.js')

  exports.run = async(client, message) => {

   const TimsahTim = new Discord.RichEmbed()
    
     .setcolor('RANDOM')
     .addField('⊹ JúsTí  Confirmation Görevleri', [`

 • ti!k - Kullanıcıyı Kayıt Edersin.
 • ti!i - Kullanıcının İsmini Değiştirirsin.
 • ti!t - ⊹ JúsTí  Confirmation Tag Gösterir.
 
 • ti!şk - Şüpheli Kullanıcı Olarak Atarsınız.
 • ti!kg - Güvenli Kullanıcı Olarak Atarsınız.
 
`])

 message.delete();


    return message.channel.send(TimsahTim).then(Tizay => Tizay.react("?"));

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rules'],
    permLevel: 0
}

exports.help = {
    name : 'kayıt-görevler',
    description: 'Hazır kuralları kanalınıza atar.',
    usage: '<prefix>kurallar/rules'
}