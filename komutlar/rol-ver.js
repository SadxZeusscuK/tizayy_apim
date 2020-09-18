const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "ti!";
   if (!message.member.hasPermission("MANAGE_ROLES")) {
  const embed = new Discord.RichEmbed()
   .setDescription(`<a:kilsurec:754672775725056100>  Bu Komutu Kullanabilmek İçin '**Rolleri_Yönet**' İznine Sahip Olmalısın !`)
    .setColor("RANDOM")
   .setFooter(bot.user.username, bot.user.avatarURL)

    message.channel.send(embed);
    return;
  }
  let rMember =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);
  if (!rMember)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription(
          `<a:hyqued:754672747296325662>  Bir Kullanıcı Girin.  \nÖrnek: ${prefix}rol-ver <@Kullanıcı> <Rol>`
        )
        .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("RANDOM")
    );
  let role =
    message.mentions.roles.first() ||
    message.guild.roles.find(rol => rol.name === args[1]);

  if (!role)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription(
          `<a:hyqued:754672747296325662>  Bir Rol Belirtin.  \nÖrnek: ${prefix}rol-ver <@Kullanıcı> <Rol>`
        )
        .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("RANDOM")
    );

  if (rMember.roles.has(role.id))
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription("<a:uyar:754604815102902323>  Bu Kullanıcı Zaten Bu Role Sahip!")
        .setColor("RANDOM")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  await rMember.addRole(role.id);
  message.channel.sendEmbed(
    new Discord.RichEmbed()
      .setDescription(
        `<a:dorutik:754607502741733437>  ${rMember} Adlı Kullanıcıya \`${role.name}\` Adlı Rol Verildi...`
      )
      .setColor("RANDOM")
      .setFooter(bot.user.username, bot.user.avatarURL)
  );
};

module.exports.conf = {
  aliases: ["rolver"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "rol-ver",
  description: "rol-ver",
  usage: "rol-ver"
};
