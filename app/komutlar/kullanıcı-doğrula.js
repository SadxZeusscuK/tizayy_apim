const Discord = require('discord.js');
exports.run = async(client, message, args, ops) => {
    message.delete()
    if (!message.member.roles.find("name", "⊹ JúsTí  Confirmation")) {//verilecek rol ismini Rol yazan yerlere yazın.
        return message.channel.send('Bu İşlemi Sadece Kayıt Sorumluları Yapabilir...')
            .then(m => m.delete(5000));
    }
    let timsahtimdoğrula1 = message.guild.member(message.mentions.users.first());
    let timsahtimdoğrula2 = message.guild.roles.find(`name`, "⊹ JúsTí  Confirmed");
    if (!timsahtimdoğrula2) return message.reply("Rol Bulunamadı Lütfen 'Doğulandı' Adıyla Rol Oluşturunuz.");
    if (!timsahtimdoğrula1) return message.reply("Bir Şahısı Etiketlemelisin.");
    await (timsahtimdoğrula1.addRole(timsahtimdoğrula2.id));
    let vUser = message.guild.member(message.mentions.users.first());
    let verifembed = new Discord.RichEmbed()
        .setTitle("Şahıs Doğrulama Sistemi")
        .setColor('RANDOM')
        .addField("Doğrulayan Yetkili", `${message.author.tag}`, true)
        .addField("Kanal", message.channel, true)
        .addField("Doğrulanan Şahıs", `${vUser}`, true)
        .setTimestamp();
    let timsahtimlog = message.guild.channels.find(`name`, "⊹bildiri");
    if (!timsahtimlog) return message.channel.send("Doğrulama Kullanıcı Log Kanalı bulunamadı. Lütfen 'log-kanalı' Adlı Kanal Oluşturunuz.`");
    timsahtimlog.send(verifembed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['verify', 'Verify', 'Doğrula', 'doğrula','dk'],
};

exports.help = {
  name: 'kullanıcı-doğrula',
  description: 'Kullanıcı İçin Doğrulandı Rolünü Verir.',
  usage: 'doğrula'
};
