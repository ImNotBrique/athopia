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


