"use strict";
const texte1 = [
    {
        question: "Di dove sei?",
        option: [
            "Sono di Brasile.",
            "Sono brasiliano, di Rio",
            "Sono brasiliani, di Rio"
        ],
        answer: 1,
    },
    {
        question: "I signori vogliono ordinare?",
        option: [
            "Per me una pizza quattro stagioni.",
            "Da bere il tiramisù.",
            "Come primo prendo la bistecca ai ferri.",
        ],
        answer: 0,
    },
    {
        question: "Dove abitate?",
        option: [
            "Abitano a Roma.",
            "Abita a Roma.",
            "Abitiamo a Roma."
        ],
        answer: 2,
    },
    {
        question: "Che lavoro fai?",
        option: [
            "Faccio il poliziotto",
            "lavoro di infermiere",
            "lavoro in pompiere",
            "Sono avvocato.",
        ],
        answer: 3,
    },
    {
        question: "Ti piace la pasta alla carbonara?",
        option: [
            "No, non piace.",
            "Sì, mi piace.",
            "Sì, mi piacciono."
        ],
        answer: 1,
    },
    {
        question: "Prendo:",
        option: [
            "i patatine fritte.",
            "gli patatine fritte.",
            "le patatine fritte",
        ],
        answer: 2,
    },
    {
        question: "Buonasera signor Rossi, come sta?",
        option: [
            "Non c'è male, grazie. E tu?",
            "Bene, grazie. E lui?",
            "Bene, grazie. E lei?",
            "Bene, grazie. E Lei?"
        ],
        answer: 3,
    },
    {
        question: "Rossana fa l'infermiera, lavora in:",
        option: [
            "una scuola",
            "un'ospedale",
            "in ospedale",
            "un ospedale"
        ],
        answer: 1,
    },
    {
        question: "Cosa fate nel tempo libero?",
        option: [
            "Ascolto musica e leggo un libro.",
            "Ascoltiamo musica e leggiamo un libro.",
            "Ascolta musica e legge un libro.",
        ],
        answer: 0,
    },
    {
        question: "A Roma:",
        option: [
            "ci sono molti monumenti antichi e chiese interessanti.",
            "c'è molti monumenti antichi e chiese interessanti.",
            "hanno molti monumenti antichi w chiese interessanti.",
            "Ci sono molti monumenti antico e chiese interessante."
        ],
        answer: 0,
    },
    {
        question: "Albergo Leonardo, buongiorno.",
        option: [
            "Pronto, buongiorno, vorrei prenotare un appartamento per tutto il mese di luglio.",
            "Pronto, buongiorno, vorrei prenotare una camera singola dal 10 al 15 agosto.",
            "Pronto, buongiorno, avete un tavolo per quattro persone per stasera?"
        ],
        answer: 1,
    },
    {
        question: "Com'è il tuo appartamento?",
        option: [
            "Il mio appartamento c'è una cucina, c'è un bagno, c'è un salotto e ci sono due camera da letto.",
            "Nel mio appartamento ha una cucina, un bagno, un salotto e due camera da letto",
            "Nel mio appartamento c'è una cucina, c'è un bagno, c'è un salotto e ci sono due camere da letto"
        ],
        answer: 2,
    },
    {
        question: "Quanto viene la camera?",
        option: [
            "120 euro per notte.",
            "Certo, la colazione è compresa nel prezzo.",
            "Sì, c'è anche il parcheggio.",
        ],
        answer: 0,
    },
    {
        question: "Di solito, in estate, in Italia, in quale mese vai in vacanza?",
        option: [
            "A luglio.",
            "A marzo",
            "Ad ottobre."
        ],
        answer: 0,
    },
    {
        question: "Cosa hai fatto lo scorso fine settimana?",
        option: [
            "Ho andato al cinema con Paolo.",
            "Sono andato al cinema con Paolo",
            "Sono mangiato la pizza con Paolo",
        ],
        answer: 1,
    },
    {
        question: "Quanto spesso vai in discoteca?",
        option: [
            "Vado mai in discoteca.",
            "Vado in discoteca mai.",
            "Non vado mai in discoteca."
        ],
        answer: 2,
    },
    {
        question: "Quali giorni della settimana Paolo e Maria vanno in palestra?",
        option: [
            "Vanno il lunedì e il mercoledì.",
            "Vanno ci il lunedì e il mercoledì.",
            "Ci vanno il lunedì e il mercoledì.",
        ],
        answer: 2,
    },
    {
        question: "Leggi il seguente testo e scegli l'opzione corretta: Mi chiamo Enrico Vicenti. Ho trentadue anni. Sono di Roma, ma vivo a Genova da quattro anni. Io sono ingegnere. Lavoro dal lunedì al venerdì dalle nove di mattina alle sei di sera. Di solito nel tempo libero vado in palestra, leggo, guardo la tv o vado al ristorante con mia moglie Claudia. Non vado mai in discoteca perché non mi piace. Lei è medico e lavora in un ospedale pubblico dal martedì al sabato.",
        option: [
            "Enrico Vicenti lavora come ingegnere dal lunedì al sabato e nel tempo libero va al ristorante.",
            "Enrico Vicenti fa l'ingegnere e non lavora il fine settimana. Nel tempo libero va in palestra o guarda la TV",
            "Enrico Vicenti lavora dal lunedì al venerdì dalle 9 alle sei di sera in un ospedale pubblico.",
        ],
        answer: 1,
    },
    {
        question: "Dove fai la spesa di solito?",
        option: [
            "La faccio il sabato al supermercato.",
            "Lo faccio il sabato al supermercato.",
            "Faccio il sabato al supermercato."
        ],
        answer: 1,
    },
    {
        question: "Qual è l'orario della lezione di italiano?",
        option: [
            "Dalle 19:15 alle 22:30.",
            "Da 19:15 a 22:30.",
            "Da 19:15 alle 22:30."
        ],
        answer: 0,
    },
    {
        question: "Senta, scusi, per andare al Duomo?",
        option: [
            "Davanti alla stazione.",
            "Deve andare dritto per questa strada e al primo incrocio gira a destra.",
            "No, non è vicino."
        ],
        answer: 1,
    },
    {
        question: "Cosa hai comprato al mercato?",
        option: [
            "L'arance, le mele e l'olio d'oliva.",
            "Le arance, le mele e il olio d'oliva.",
            "Le arance, le mele e l'olio d'oliva."
        ],
        answer: 2,
    },
    {
        question: "Cosa fanno Luca e Matteo il fine settimana?",
        option: [
            "Andano al cinema o al ristorante.",
            "Andate al cinema o al ristorante.",
            "Vanno al cinema o al ristorante.",
        ],
        answer: 2
    },
    {
        question: "Cosa prendi a colazione?",
        option: [
            "Due cornetti e un caffè.",
            "Una Margherita e un cappuccino.",
            "Una bistecca ai ferri e un bicchiere di vino."
        ],
        answer: 0,
    }
];
