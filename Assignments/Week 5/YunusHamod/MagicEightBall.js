//Your question here;
let  question;


const answers = ["It is certain", "As I see it, yes", "Reply hazy, try again", "Don't count on it", "It is decidedly so", 
"Most likely", "Ask again later", "My reply is no", "Without a doubt", "Outlook good", "Better not tell you now",
 "My sources say no", "Yes-definitely", "Yes", "Can't predict now", "Outlook not so good", "You may rely on it",
  "Signs point to yes", "Concentrate and ask again", "Very doubtful"];


let reply = answers[(Math.ceil(Math.random() * answers.length))];
console.log(reply);