const Discord = require('discord.js');

exports.run = (client, message, args) => {

if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu Komutu Kullanabilmek İçin '**Mesajları_Yönet**' İznine Sahip Olmalısın !`).then(msg => msg.delete(12000));

	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Yazmam İçin Her Hangi Bir Şey Yazmalısın.');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setDescription(`**${mesaj}**`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['söyle'],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};