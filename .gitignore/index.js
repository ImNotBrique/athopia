const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
client.login(process.env.TOKEN)
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
    // This event will run if the bot starts, and logs in, successfully.
    console.log(`Bot lancé, avec ${client.users.size} utilisateurs, dans ${client.channels.size} salons de ${client.guilds.size} serveurs.`); 
    // Example of changing the bot's playing game to something useful. `client.user` is what the
    // docs refer to as the "ClientUser".
    client.user.setActivity(`${client.guilds.size} serveurs | Prefix : +`, { type: 'WATCHING'});
    client.user.setStatus('dnd')
  });
  
  client.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`${client.guilds.size} serveurs | Prefix : +`, { type: 'WATCHING'});
    client.user.setStatus('dnd')
  });
  
  client.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(` ${client.guilds.size} serveurs | Prefix : +`, { type: 'WATCHING'});
    client.user.setStatus('dnd')
});

if(command === "kill"){
  let pseudo =  message.mentions.users.first().username
    if(! message.mentions.members.first()) return message.channel.send('Vous devez mentionner quelqu\'un !')
var e = new Discord.RichEmbed()
.setTitle(`${message.author.username} has kill ${pseudo} :skull_crossbones:`)
.setImage("https://cdn.discordapp.com/attachments/580117511941521427/592803283114917910/tenor_1.gif")
.setColor('000000')
.setFooter('Killing Commands : +kill @MENTION#0000')
message.channel.send(e)
}

if(command === "ping"){
  
  message.channel.send('Ping....').then((msg) => {
    
    msg.edit(':ping_pong: Pong ! ' + `${Date.now() - message.createdTimestamp}` + " ms !")
  });
}

  if(command ===  'clear'){
     if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Il vous faut la permission `MANAGE_MESSAGES` pour éxécuter cette commande !   Erreur: 009')
    if((!args[0])) return message.channel.send('Merci de spécifier un nombre valide de messages à supprimer !')
    if(args[0] > 100) return message.channel.send('Merci de spécifier un nombre inférieur ou égale à 100')
    
    message.channel.bulkDelete(args[0])
       } 
 
if(message.content === prefix + 'serverinfo'){
    if(!message.guild) return message.channel.send('Une erreur s\'est produite !')
    var e = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setAuthor(message.guild.name + ' (' + message.guild.id + ')', message.guild.iconURL)
    .addField('**> Salons**', `> ${message.guild.channels.filter(off => off.type === 'text').size} textuels, ${message.guild.channels.filter(off => off.type === 'voice').size} vocaux\n> Salon afk: ${message.guild.afkChannel}`)
    .addField('**> Membres**', `> ${message.guild.memberCount} membres (${message.guild.members.filter(o => o.presence.status === 'online').size} :online: ${message.guild.members.filter(member => member.user.bot).size} :clyde:)\n> Owner:${message.guild.owner.user} (${message.guild.ownerID})`)
    .addField('**> Informations additionelles**',`> Rôles: ${message.guild.roles.size}\n> Région: ${message.guild.region}\n> Date de création: ${message.guild.createdAt}\n> Niveau de vérification: ${message.guild.verificationLevel}`)
  .setColor('EBDADA')
    message.channel.send(e)
    }

 if(command === 'userinfo'){
  var useruseruser = message.guild.member(message.mentions.users.first());
    var useruseruserauthor = message.mentions.users.first();
    if(!useruseruser) {
      var e = new Discord.RichEmbed()
      .setThumbnail(message.author.displayAvatarURL)
      .setAuthor(message.author.username + '#' + message.author.discriminator + ' (' + message.author.id + ')', message.author.displayAvatarURL)
      .addField('** Informations de l\'utilisateur**', `> Création du comte: ${message.author.createdAt}\n> Statut: ${message.author.presence.status}\n> Jeu: ${message.author.presence.game}`)
      .addField('** Informations du membre**', `> Surnom: ${message.member.nickname}\n> A rejoint le serveur : ${message.member.joinedAt}\n> Nombre de rôles: ${message.member.roles.size - 1}`)
      .setColor(message.member.displayHexColor)
      message.channel.send(e)
    }else{
      var e = new Discord.RichEmbed()
      .setThumbnail(useruseruserauthor.displayAvatarURL)
      .setAuthor(useruseruserauthor.username + '#' + useruseruserauthor.discriminator + ' (' + useruseruserauthor.id + ')', useruseruserauthor.displayAvatarURL)
      .addField('**> Informations de l\'utilisateur**', `> Création du comte: ${useruseruserauthor.createdAt}\n> Statut: ${useruseruser.presence.status}\n> Jeu: ${useruseruser.presence.game}`)
      .addField('**> Informations du membre**', `> Surnom: ${useruseruser.nickname}\n> A rejoint le: ${useruseruser.joinedAt}\n> Nombre de rôles: ${useruseruser.roles.size - 1}`)
      .setColor(useruseruser.displayHexColor)
      message.channel.send(e)
    }
    
  }

  if(command === "saying"){
   var e = new Discord.RichEmbed()
    .addField(message.author.username, args.join(" "))
   .setTimestamp()
   .setColor(message.member.displayHexColor)
   .setFooter('Message envoyé par ' + message.author.username)
   message.channel.send(e)
  }

  }}
});
