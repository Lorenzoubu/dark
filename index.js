var Discord = require ("discord.js");
var bot = new Discord.Client();
var msg = new Discord.Message()
var prefix = ("/")
var msgnb = 0
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
//Lien
bot.on("message", function(message) {
  var discriminateur = message.author.discriminator
  var membername = message.author.username
  if(message.content.startsWith('https://')){
    message.delete()
      .then(msg => console.log("Deleted message from " + membername + "#" + discriminateur))
      .catch(console.error);
    message.channel.sendMessage("Message supprimer Raison: Lien")
      }
  if(message.content.startsWith('http')){
    message.delete()
      .then(msg => console.log("Deleted message from " + membername + "#" + discriminateur))
      .catch(console.error);
    message.channel.sendMessage("Message supprimer Raison: Lien")
  }
  if(message.content === prefix + "help"){
    var help_Embed = new Discord.RichEmbed()
      .setColor("#E5012E")
      .addField("Les commande du Bot !", "   /help: Affiche le list des commande\n/msgnb: Affiche les Stats des message du serveur")
      .addField("Interation:", "   /jeux: Pour jouer au jeux")
    message.channel.sendEmbed(help_Embed)
  }
})
bot.on("message", function(message){
  msgnb = parseInt(msgnb) + 1
  if(message.content === prefix + "msgnb"){
    var msgnb_Embed = new Discord.RichEmbed()
      .setColor("#E5012E")
      .addField("Les Message du Bot:  ", "   Nombre Message Du serveur: " + msgnb)
    message.channel.sendEmbed(msgnb_Embed)
  }
})
//jeux
bot.on("message", function(message){
  if (Google.match(message)){
    Google.action(message)
  }
})
bot.on("message", function(message){
  if (message.content == prefix + "jeux"){
    mode = 1
    var jeux_Embed = new Discord.RichEmbed()
      .setColor("#E5012E")
      .addField("Voici le jeux il faut arriver a l'argent pour gagner 10 palacoins :money_with_wings: :money_with_wings: ", "   !! Jouer en Discord Plein écrant !!")
      .addField("Comment jouer ???", "   Avec les touches W-A-S-D comme dans les jeux FPS")
      .addField(":o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o:", ":soccer: :white_small_square::white_small_square::white_small_square::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o:")
      .addField(":o::o::o::white_small_square::white_small_square::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o:", ":o::o::o::o::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::o::o::o::o::o::o::o::o::o:")
      .addField(":o::o::o::o::o::o::o::o::o::o::white_small_square::o::o::o::o::o::o::o::o::o:", ":o::o::o::o::o::o::o::o::o::o::white_small_square::o::o::o::o::o::o::o::o::o:")
      .addField(":o::o::o::o::o::o::o::o::o::white_small_square::white_small_square::o::o::o::o::o::o::o::o::o:", ":o::o::o::o::o::o::o::o::o::white_small_square::o::o::o::o::o::o::o::o::o::o:")
      .addField(":o::o::o::o::o::o::o::o::o::white_small_square::o::o::o::o::o::o::o::o::o::o:", ":o::o::o::o::o::o::o::o::o::white_small_square::white_small_square::o::o::o::o::o::o::o::o::o:")
      .addField(":o::o::o::o::o::o::o::o::o::o::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::white_small_square::euro:", ":o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o::o:")
    message.channel.sendEmbed(jeux_Embed)
  }
  //if(mode == 1){
      //if (message.content == w)
  //}
})
