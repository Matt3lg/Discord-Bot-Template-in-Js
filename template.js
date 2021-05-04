const Discord = require("discord.js");
const bot = new Discord.Client();
const token = 'YOUR TOKEN';
const PREFIX = "BOT PREFIX";
const ytdl = require("ytdl-core")

var servers = {};

bot.on ('ready', () =>{
    console.log("The bot is online! Ready to be used")
    
    bot.user.setActivity('.comandi', {type:  'PLAYING'}).catch (console.error);
})
pippo='';
//while (pippo=='fine'){ 
bot.on ('message', message =>{

    let args = message.content.substring(PREFIX.length).split(" ");

    pippo= args[0];
    switch (args[0]){
        
    }
    
        break;
        case 'command template':
            message.channel.send('command template')
