var Discord = require ("discord.js");
var bot = new Discord.Client();
var msg = new Discord.Message()
var prefix = ("/")
var fs= require("fs")
var mode = ("0")
var msgnb = ("0")
var help_Embed = new Discord.RichEmbed()
  .setColor("#E5012E")
  .addField("Les commande du Bot !", "   /help: Affiche le list des commande\n/msgnb: Affiche les Stats des message du serveur")
  .addField("Interaction:", "   N/A")
//login
bot.login(process.env.TOKEN);
//Ready
bot.on("ready", function()
  {
    console.log("----------------");
    console.log("le bot est en 0.1.0 FIXE \n---------------- \nChargement . . .")
    console.log("00000000  00    00")
    console.log("00    00  00   0")
    console.log("00    00  00 00 ")
    console.log("00    00  000")
    console.log("00    00  00 00")
    console.log("00    00  00   0")
    console.log("00000000  00    00")
    console.log("Le bot est connecté \n----------------") 
})
//setgame
bot.on("ready", function(){
  bot.user.setPresence({ game: { name: "/help", type: 0}})
})
//new member
bot.on("guildMemberAdd", function(member){
  member.guild.channels.find("name", "bienvenue").sendMessage(member.toString() + " Bienvenue à toi")
  console.log("Nouveau membre")
})
//Function message
bot.on("message", function(message) {
  var discriminateur = message.author.discriminator
  var membername = message.author.username
//anti
//Lien
  if(message.content.startsWith('https://')){
    message.delete()
      .then(msg => console.log("Deleted message from " + membername + "#" + discriminateur + ">" + message.content))
      .catch(console.error);
    message.channel.sendMessage("Message supprimer Raison: Lien")
      }
//anti
//Lien
  if(message.content.startsWith('http')){
    message.delete()
      .then(msg => console.log("Deleted message from " + membername + "#" + discriminateur + ">" + message.content))
      .catch(console.error);
    message.channel.sendMessage("Message supprimer Raison: Lien")
  }
//Le
//Help
  if(message.content === prefix + "help"){
    message.channel.sendEmbed(help_Embed)
  }
  console.log(membername + "#" + discriminateur + ">" + message.content)
})
//Nombre
//de msg
bot.on("message", function(message){
  msgnb = parseInt(msgnb) + 1
  if(message.content === prefix + "msgnb"){
    var msgnb_Embed = new Discord.RichEmbed()
      .setColor("#E5012E")
      .addField("Les Message du Bot:  ", "   Nombre Message Du serveur: " + msgnb)
    message.channel.sendEmbed(msgnb_Embed)
  }
})
