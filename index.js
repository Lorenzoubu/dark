var Discord = require ("discord.js");
var bot = new Discord.Client();
var msg = new Discord.Message()
var prefix = ("/")
var msgnb = 0
var mode = ("0")
//Embed
var help_Embed = new discord.RichEmbed()
      .setColor("#E5012E")
      .addField("Les commande du Bot !", "   /help: Affiche le list des commande\n/msgnb: Affiche les Stats des message du serveur")
      .addField("Interaction:", "   /jeux: Pour jouer au jeux\n/shop: Bientot Disponible")
//login
bot.login("Mzk4NDY3MzUyMjU5MzMwMDQ4.DS-9vw.eNPKBRmjy2wQ2nDadBD7rgOy00k");
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
      .then(msg => console.log("Deleted message from " + membername + "#" + discriminateur))
    message.channel.sendMessage("Message supprimer Raison: Lien")
      }
//anti
//Lien
  if(message.content.startsWith('http')){
    message.delete()
      .then(msg => console.log("Deleted message from " + membername + "#" + discriminateur))
    message.channel.sendMessage("Message supprimer Raison: Lien")
  }
//Le
//Help
  if(message.content == prefix + "help"){
    message.channel.sendEmbed(help_Embed)
  }
  console.log(membername + "#" + discriminateur + ">" + message.content)
  if (message.content == prefix + "shop"){
    var shop_Embed = discord.RishEmbed()
      .setColor("#E5012E")
      .addField("Les Shop:", "Les Shop sont en Build on ne eput donc pour l'insant\nrien faire mais on peut voir l'interface:")
      .addField("Des idee ??", "Contacter les Fondateur du serveur !")
      .addField("Tu a + {readfile, membername 'UTF-8'} + coins     Pour avoir un Grade /grade et le nom du grade", "Grade 1 = + coinsgrd1\nGrade 2 = + coinsgrd2\nETC ...")
      .addField("!! Si tu n'a pas gagner de jeux tu n'a pas d'argent donc tu ne peut pas acheter de grade !!")
  }
})






//Nombre
//de msg
bot.on("message", function(message){
  msgnb = parseInt(msgnb) + 1
  if(message.content === prefix + "msgnb"){
    var msgnb_Embed = discord.RichEmbed()
      .setColor("#E5012E")
      .addField("Les Message du Bot:  ", "   Nombre Message Du serveur: " + msgnb)
    message.channel.sendEmbed(msgnb_Embed)
  }
})
//jeux
//numero 1
bot.on("message", function(message){
  if (message.content == prefix + "jeux"){
    mode = ("1")
    var jeux_Embed = discord.RichEmbed()
      .setColor("#E5012E")
      .addField("Voici le jeux il faut arriver a l'argent pour gagner 10 coins :money_with_wings: :money_with_wings: ", "   !! Jouer en Discord Plein écrant !!")
      .addField("Comment jouer ???", "   Avec les touches W-A-S-D comme dans les jeux FPS")
      .addField(":o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o:", ":soccer: :white_small_square::white_small_square::white_small_square::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o:")
      .addField(":o::o::o::white_small_square::white_small_square::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o:", ":o::o::o::o::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::o::o::o::o::o::o::o::o::o:")
      .addField(":o::o::o::o::o::o::o::o::o::o::white_small_square::o::o::o::o::o::o::o::o::o:", ":o::o::o::o::o::o::o::o::o::o::white_small_square::o::o::o::o::o::o::o::o::o:")
      .addField(":o::o::o::o::o::o::o::o::o::white_small_square::white_small_square::o::o::o::o::o::o::o::o::o:", ":o::o::o::o::o::o::o::o::o::white_small_square::o::o::o::o::o::o::o::o::o::o:")
      .addField(":o::o::o::o::o::o::o::o::o::white_small_square::o::o::o::o::o::o::o::o::o::o:", ":o::o::o::o::o::o::o::o::o::white_small_square::white_small_square::o::o::o::o::o::o::o::o::o:")
      .addField(":o::o::o::o::o::o::o::o::o::o::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::euro:", ":o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o:")
    message.channel.sendEmbed(jeux_Embed)
  }
  if(mode == "1"){
//msg dlt jeux
    if (nessage.content == prefix + "jeux"){
      message.delete()
    }
//mise en mode 2
    if (message.content == "w"){
      mode = ("w2")
    }
    if (message.content == "a"){
      mode = ("a2")
    }
    if (message.content == "s"){
      mode = ("s2")
    }
    if (message.content == "d"){
      mode = ("d2")
    }
  }
//rp perdu m2
  if(mode == "w2"){
    mode = ("0")
    var perdu_Embed = discord.RichEmbed()
      .setColor("#E5012E")
      .addField("Tu a perdu !!", "Dommage :money_with_wings::money_with_wings::money_with_wings:")
      .addField("Tu veut retenter ta chance ??", "Oui / Non")
    message.channel.sendEmbed(perdu_Embed)
      if (message.content == "Oui"){
        message.channel.sendEmbed(jeux_Embed)
        mode = ("1")
      }
      if (message.content == "Non"){
        message.reply("Ok ! /jeux")
      }
  }
})
