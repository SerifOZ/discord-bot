console.log('Merhaba');

const Discord = require('discord.js');
const client = new Discord.Client();
client.login('CLIENT SECRET');
client.on('ready',readyDiscord);

function readyDiscord(){
    console.log('<3');
}

client.on('message', gotMessage);

const tekrar= ['HELLO', 'Merhaba', 'Hi!!'];

function gotMessage(msg){
    console.log(msg.content);
    if(msg.content === 'Merhaba'){
        const rand = Math.floor(Math.random()*tekrar.length);
        msg.channel.send(tekrar[rand]);
    }
}
