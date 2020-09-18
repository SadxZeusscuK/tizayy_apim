const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   message.delete();

   let TimsahTimSoru = args.join(' ');

   let user = message.author.username

   if (!TimsahTimSoru) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`Oylama İçin Bir Mesaj Belirtmen Gerek!`)).then(m => m.delete(5000));

     console.log("Oylama Komutu" + message.author.username + '#' + message.author.discriminator + "Tarafından Kullanıldı.")
     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("#ffd100")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('Tizay', client.user.avatarURL)

       .addField(`**Tizay | Oylama**`, `**${TimsahTimSoru}**`)).then(function(message) {

         message.react("❎");

         message.react("✅");

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};