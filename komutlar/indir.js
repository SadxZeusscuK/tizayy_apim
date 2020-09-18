const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');




exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`${client.user.username} Yapay Zeka`)
        .setDescription(`[Sesli Asistan İndir](https://timsahtim.com)`)
        .setThumbnail("https://cdn.discordapp.com/attachments/725736833987903528/753561906882674688/Tizay_Logo_Tm.png")
        .setFooter(`${message.author.username} Başarıyla İndir Sistemini Kullandı...`, message.author.avatarURL)
        .setImage("https://cdn.discordapp.com/attachments/725736833987903528/753556307415531570/tizay_arka_plan.png") 
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed).then(msg => msg.delete(23000));
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["download"],
  permLevel: 0,
};

exports.help = {
  name: 'indir',
  description: '',
  usage: 'indir'
};