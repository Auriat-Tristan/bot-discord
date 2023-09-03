const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client();
const { exec } = require('child_process');
const token = ''; // Remplacez par votre propre token

client.once('ready', () => {
    console.log('lancement du bot');
});

client.on('message', (message) => {
   

    
    if (message.mentions.users.size > 0) {
   
    if (!message.author.bot) {  // Vérifiez si le message est envoyé par un utilisateur et n'est pas envoyé par le bot lui-même

        const channel = message.channel;

        let cmember = message.mentions.members.first();

         if(cmember.id === ''){ // identifiant de la personne concerne
            message.channel.send('il est pas la');
            
        }

        else if(cmember.id === ''){ //identifiant de la personne concerne
            message.channel.send('lui aussi il est pas la');

              message.author.send('Il est trop occupé c\'est une star'); //envoie directement un message prv a la personne qui la ping 
        }

        else if(cmember.id === ''){ //identifiant de la personne concerne
            message.channel.send('un ptit cache cache allez');
        }
        else if(cmember.id === ''){  //identifiant de la personne concerne
            message.channel.send('C++ (javascript, raspberry, cisco) > all ');
        }


        } else{
            console.log("rien");
        }
    }
    
});

client.login(token);
