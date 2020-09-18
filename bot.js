const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const weather = require("weather-js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader")(client);
const path = require("path");
const request = require("request");


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);


////////////////////////////////////////////////////////////////

client.on('guildMemberAdd', async member => {
  await member.addRole(`754293449645096961`) //id yazan yere verilecek rol (unregistered)
  await member.setNickname(``) //yeni gelen kullanıcının adını değiştirme
let member2 = member.user 
let zaman = new Date().getTime() - member2.createdAt.getTime()
var user = member2 
var takizaman = [];
if(zaman < 604800000) {
takizaman = '<a:yanltik:754607685713788928> Tehlikeli'
} else {
takizaman = `<a:dorutik:754607502741733437> Güvenli`}require("moment-duration-format");
 let zaman1 = new Date().getTime() - user.createdAt.getTime()
 const gecen = moment.duration(zaman1).format(` YY [Yıl,] DD [Gün,] HH [Saat,]`) 
 let dbayarfalanfilan = await db.fetch(`takidbayar${member.guild.id}`)
 let message = member.guild.channels.find(x => x.id === `754413214934106153`) //id yazan kısma kanal id'si [orn: register-chat] 
const taki = new Discord.RichEmbed()
 .setTitle(
     "⊹ JúsTí Lícht's  Topluluğuna Hoşgeldin!"
   )
   .setDescription(`<a:hoplarmbentont:754608651846811699> **Hoşgeldin!** ${member} **Seninle** ${message.guild.memberCount} **Kişiyiz.**
   
<a:saiaret:754606088208515143> **Ses Teyit Kanalına Katılıp Kaydını Yaptırabilirsin.**

<a:kitap:754679388972253274> <@&754293287422263328> **Seninle İlgilenecektir.**

<a:hyquedsquad:754608509546397799> **Tagımızı Alarak  ⊹  Bize Destek Olabilirsin.**


<a:kilsurec:754672775725056100> **Hesabın Oluşturulma Tarihi:** ${gecen}

<a:ykleniyor:754608079940878406> **Bu Kullanıcı** **|** **${takizaman}**
`)
.setImage('https://media.giphy.com/media/XeMGWFcmiis6CndxOl/giphy.gif')
.setColor('#6278c5')
message.send(taki)
 
         });
//



client.on("userUpdate", async (eski, yeni) => {
  var sunucu = client.guilds.get('754004364078612670'); // Buraya Sunucu ID
  var uye = sunucu.members.get(yeni.id);
  var normalTag = "⊹"; // Buraya Normal Tag (Yoksa boş bırakın)
  var ekipTag = "⊹"; // Sunucunun Tagı
  var ekipRolü = "754293292383993916"; // Tagın Rol IDsi
  var logKanali = "754466149365973032"; // Loglanacağı Kanalın ID

  if (!sunucu.members.has(yeni.id) || yeni.bot || eski.username === yeni.username) return;
  
  if ((yeni.username).includes(ekipTag) && !uye.roles.has(ekipRolü)) {
    try {
      await uye.addRole(ekipRolü);
      await uye.setNickname((uye.displayName).replace(normalTag, ekipTag));
      await uye.send(`<a:extkalp:726793602709323818>  Tagımızı Aldığın İçin Teşekkürler, Aramıza Sende Katıldın..`);
      await client.channels.get(logKanali).send(`<a:extkalp:726793602709323818>  ${yeni}  Adlı Kullanıcı Tagımızı Alarak Aramıza Katıldı..`);
    } catch (err) { console.error(err) };
  };
  
  if (!(yeni.username).includes(ekipTag) && uye.roles.has(ekipRolü)) {
    try {
      await uye.removeRoles(uye.roles.filter(rol => rol.position >= sunucu.roles.get(ekipRolü).position));
      await uye.setNickname((uye.displayName).replace(ekipTag, normalTag));
      await uye.send(`<a:arap:754670993947230288>  Tagımızı Bıraktığın İçin Ekip Rolün Alındı! Tagımızı Tekrar Alıp Aramıza Katılmak İstersen ;\nTagımız: **${ekipTag}**`);
      await client.channels.get(logKanali).send(`<a:arap:754670993947230288>  ${yeni} Adlı Kullanıcı Tagımızı Bırakarak Aramızdan Ayrıldı..`);
    } catch(err) { console.error(err) };
  };
});

///////////////////////////////

client.on('message', async message => {
  const db = require('quick.db')
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  let kullanıcı = message.mentions.users.first() || message.author 
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`)
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`)
  let sebep = afkkullanıcı
 
  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;
  
  if (message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(`\`${message.author.tag}\`** Adlı Kullanıcı Artık AFK Değil.**`)//AFK Olduktan Sonra İlk Mesajınızı Attığınız Zaman Çıkan Yazı DEĞİŞTİREBİLİRSİNİZ!
      db.delete(`afk_${message.author.id}`)
    }
    if (afkkullanıcı) return message.channel.send(`${message.author}\`${kullanıcı.tag}\`** Şu Anda AFK. Sebep : \`${sebep}\` **`)//Bunu DEĞİŞTİRMEMENİZİ ÖNERİRİM
  }

  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(`\`${message.author.tag}\`** Adlı Kullanıcı Artık AFK Değil.**`)//Aynı Şekilde İlk Yazınızı Attığınız Zaman Çıkan Yazı DEĞİŞTİREBİLİRSİNİZ!
      db.delete(`afk_${message.author.id}`)
    }
  }
});

//////////////////////////////////////////////////////////////////

client.on("guildMemberAdd", async message => {
  if (message.guild.id !== "754004364078612670") return;
  let channel = client.channels.get("755460631565697156");
  channel.setName("⊹ Toplam Üye : " + message.guild.memberCount);
});

//////////////////////////////////////

client.on("guildMemberAdd", async member => {
  if (member.guild.id !== "754004364078612670") return;
  let channel = client.channels.get("755460574283956424");
  channel.setName("⊹ Son Üye : " + member.user.username);
});

//////////////////////////////////////////////////////////////////


//---------------------------------SAĞ-TIK-BAN---------------------------------\\


client.on("guildBanAdd", async function(guild, user) {
  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());
  const TimsahTimYetkili = await guild.members.get(entry.executor.id);
setTimeout(async () =>{
    let logs = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'});
    if(logs.entries.first().executor.bot) return;
    
      guild.members.get(logs.entries.first().executor.id).removeRoles(guild.members.get(logs.entries.first().executor.id).roles) 
     setTimeout(()=>{ guild.members.get(logs.entries.first().executor.id).addRole("754293447325909073")/// VERİLECEK CEZALI ROL İD
    },3000)
const TimsahTimlog = guild.channels.find(c=> c.id ==="754413214934106153") // MSJ GDCK KANL ID 
const TimsahTim = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`<@${TimsahTimYetkili.id}> ${user} Adlı Kullanıcıya Sağ Tık Ban Attığı İçin Rollerini Aldım Ve <@754293447325909073> Rolünü Verdim.`) // sadece cezalı rol idsini yapıştırın onun dışında < > @ & karakterlerine karışmayın.
.setFooter('Tizay Güvenlik Sistemi')
TimsahTimlog.send(TimsahTim)
guild.owner.send(`Tizay Güvenliği | ** <@${TimsahTimYetkili.id}> Adlı Yetkili <@${user.id}>** Adlı Kullanıcıyı Banladı ve Yetkileri Güvenlik Sebebi İle Alındı!`)
},2000)
})


//---------------------------------SAĞ-TIK-BAN---------------------------------\\
















//---------------------------------SAĞ-TIK-KICK---------------------------------\\      SAĞ TIK KİCKİ HALLEDEMEDİM TEK GECEDE EN FAZLA BU KADAR OLUYOR


client.on("guildMemberRemove", async function(member) {
  let guild = member.guild;
  const entry = await guild.fetchAuditLogs({ type: "MEMBER_KICK" }).then(audit => audit.entries.first());
     const TimsahTimYetkili = entry.executor
    const TizayGüvenlik = guild.members.get(`${TimsahTimYetkili.id}`)
  setTimeout(async () => { // S T G 
    let logs = await guild.fetchAuditLogs({ type: "MEMBER_KICK" });
    if (logs.entries.first().executor.bot) return;
    if (logs.entries.first().target.id !== member.id) return;
 
    if (TizayGüvenlik.id === (``)) return; // ben
    if (TizayGüvenlik.id === (``)) return; // ben
    if (TizayGüvenlik.id === (``)) return; // ben
    if (TizayGüvenlik.id === (``)) return; // ben
    TizayGüvenlik.kick(TimsahTimYetkili) // ------------------ YETKİLİ KİCK ATARSA KİCK YER. ------------------- DÜZELTTİĞİM ZAMAN DUYURU OLARAK GEÇERİM BURAYADA EKLERİM.--------------\\

    const TimsahTimlog = guild.channels.find(c => c.id === "754466149365973032"); // log kanal id
    if (!TimsahTimlog) return guild.owner.send(`<@${TimsahTimYetkili.id}> <@${member.user.id}> Adlı Kullanıcıyı Sunucudan Attığı İçin Sunucudan Uzaklaştırıldı!`);
 TimsahTimlog.send(`<@${TimsahTimYetkili.id}>, <@${member.user.id}> Adlı Kullanıcıyı Sunucudan Attığı İçin Sunucudan Uzaklaştırıldı!`);  }, 2000);
});

//---------------------------------SAĞ-TIK-KICK---------------------------------\\















//---------------------------------ROL-SILINME-ENGEL---------------------------------\\


client.on("roleDelete", async (role) => { 
  const logs = await role.guild.fetchAuditLogs({ type: 'ROLE_DELETE' }).then(audit => audit.entries.first())
  const deleter = await role.guild.members.get(logs.executor.id);
  if(deleter.id == "754293285400477756") return; // Owner ID  //ROL SİLMESİNE İZİN VERİLEN İNSANLARIN İDLERİ (KOLAYLIK OLSUN DİYE İDSİNİ YAZDIKTAN SONRA ALTAKİNİ YAPABİLİRSİN)
  if(deleter.id == "754293285585158225") return; // Ceo ID
  if(deleter.id == "754293286277087302") return; // Titan ID
  let mention = role.mentionable;
  let hoist = role.hoist;
  let color = role.hexColor;
  let name = role.name;
  let perms = role.permissions;
  let position = role.position;
     const TimsahTimlog = role.guild.channels.find(c=> c.id ==="754467191235280978") // MESAJ ATICAĞI KANAL ID'Sİ
const TimsahTim = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`**<@${deleter.id}> ${role.name}** **Adlı Rol Sildi! [ Tekrar Oluşturuldu, Sahip Olduğu Tüm Roller Alındı... ] Tüm Yetkileri Alınıp <@&754293447325909073> Rolü Verildi.**`)
TimsahTimlog.send(TimsahTim)
  role.guild.owner.send(`**<@${deleter.id}> Yetkili  ${role.name}** **Adlı Rol Silindi! [ Tekrar Oluşturuldu ] Tüm Yetkileri Alınıp <@&754293447325909073> Rolü Verildi.**`)
       let roles = role.guild.members.get(deleter.id).roles.array()
                    try {
                         role.guild.members.get(deleter.id).removeRoles(roles)
                                                                             
                         }
              catch(err) {
                          console.log(err)
                         } 
    setTimeout(function(){
                         role.guild.members.get(deleter.id).addRole("754293447325909073") //CEZALI ROLÜ IDSİ
                         role.client.channels.get(`754467191235280978`).send(); // YİNE KANAL IDSİ LAN BEN BU SİSTEMİ NASIL YAPTIM AQ
                         }, 1500);
  role.guild.createRole({
    name: name,
    color: color,
    hoist: hoist,
    position: position,
    permissions: perms,
    mentionable: mention
  })
})


//---------------------------------ROL-SILINME-ENGEL---------------------------------\\















//---------------------------------ROL-OLUŞTURMA-ENGEL---------------------------------\\


 client.on('roleCreate', async (role) => {
 
    const entry = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first());
    const yetkili = await role.guild.members.get(entry.executor.id);
    const eskihali = role.permissions;
          console.log(eskihali)
  if(yetkili.id == "754293285400477756") return; // Owner ID  //ROL SİLMESİNE İZİN VERİLEN İNSANLARIN İDLERİ (KOLAYLIK OLSUN DİYE İDSİNİ YAZDIKTAN SONRA ALTAKİNİ YAPABİLİRSİN)
  if(yetkili.id == "754293285585158225") return; // Ceo ID
  if(yetkili.id == "754293286277087302") return; // Titan ID
   
             let TimsahTimlog = new Discord.RichEmbed()
             .setColor("BLACK")
             .setDescription(`<@${yetkili.id}> Yetkili **${role.name}** Adlı Rolü Oluşturdu! [ Sahip Olduğu Tüm Roller Alındı... ] <@&754293447325909073> Rolü Verildi...`)
             .setTimestamp()
             let roles = role.guild.members.get(yetkili.id).roles.array()
                    try {
                         role.guild.members.get(yetkili.id).removeRoles(roles)
                                                                             
                         }
              catch(err) {
                          console.log(err)
                         } 
    setTimeout(function(){
                         role.guild.members.get(yetkili.id).addRole("754293447325909073")// CEZALI ROL ID
                         role.client.channels.get(`754467191235280978`).send(TimsahTimlog); // MESAJIN GİDİCEĞİ KANALIN IDSI
                         }, 1500); //

                  });


//---------------------------------ROL-OLUŞTURMA-ENGEL---------------------------------\\















//---------------------------------KANAL-SILINME-ENGEL---------------------------------\\ 


client.on('channelDelete', async (channel) => {
 
 const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());
 const yetkili = await channel.guild.members.get(entry.executor.id); //
  if(yetkili.id == "754293285400477756") return; // Owner ID  //ROL SİLMESİNE İZİN VERİLEN İNSANLARIN İDLERİ (KOLAYLIK OLSUN DİYE İDSİNİ YAZDIKTAN SONRA ALTAKİNİ YAPABİLİRSİN)
  if(yetkili.id == "754293285585158225") return; // Ceo ID
  if(yetkili.id == "754293286277087302") return; // Titan ID

                                                                                                                                                                             
 let TimsahTimlog = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`<@${yetkili.id}> İsimli Yetkili ${channel.name} Adlı Kanalı Sildi! [ Sahip Olduğu Tüm Roller Alındı... ] <@&754293447325909073> Rolü Verildi...`)
.setTimestamp()
 let roles = channel.guild.members.get(yetkili.id).roles.array()
 try {
channel.guild.members.get(yetkili.id).removeRoles(roles)//
                                                                           
  }
 catch(err) {
 console.log(err)
 } 
 setTimeout(function(){
      channel.guild.members.get(yetkili.id).addRole("754293447325909073") // CEZALI ROL IDSİ
      channel.client.channels.get(`754467191235280978`).send(TimsahTimlog); // MESAJIN GİRDİCEĞİ KANAL IDSİ
               }, 1500);

                                                                               
                                                                                     
     });


//---------------------------------KANAL-SILINME-ENGEL---------------------------------\\
















//---------------------------------KANAL-OLUŞTURMA-ENGEL---------------------------------\\ 


client.on('channelCreate', async (channel) => {
 
 const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first());
 const yetkili = await channel.guild.members.get(entry.executor.id); //
  if(yetkili.id == "") return; //KANAL SİLMESİNE İZİN VERİLEN İNSANLARIN İDLERİ (KOLAYLIK OLSUN DİYE İDSİNİ YAZDIKTAN SONRA ALTAKİNİ YAPABİLİRSİN)
  if(yetkili.id == "") return; // Striga ID
  if(yetkili.id == "") return; // Hikmet ID
  if(yetkili.id == "") return; // VAY BENİM DEVREM NASILSIN ENİŞTE ID  


                                                                                                  


                                                                                
 let strigalog = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`<@${yetkili.id}> İsimli Yetkili ${channel.name} Adlı Kanalı Sildi Ve Rollerini Alıp <@&754293447325909073> Rolünü Verdim.`)
.setTimestamp()
 let roles = channel.guild.members.get(yetkili.id).roles.array()
 try {
channel.guild.members.get(yetkili.id).removeRoles(roles)//
                                                                           
  }
 catch(err) {
 console.log(err)
 } 
 setTimeout(function(){
      channel.guild.members.get(yetkili.id).addRole("754293447325909073") // CEZALI ROL IDSİ
      channel.client.channels.get(``).send(strigalog); // MESAJIN GİRDİCEĞİ KANAL IDSİ
               }, 1500);

                                                                               
                                                                                     
     });


//---------------------------------KANAL-OLUŞTURMA-ENGEL---------------------------------\\
















//---------------------------------------BOT-KORUMA-------------------------------------\\


client.on('guildMemberAdd', (member) => {
    const guild = member.guild;


 let sChannel = member.guild.channels.find(c => c.name === 'bot-koruma') // KANAL İSMİ

    if(member.user.bot !==true){

    } 
    else {
    if(!sChannel){
      member.guild.owner.send(`**:zap: Striga Bot Koruma koruma sistemi**
Sunucuya Bot Geldi Banladım !
Banlanan Bot: **${member.user.tag}**`)
      .then(() => console.log(`yasaklandı ${member.displayName}`))
    .catch(console.error);
       member.ban(member) 
    } else {
    sChannel.send(`**:zap: Striga Bot koruma sistemi**
Sunucuya bot çekildi banladım !
Banlanan Bot: **${member.user.tag}**`)
    .then(() => console.log(`yasaklandı ${member.displayName}`))
    .catch(console.error);
       member.ban(member) 
    }
  }  
  });


//---------------------------------------BOT-KORUMA-------------------------------------\\