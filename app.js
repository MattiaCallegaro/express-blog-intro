// 1 importazione di express
const express = require("express");

// 2 inizializzo express nella variabile app
const app = express();

// 3 definisco il numero della porta
const port = 3000;

// 4 definisco la rotta base e con <res.send> invio la risposta ("Server del mio blog") al server
app.get('/', (req, res)=>{
    res.send("Server del mio blog")
})

// 5 faccio restare in ascolto il server per visualizzare su postman
app.listen(port, ()=>{
    console.log(`Server del blog in ascolto alla porta ${port}`)
})

// 6 imposto lo strumento per recuperare gli asset statici usando .use e .static nella cartella public
app.use(express.static ('public'))
