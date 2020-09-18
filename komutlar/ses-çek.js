const Discord = require("discord.js");

exports.run = async (client, message, args) => {


if (!message.member.hasPermission("754293443613950002"))
return message.channel.send("Bu İşlemi Sadece Ses Sorumluları Yapabilir...");

  if (!message.member.voiceChannel) {
    return message.channel.send("**Bu Özelliği Kullanabilmek için Ses Kanalınızda Olmanız Gereklidir...**").then(m => m.delete(13000));
  }

  let TimsahTim = message.mentions.members.first();
  if (!TimsahTim) return message.channel.send("**Bir Kullanıcı Etiketlemelisin...**").then(m => m.delete(13000));

  let rol = message.mentions.roles.first();
  let member = message.guild.member(TimsahTim);

  if (!member.voiceChannel) return message.channel.send("**Etiketlenen Kullanıcı Bir Ses Kanalında Değil...").then(m => m.delete(13000));

  const voiceChannel = message.member.voiceChannel.id;
  if (!voiceChannel) return;

  member.setVoiceChannel(voiceChannel);

  const Studio  = message.member.voiceChannel.name;
  let embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .setDescription(
      message.author +
        " **Tarafından** " +
        TimsahTim +
        " **Kullanıcısı** `" +
        Studio +
        "`** Sesli Kanalına Çekildi.**"
    )
    .setFooter(
      `${message.author.tag}`,
      `${message.author.displayAvatarURL}`
    )
    .setTimestamp();
  message.channel.send(embed).then(m => m.delete(5000));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çek"],
  permLevel: 1
};
exports.help = {
  name: "çek",
  description: "çek",
  usage: "çek"
};