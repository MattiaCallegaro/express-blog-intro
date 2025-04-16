// 1 importazione di express
const express = require("express");

// 2 inizializzo express nella variabile app
const app = express();

// 3 definisco il numero della porta
const port = 3000;

// 4 definisco la rotta base e con <res.send> invio la risposta ("Server del mio blog") al server
//con .send invio il dato così com'è
app.get('/', (req, res)=>{
    res.send("Server del mio blog")
})

// 5 faccio restare in ascolto il server per visualizzare su postman
app.listen(port, ()=>{
    console.log(`Server del blog in ascolto alla porta ${port}`)
})

// 6 imposto lo strumento per recuperare gli asset statici usando .use e .static nella cartella public
app.use(express.static ('public'))

// 7 definisco la root bacheca dell'array contenente lista
app.get('/bacheca', (req, res)=>{
    const lista = [
        {
            titolo: "Ciambellone",
            contenuto: "Il ciambellone è un dolce soffice, alto, a forma di anello.",
            immagine:"public\images\ciambellone.jpeg",
            tags:["burro","uovo","farina","zucchero"]
        },
        {
            titolo: "Cracker barbabietola",
            contenuto: "Snack croccante e salutare, arricchito con barbabietola e semi.",
            immagine:"public\images\cracker_barbabietola.jpeg",
            tags:["semi","barbabietola","farina"]
        },
        {
            titolo: "Pane fritto dolce",
            contenuto: "Una deliziosa merenda anti-spreco. ",
            immagine:"public\images\pane_fritto_dolce.jpeg",
            tags:["burro","uovo","farina","zucchero"]
        },
        {
            titolo: "Pasta barbabietola",
            contenuto: "Pasta fresca colorata naturalmente con barbabietola, dal sapore delicato.",
            immagine:"public\images\pasta_barbabietola.jpeg",
            tags:["burro","barbabietola","farina"]
        },
        {
            titolo: "Torta paesana",
            contenuto: "Simbolo della cucina contadina brianzola.",
            immagine:"public\images\torta_paesana.jpeg",
            tags:["latte","cacao","uvetta","zucchero"]
        }
    ]
    //ritorna la risposta del client come se fosse un return di funzione
    // .json fa la stessa cosa di send ma invio un data json(più strutturato)
    res.json(lista)
})