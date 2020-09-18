const Discord = require('discord.js');
const ms = require("ms");

exports.run = (client, message, args) => {
    if (!message.member.hasPermissions("754293370335264839")) return message.channel.send("Bu İşlemi Sadece Susturma Sorumluları Yapabilir.")
    let kullanici = message.mentions.members.first()
    
    let süre = args[1]
    if (!süre) return message.reply("Süre Belirtmelisin..")
    if (!kullanici) return message.channel.send("Susturacağın Şahısı Etiketlemelisin..")
    kullanici.setMute(true, `Susturan Yetkili: ${message.author.tag} - Susturma süresi: ${süre}ms`)
        .then(() =>
            message.channel.send(`${kullanici} \`${süre}\`**ms** Ses Kanallarında Susturuldu.`))
        .catch(console.error);
        setTimeout(() => {

        kullanici.setMute(false,`Süresi Dolduğu için Susturması Kaldırıldı`)
        message.channel.send(`${kullanici} Süresi Dolduğu İçin Mikrafonu Açıldı.. `)

    }, ms(süre))
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["sesli-sustur"],
    permLevel: 0
};

exports.help = {
    name: 's',
    description: 'seslide susturur',
    usage: ""
};