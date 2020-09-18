const Discord = require('discord.js')
const ms = require("ms");

exports.run = async (client, message, args) => {//DangerK#9999
const mb = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setFooter(`timsahtim`)
.setTimestamp()

const emb = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setFooter(`timsahtim`)
.setTimestamp()

if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(mb.setDescripton(`Bu Komutu Kullanabilmek İçin Yetkiniz Yetersiz !`))
let timsahtim = message.mentions.users.first()
let chimp = message.mentions.roles.first()

if(!args[0]) return message.channel.send(mb.setDescription(`Bir Kullanıcı Etiketlemelisin.`))
if(!timsahtim) return message.channel.send(mb.setDescription(`**${args[0]}**, Kullanıcısını Sunucuda Bulamıyorum.`))
  
if(!args[1]) return message.channel.send(mb.setDescription(`Bir Rol Etiketlemelisin.`))
if(!chimp) return message.channel.send(mb.setDescription(`**${args[1]}**, Rolünü Sunucuda Bulamadım.`))
  
if(!args[2]) return message.channel.send(mb.setDescription(`Ne Kadar Süre ROlün Kalacağını Belirtmelisin.`))
let süre = args[2];

message.guild.members.get(timsahtim.id).addRole(chimp.id)
message.channel.send(emb.setDescription(`${chimp} İsimli Kullanıcıya ${message.author.username} Tarafından ${süre.replace(/d/, ' gün').replace(/s/, ' saniye').replace(/m/, ' dakika').replace(/h/, ' saat')} Boyunca ${timsahtim} Rolü Verildi.`)).then(m => {
setTimeout(async () =>{  
message.guild.members.get(timsahtim.id).removeRole(chimp.id)
m.edit(emb.setDescription(`${chimp}, İçin Rol Süresi Doldu.`))
}, ms(süre))
})
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'süreli-rol'
};// TimsahTim Studio's