const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "ti!";
   if (!message.member.hasPermission("KİCK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription(`<a:uyar:754604815102902323> Bu Komutu Kullanabilmek İçin '**Kullanıcı_At**' İznine Sahip Olmalısın!`)
      .setColor("RANDOM");

    message.channel.send(embed);
    return;
  }

  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription("<a:hyquedsquad:754608509546397799> Sunucudan Atılacak Şahsı Etiketleyin.")
        .setColor("RANDOM")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`<a:uyar:754604815102902323>  ${u} Adlı Şahsın Sunucudan Atılmasını Onaylıyormusunuz ?`)
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["☑️"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 20000
    });
    reactions.on("end", () => sentEmbed.edit("<a:yanltik:754607685713788928> Atılma İşlemi İptal Edildi..."));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "☑️") {
        message.channel.send(
          `<a:dorutik:754607502741733437>  ${u} Adlı Şahıs Sunucudan Atıldı !`
        );

        message.guild.member(u).kick();
      }
    });
  });
};

module.exports.conf = {
  aliases: ['at'],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "kick",
  description: "kick",
  usage: "kick"
};