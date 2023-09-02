const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client();
const { exec } = require('child_process');
const token = 'MTE0Mzg3MTA0MzQzMDI1NjgyMA.G_Lx6h.mi9J-Wm-hd_tGxj0DL2F0saIKoDmRL3Bf4upxY'; // Remplacez par votre propre token

client.once('ready', () => {
    console.log('Bot is ready.');
});

client.on('message', (message) => {
    const channel = message.channel;

    let cmember = message.mentions.members.first();
    
   
    if (!message.author.bot) {  // Vérifiez si le message est envoyé par un utilisateur et n'est pas envoyé par le bot lui-même
        
        if (message.content.toLowerCase() === 'lecky') { // Vérifiez si le contenu du message est "lecky"
            // Répondez avec un message
            message.channel.send('Vas te faire enculé toi et la roue.');
        }

        

         if(cmember.id === '608392560389390346'){ // identifiant de lecky 
            message.channel.send('tu es qui pour me @ ');
        }

        else if(cmember.id === '384397009894768640'){ //identifiant de haiko
            message.channel.send('Il veut quoi l\'autre');

            //  message.author.send('Il est trop occupé c\'est une star');
        }

        else if(cmember.id === '797188270881767465'){ //identifiant de Wassil
            message.channel.send('un ptit cache cache allez');
        }
        }
    
});

client.login(token);