const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  let kayityetkili = '495654615946100749'
  let ayityetkili = '322331984296673280' //KAYIT YETKİLİSİ ID
  let verbuse = '708382186377838664' //VERİLECEK ROL ID
  let verbusem = '708382186377838664' //VERİLECEK ROL ID
  let isimön = 'ℭ|' //DEĞİŞTİRİLECEK İSMİN ÖNÜNE GELEN
  let isimson = '*' //DEĞİŞTİRİLECEK İSMİN SONUNA GELEN

//TİK İSMİNDE BİR EMOJİNİZ OLMASI LAZIM (Hareketli Olsa Daha Güzel Gözükür)

  if(!message.member.roles.has(kayityetkili))
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(`Bu komutu kullanabilmek için \`Kayıt\` yetkisine sahip olmasınız.`);
  let member = message.mentions.members.first()
  let isim = args.slice(1).join(" ")
  if (!member) return message.channel.send('Bir Üye Etiketlemelisin💖')
  if (!isim) return message.channel.send('Bir İsim Yazmalısın 💖')

  setTimeout(function(){
  member.setNickname(`${isimön}${isim}${isimson}`)
  },2000)
  setTimeout(function(){
  member.addRole(verbuse)
  member.addRole(verbusem)
  },3000)
  setTimeout(function(){
  member.removeRole(albuse)
  member.addRole(albusem)
  },4000)

 const emoji = client.emojis.find(emoji => emoji.name === "tik");
 let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`✅ Kayıt işlemi Başarılı ✅

**Kayıt edilen kullanıcı :** ${isimön}${isim}${isimson}

**Kayıt işleminde verilen rol :** <@&${verbuse}>, <@&${verbusem}>

**Kayıt işleminde alınan rol :** <@&${albuse}>, <@&${albusem}>
`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`)
  .setImage("https://giphy.com/gifs/IeS4zb4iAVGZyFwCOZ/html5")
message.channel.send(embed)
message.react(emoji)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['oyuncu','o'],
  permLevel: 0
}
exports.help = {
  name: 'kız',
  description: "Erkek kullanıcıları kayıt etme komutu.",
  usage: ',kız <yeni nick>'
}
