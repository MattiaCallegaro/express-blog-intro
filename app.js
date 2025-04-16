//importazione di express
const express = require("express");

//inizializzo express nella variabile app
const app = express();

//definisco il numero della porta
const port = 3000;

//definisco la rotta base
app.get('/', (req, res)=>{
    res.send("Server del mio blog")
})

//faccio restare in ascolto il server
app.listen(port, ()=>{
    console.log(`Server del blog in ascolto alla porta ${port}`)
})
