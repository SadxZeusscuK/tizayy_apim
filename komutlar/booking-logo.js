const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Logonun Adını Yazarmısın...**")
let link = "https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=booking-logo&text="+isim
  const embed = new Discord.RichEmbed()
  .setColor('BLUE')
  .setImage(link)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["booking", "bookinglogo"],
  kategori: 'logolar',
  permLevel: 0
};
exports.help = {
  name: 'booking-logo',
  description: 'Logo Yaparsınız',
  usage: 'ti!skull-logo <yazı>'
};