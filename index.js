
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

client.login('NzgxNDAzNzg3NTA3MjY5NjMy.X79I_A.5L8KZ-mruy3dUV1anbJt5rMBU8w');

require('http').createServer((req, res) => res.end('Bot is alive!')).listen(3000)
