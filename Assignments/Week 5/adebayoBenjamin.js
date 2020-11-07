// The fabonacci sequence


var fibonacciSeries = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacciSeries(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

alert("The fabonacci sequence is: " + fibonacciSeries(5));


res=[]
function Multiples(num, lenght){
    for(i=0; i <= num * lenght; i += num){
        res.push(i)
    }
    return res;
}
alert( "The Multiples are " + Multiples(4, 6))

// The Magic 8 Ball

var answers = ['It is certain.', 'It is decidedly so.', 'without a doubt.', 'Yes- definitely.', 'You may rely on it.', 'As i see it, yes.', 'Most likely.','Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and Ask Again.', 'Do not Count on it.', 'My reply is no.','Outlook not so good.', 'Very doubtful.']

window.onload = function(){
    question = prompt("please ask me Something!")

if(question!= null){
   var num = Math.floor(Math.random() * Math.floor(answers.length))
    alert(answers[num])
}
else {
  alert ("Please ask your question")
}
}