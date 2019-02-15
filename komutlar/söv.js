exports.run = async (client, msg, args) => {
  let kufur=[
    "amına kodumun jedayı seni",
    "babanın annesinin amına koyayım orul orul orospu evladı",
    "ebenin amı gibi kaşları da kara",
    "seni anasının amında olimpiyat meşalesi yakıp 10 km kostuğumun cocuğu ",
    "senin ananın amına mancınıkla patates atayım",
    "senin dalağını öyle bi sikerim ki ömür boyu hıçkırırsın",
    "ananın amına bilardo topuyla rövaşata çekerim am dolması yarrak kafalı çin orospusu seni amına kodumun çin aslanı bilyesini gibtiğimin am düdüğü",
    "senin ananı düdüklü tencerenin arasına alıp öttüre öttüre sikerim ulan ben",
    "ananın amını keserim cebime koyarım sıkıldıkça sikerim",
    "ananın amına sınav yapar 2 milyon kişiyi sokarım",
    "amına barut döker sürtünmeyle yakarım orospu evladı",
    "seni bi sikerim bluetooh un hata verir kapsama alanın genişler.",
    "o tuşlara basan ufacık parmaklarının arasına sokar felç edene kadar siker o felç olan parmaklarını kesip organ mafyasına satarım elde ettigim gelirin bi kısmını görme engelliler vakfına bağışlar kalan kısmıda annenle çarçur eder babanın delirmesini sağlar ocağına incir ağacı diker ağacın gölgesinde teyzeni dallı budaklı sikerim senin",
    "küfür etmek günah olum sen ne yaptıysan artık sana kızmış birisi affettir kendini beni de günaha sokçak orospu kertenkelesi",
    "küfür ederdim ama anan çok yordu",
    "lan orospu çocuğu senin ananın amını keserim o amı da senin amına sokarım orospu evladı sonra seni ters yatırıp top yaparım o topuda markette satarım geliriyle çitöz alırım yanına geçip gözünün önünde yerim sonra seni parayla alırım canım sıkılınca sikerim sen ölüncede gece gece mezarına gider seni orda sikerim orospu çocuğu",
    "öyle yan durup şekilli mekilli tişört giyme ananı götünden siker Erol Taş gibi kiraz ağacından kamçı yapar döverim",
    "senin götünü keser çorap lastiği yaparım.",
  ]
     let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign: Ya geçerli birini etiketle ya da sana sövmemi istiyosan kendini etiketle.')
}});
  if(member.id === "480114483373801478")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign:Yapımcım mı sakın haa. Görmiyim bidaha.')
}})
  if(member.id === "460084481081081857")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign:Yapımcım mı sakın haa. Görmiyim bidaha.')
}})
  if(member.id === "393477896926396426")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Hey Metin Korumalı Dostum!!!`)
}})
  if(member.id === "463995423850233857")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Hoop! Orda durucan MyDesignerFOR (Ultimate) sövemezsin.`)
}})
if(member.id === "437905292932415489")return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (`:no_entry_sign: Ardaya Sövmek Deneme Bence!!!`)
}})
if(member.id === "383254520572149762")return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (`:no_entry_sign: Kankama Sövmek Ya Denemene Gerek Yoktu!!!`)
}})
if(member.id === "473473765469192193")return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (`:no_entry_sign: Hey Tusem'e Sövemezsin O Bir Kız Saygın Olsun Bari!!!`)
}})
if(member.id === "")return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (`:no_entry_sign: Hey Kankama Sövemezsin!!!`)
}})
if(member.id === "348097494548348940")return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (`:no_entry_sign: Hey Vegas Botun Sahibine Sövemezsin!!!`)
}})
if(member.id === "369014840804638721")return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (`:no_entry_sign: Hey Kankama Sövemezsin!!!`)
}})
if(member.id === "460084481081081857")return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (`:no_entry_sign: Hey Kankama Sövmene İzin Veremem!!!`)
}})
if(member.id === "462712802465939457")return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (`:no_entry_sign: Pandayı Sövmek Deneme Bence`)
}})
if(member.id === "450251693037322241")return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (`:no_entry_sign: __Wumpus__ **KANKAM** Ona Sövemezsin __TMMI?!?!__`)
}})
 if(member.id === client.user.id){
    msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Beni mi kandırcan orospu çocuğu ?`)
}})
  }
  else{
  msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`${member} ${kufur[Math.floor(Math.random() * 16)]}.`)
}})
  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
 };

exports.help = {
  name: 'söv',
  description: 'Etiketlenen kişiye söver.',
  usage: 'r!söv'
 }
