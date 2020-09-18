const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.guild) return message.author.sendMessage('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');

    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let tag = '⊹'
    const codare = new Discord.RichEmbed()
        .setColor("#ffd100")
    .setTitle(`Tizay Sunucu Sayım`)
        .addField("Sunucudaki Üye Sayısı", message.guild.memberCount)
        .addField("Çevrimiçi Üye Sayısı", message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
        .addField("Seslideki Üye Sayısı", count)
        .addField("Tagdaki Üye Sayısı", message.guild.members.filter(m => m.user.username.includes(tag)).size)
    message.channel.send(codare);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayı'],
    permLevel: 0
};

exports.help = {
    name: 'sunucu-say',
    description: 'Say',
    usage: 'say'
};