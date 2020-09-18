const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
 const kayıtlı = message.guild.roles.find(r => r.id === "754293447325909073"); //buraya kayıtlı rolünüzün id'sini koyun
  const misafir = message.guild.roles.find(r => r.id === "754293449645096961"); //buraya misafir rolünüzün id'sini koyun.
   const log = message.guild.channels.find(c => c.id === "754413214934106153"); //buraya kayıt log id koyun
  
    if(!message.member.roles.array().filter(r => r.id === "754293287422263328")[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
     return message.channel.send("Bu İşlemi Sadece Kayıt Sorumluları Yapabilir...");

      const embed = new Discord.RichEmbed()
       .addField(`Adlı Kullanıcı Cezalı Olarak Atandı...`)
       .setFooter("Tizay Güvenlik Sistemi")
       .setColor("#6278c5")
       log.send(embed)
       }
         }
      exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ["tehlike"],
       permLevel: 0
     };
    exports.help = {
        name: "tehlikeli",
       description: "tehlikeli",
      usage: "tehlikeli"
    };
