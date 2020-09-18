const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
   const embed = new Discord.RichEmbed()

var user = message.mentions.users.first() || message.author;
  
  const TimsahTim = new Discord.Attachment(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg`)
  const Tizay = new Discord.Attachment(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`) 
  const Studio = new Discord.Attachment(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.gif`)

message.channel.send(TimsahTim)

message.channel.send(Tizay)

message.channel.send(Studio)

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'avatar',
  description: 'Avatarınızı gönderir.',
  usage: 'avatar'
};