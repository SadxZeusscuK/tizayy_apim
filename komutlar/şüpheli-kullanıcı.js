const Discord = require('discord.js');
exports.run = async(client, message, args, ops) => {
    message.delete()
    if (!message.member.roles.find("name", "⊹ JúsTí  Confirmation")) {//verilecek rol ismini Rol yazan yerlere yazın.
        return message.channel.send('Bu İşlemi Sadece Kayıt Sorumluları Yapabilir...')
            .then(m => m.delete(5000));
    }
    let timsahtimşüpheli1 = message.guild.member(message.mentions.users.first());
    let timsahtimşüpheli2 = message.guild.roles.find(`name`, "⊹ JúsTí  Unconfirmed");
    if (!timsahtimşüpheli2) return message.reply("Rol Bulunamadı Lütfen '⊹ JúsTí  Unconfirmed' Adıyla Rol Oluşturunuz.");
    if (!timsahtimşüpheli1) return message.reply("Bir Şahısı Etiketlemelisin.");
    await (timsahtimşüpheli1.addRole(timsahtimşüpheli2.id));
    let vUser = message.guild.member(message.mentions.users.first());
    let verifembed = new Discord.RichEmbed()
        .setTitle("Şüpheli Şahıs Sistemi")
        .setColor('RANDOM')
        .addField("Şüpheleyen Yetkili", `${message.author.tag}`, true)
        .addField("Kanal", message.channel, true)
        .addField("Şüpheli Şahıs", `${vUser}`, true)
        .setTimestamp();
    let timsahtimlog = message.guild.channels.find(`name`, "⊹bildiri");
    if (!timsahtimlog) return message.channel.send("Şüpheli Kullanıcı Log Kanalı bulunamadı. Lütfen '⊹bildiri' Adlı Kanal Oluşturunuz.`");
    timsahtimlog.send(verifembed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['suspicious', 'suspicious', 'Şüpheli', 'şüpheli','şk'],
};

exports.help = {
  name: 'kullanıcı-şüpheli',
  description: 'Kullanıcı İçin Doğrulandı Rolünü Verir.',
  usage: 'doğrula'
};
