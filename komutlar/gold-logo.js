const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Logonun Adını Yazarmısın...**")
let link = "https://habbofont.net/font/palooza/"+isim+".gif"
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setImage(link)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gold","altın"],
  permLevel: 0
};
exports.help = {
  name: 'gold-logo',
  description: 'Logo Yaparsınız',
  usage: 'ti!logo <yazı>'
};