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
            message.channel.send('tu es qui pour @ ');
        }

        

         if(cmember.id === 'identifiant de la personne concerné'){ //copier l'identifiant de la personne concerne pour que comme ca une fois @ le bot repond dans le channel
            message.channel.send('tu es qui pour me @ ');
        }

        else if(cmember.id === 'identifiant de la personne concerné'){
            message.channel.send('Il veut quoi l\'autre');

            //  message.author.send('Il est trop occupé c\'est une star');
        }

        else if(cmember.id === 'identifiant de la personne concerné'){ 
            message.channel.send('un ptit cache cache allez');
        }
        }
    
});

client.login(token);
