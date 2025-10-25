import express from 'express'
import dotenv from 'dotenv';
dotenv.config(); // load .env variables



const app =express();



app.get('/',(req,res)=>{
    res.send('Hello World from Express with ES Modules!');
})


app.get('/api/jokes',(req,res)=>{
    const jokes = [
  {
    id: 1,
    setup: "Why don’t programmers like nature?",
    punchline: "It has too many bugs!"
  },
  {
    id: 2,
    setup: "Why did the function stop calling itself?",
    punchline: "Because it got stuck in an infinite loop of self-doubt."
  },
  {
    id: 3,
    setup: "What do you call 8 hobbits?",
    punchline: "A hobbyte!"
  },
  {
    id: 4,
    setup: "Why was the JavaScript developer sad?",
    punchline: "Because he didn’t Node how to Express himself."
  },
  {
    id: 5,
    setup: "Why did the computer show up late to work?",
    punchline: "It had a hard drive!"
  },
  {
    id: 6,
    setup: "How do you comfort a JavaScript bug?",
    punchline: "You console it."
  }
];

    res.send(jokes);
})
const port = process.env.PORT || 3000


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})