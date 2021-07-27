
const Discord = require('discord.js');

const client =  new Discord.Client();

const prefix = '!n';
                                
client.once('ready', () =>{
    console.log('NOW ONLINE');
    client.user.setActivity(`Announcing Stuffs`, { type: "PLAYING" })
})

client.on('message', message => {
    if (message.content.startsWith(prefix + 'say')) {
        if (message.author.bot) return;
        const SayMessage = message.content.slice(4).trim();
        message.channel.send("**" + SayMessage + "**")
    }
});

client.login('YOUR_DISCORD_BOT_TOKEN');

require('http').createServer((req, res) => res.end('Bot is alive!')).listen(3000)
