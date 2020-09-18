const Discord = require("discord.js");

const db = require("quick.db");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "h-";
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
      .setDescription(`⚜️ Bu Komutu Kullanabilmek İçin '**Yönetici**' İznine Sahip Olmalısın !`)
      .setColor("GREEN");

    message.channel.send(embed);
    return;
  }
  const timsahtim = args.join(" ");
  if (!timsahtim)
    return message.channel.send(
      new Discord.RichEmbed()
        .setTitle("Hatalı Kullanım !")
        .setDescription(`${prefix}sa-as aç && kapat`)
        .setColor("RED")
    );
  if (timsahtim === "aç") {
    db.set(`saas_${message.guild.id}`, "acik");
    message.channel.send(
      new Discord.RichEmbed()
        .setTitle("Tizay | Selam Sistemi")
        .setColor("BLUE")
        .setDescription("Bundan Sonra Birisi Selam Verdiğinde Tizay Cevap Verecek !")
    );
  } else if (timsahtim === "kapat") {
    db.delete(`saas_${message.guild.id}`);
    message.channel.send(
      new Discord.RichEmbed()
        .setTitle("Tizay | Selam Sistemi")
        .setColor("RED")
        .setDescription("Bundan Sonra Birisi Selam Verdiğinde Tizay Cevap Vermeyecek !")
    );
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["saas"],
  permLevel: 2,
  kategori: "sunucu"
};

exports.help = {
  name: "sa-as-sistemi",
  description: "Sa-As sistemini ayarlarsınız.",
  usage: "sa-as aç && kapat"
};