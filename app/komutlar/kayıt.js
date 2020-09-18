const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const kayıtlı = message.guild.roles.find(r => r.id === "754293293075923075"); //buraya kayıtlı rolünüzün id'sini koyun
  const misafir = message.guild.roles.find(r => r.id === "754293449645096961"); //buraya misafir rolünüzün id'sini koyun.
  const log = message.guild.channels.find(c => c.id === "754413214934106153"); //buraya kayıt log id koyun
  const tag = "⊹";
  if(!message.member.roles.array().filter(r => r.id === "754293287422263328")[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
    return message.channel.send("Bu İşlemi Sadece Kayıt Sorumluları Yapabilir...");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir Kullanıcı Girin.")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir İsim Girin.")
      if(!yas) return message.channel.send("Bir Yaş Girin.")
    c.addRole(kayıtlı)
    c.removeRole(misafir)
    c.setNickname(`${tag} ${nick} | ${yas}`)
    const embed = new Discord.RichEmbed()
    .setAuthor("Kayıt Başarıyla Yapıldı...")
    .addField(`Kaydı Yapılan Kullanıcı\n`, `${c.user.tag}`)
    .addField(`Kaydı Yapan Yetkili\n`, `${message.author.tag}`)
    .addField(`Kullanıcı Yeni İsim\n`, `${tag} ${nick} , ${yas}`)
    .setFooter("Tizay Kayıt Sistemi")
    .setColor("#6278c5")
    log.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıt"],
  permLevel: 0
};
exports.help = {
  name: "k",
  description: "k",
  usage: "k"
};
