const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Logonun Adını Yazarmısın...**")
let link = "https://dynamic.brandcrowd.com/asset/logo/1a2ebc7a-1b24-466a-bee7-9a0e8f5d8395/logo?v=4&text="+isim
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setImage(link)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["arrow", "arrow-logo"],
  kategori: 'logolar',
  permLevel: 0
};
exports.help = {
  name: 'ok-logo',
  description: 'Logo Yaparsınız',
  usage: ''
};