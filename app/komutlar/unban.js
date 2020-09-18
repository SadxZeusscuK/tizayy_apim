const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "ti!";
    if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription(`<a:kilsurec:754672775725056100> Bu Komutu Kullanabilmek İçin '**Kullanıcı_Engelle**' İznine Sahip Olmalısın !`)
      .setColor("RANDOM");

    message.channel.send(embed);
    return;
  }

  let u = args[0]
  if (!u) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription("<a:kilsurec:754672775725056100> Sunucudan Yasağı Kaldıralacak Şahısın ID Girin !")
        .setColor("RANDOM")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }

  const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setDescription(`<a:kilsurec:754672775725056100> ${u} Adlı Şahsın Yasaklanması Kaldırılmasını Onaylıyormusunuz ?`)
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["☑️"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("<a:yanltik:754607685713788928> Yasak Kaldırma İşlemi İptal Edildi !"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "☑️") {
        message.channel.send(
          `<a:reddorutik:754607641833242636> ${u} Adlı Şahısın Yasağı Kaldırıldı !`
        );

        message.guild.unban(u);
      }
    });
  });
};

module.exports.conf = {
  aliases: [],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "unban",
  description: "unban",
  usage: "unban"
};
