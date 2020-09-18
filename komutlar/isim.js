const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const log = message.guild.channels.find(c => c.id === "754413214934106153"); //buraya kayıt log id koyun
  const tag = "⊹";//YAZMAK İSTERSENİZ TAGINIZ ( BOŞ BIRAKABİLİRSİNİZ )
  const dogrulandi = client.emojis.find(emoji => emoji.name === "hyqued"); // örn (emoji => emoji.name === "siyah");
  if(!message.member.roles.array().filter(r => r.id === "754293287422263328")[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
    return message.channel.send("Bu İşlemi Sadece Kayıt Sorumluları Gerçekleştirebilir.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir Kullanıcı Etiketleyin..")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir İsim Girin..")
      if(!yas) return message.channel.send("Bir Yaş Girin..")
    c.setNickname(`${tag} ${nick} | ${yas}`)
    const embed = new Discord.RichEmbed()
    .setDescription(`**<@${c.user.id}>** Kullanıcının Yeni Adı **${tag} ${nick} | ${yas} !**`)
    .setColor("0xf3f5a7")
    log.send(embed)
    message.react(dogrulandi)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "nick"],
  permLevel: 0
};
exports.help = {
  name: "nick", 
  name: "isim",
  description: "",
  usage: ""
};
   