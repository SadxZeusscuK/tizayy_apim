const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();

const botadi = "Hezoyy"

exports.run = async (bot, msg, args) => {
  //Hezoyy Kullanıcı Bilgi Altyapı TimsahTim Tarafından Yapılmış - Hazırlanmıştır.
        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
  
        let user = msg.mentions.users.first() || msg.author;
  
        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL;
        userinfo.id = user.id;
        userinfo.od1 = msg.guild.members.get(user.id).user.presence.game || "Oynadığı Bir Oyun Yok"
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `Rahatsız Etmeyin`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrimdışı`)
  //Hezoyy Kullanıcı Bilgi Altyapı TimsahTim Tarafından Yapılmış - Hazırlanmıştır.
        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)
  //Hezoyy Kullanıcı Bilgi Altyapı TimsahTim Tarafından Yapılmış - Hazırlanmıştır.
        userinfo.sonmesaj = user.lastMessage || "Son Yazılan Mesaj Bulunamadı." || "Son Yazılan Mesaj Gösterilemedi."
  
        userinfo.dctarih = moment.utc(msg.guild.members.get(user.id).user.createdAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
//Hezoyy Kullanıcı Bilgi Altyapı TimsahTim Tarafından Yapılmış - Hazırlanmıştır.
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
//Hezoyy Kullanıcı Bilgi Altyapı TimsahTim Tarafından Yapılmış - Hazırlanmıştır.
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.get(user.id).joinedAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
//Hezoyy Kullanıcı Bilgi Altyapı TimsahTim Tarafından Yapılmış - Hazırlanmıştır.
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
//Hezoyy Kullanıcı Bilgi Altyapı TimsahTim Tarafından Yapılmış - Hazırlanmıştır.
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
      //Hezoyy Kullanıcı Bilgi Altyapı TimsahTim Tarafından Yapılmış - Hazırlanmıştır.
        const uembed = new Discord.RichEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail(userinfo.avatar)
        .setTitle('Kullanıcı;')
        .addField(`Şu Anda Oynadığı Oyun`, userinfo.od1, false)
        .addField(`Durum`, userinfo.status, false)
        .setColor('03f2df')
        .addField(`Katılım Tarihi (Sunucu)`, userinfo.dctarihkatilma, false)
        .addField(`Katılım Tarihi (Discord)`, userinfo.dctarih, false)
        .addField(`Kimlik:`, userinfo.id, true)
        .addField(`Botmu:`, userinfo.bot, true)
        .addField(`Roller:`, `${msg.guild.members.get(user.id).roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') || "**Bu kullanıcıda hiçbir rol bulunmuyor**"}`, false)
        .addField(`Son Gönderdiği Mesaj:`, userinfo.sonmesaj, false)
        .setFooter(`${botadi} || Kullanıcı Sistemi`)
        msg.channel.send(uembed)
    }
//Hezoyy Kullanıcı Bilgi Altyapı TimsahTim Tarafından Yapılmış - Hazırlanmıştır.
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kb'],
  permLevel: 0
};
//Hezoyy Kullanıcı Bilgi Altyapı TimsahTim Tarafından Yapılmış - Hazırlanmıştır.
exports.help = {
  name: 'kullanıcı-bilgi',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'kullanıcı-bilgi'
};

//Hezoyy Kullanıcı Bilgi Altyapı TimsahTim Tarafından Yapılmış - Hazırlanmıştır.