"use strict";
const teste1 = [
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
const teste2 = [
    {
        question: "Quanti libri leggi al mese?",
        option: [
            "Li leggo due.",
            "Leggo due.",
            "Ne leggo due",
        ],
        answer: 2,
    },
    {
        question: "Buongiorno, signora Rossi, cosa desidera oggi?",
        option: [
            "Buongiorno. Vorrei due etti di prosciutto crudo e mezzo chilo di parmigiano reggiano.",
            "Buongiorno. No, basta così",
            "Grazie. Quant'è?"
        ],
        answer: 0,
    },
    {
        question: "Abiti da solo?",
        option: [
            "No, abito con mie sorelle",
            "No, abito con mia sorella.",
            "No, abito con la mia sorella",
        ],
        answer: 2,
    },
    {
        question: "Domenica scorsa cosa hai fatto?",
        option: [
            "Mi ho alzata tardi e poi ho fatto colazione.",
            "Mi sono alzata tardi e poi ho fatto colazione.",
            "Ho alzata tardi e poi ho fatto colazione.",
        ],
        answer: 1,
    },
    {
        question: "Quant'è?",
        option: [
            "In totale sono 25 euro.",
            "Viene 25 euro.",
            "Vengono 25 euro",
        ],
        answer: 2,
    },
    {
        question: "Com'è il clima oggi nella tua città?",
        option: [
            "Fa caldo, ci sono 33 gradi ed è un po' nuvoloso.",
            "Fa caldo, ci sono 33 gradi e un vento gelido.",
            "Fa bel tempo: è nuvoloso e piove.",
        ],
        answer: 0,
    },
    {
        question: "Siete andati al bar tu e Paolo ieri sera?",
        option: [
            "Sì e abbiamo preso qualche birra insieme.",
            "Sì, e abbiamo prenduto qualche birra insieme.",
            "Sì e siamo presi qualche birra insieme.",
        ],
        answer: 0,
    },
    {
        question: "Sai che oggi è il mio compleanno?",
        option: [
            "Davvero? Buon anno!",
            "Davvero? Congratulazioni!",
            "Davvero? Tanti auguri!,",
        ],
        answer: 2,
    },
    {
        question: "Dov'è il libro di Maria?",
        option: [
            "Suo libro è sul tavolo.",
            "La sua libro è sul tavolo.",
            "Il suo libro è sul tavolo.",
        ],
        answer: 2,
    },
    {
        question: "Quando fai i compiti per casa?",
        option: [
            "Li faccio la sera.",
            "Lo faccio la sera.",
            "Faccio la sera.",
        ],
        answer: 0,
    },
    {
        question: "Benissimo. Qualcos'altro?",
        option: [
            "Sì, quant'è?",
            "Ne vorrei due etti, per favore.",
            "No, basta così. Quant'è?",
        ],
        answer: 2,
    },
    {
        question: "Sai, domani devo fare un esame.",
        option: [
            "In bocca al lupo!",
            "Complimenti!",
            "Buon viaggio!",
        ],
        answer: 0,
    },
    {
        question: "Dov'è il Duomo?",
        option: [
            "Accanto alla Galleria Vittorio Emanuele.",
            'Vicino della Galleria Vittorio Emanuele.',
            "Dietro della Galleria Vittorio Emanuele",
        ],
        answer: 0,
    },
    {
        question: "Esci con noi stasera?",
        option: [
            "Non posso, domani mi sveglio presto per andare a lavorare.",
            "Non posso, domani sveglio presto per andare a lavorare.",
            "Non posso, domani mi sveglio tardi per andare a lavorare.",
        ],
        answer: 0,
    },
    {
        question: "Ordiniamo una bottiglia di vino rosso?",
        option: [
            "No! Ma che dici? Con il pesce beve il vino bianco.",
            "No! Ma che dici? Con il pesce si beve il vino bianco.",
            "No! Ma che dici? Con il pesce si bevono il vino bianco.",
        ],
        answer: 1,
    },
    {
        question: "Quando siete andati in montagna tu e tua moglie?",
        option: [
            "Ci siamo andati sabato scorso.",
            "Ci andiamo sabato scorso.",
            "Ci siamo andati sabato prossimo.",
        ],
        answer: 0,
    },
    {
        question: "Cosa ha fatto Paola ieri sera?",
        option: [
            "È rimasto a casa a guardare la tv.",
            "È rimanuta a casa a guardare la tv.",
            "È rimasta a casa a guardare la tv.",
        ],
        answer: 2,
    },
    {
        question: "Come si chiamano i tuoi genitori?",
        option: [
            "Mio padre si chiama Carlo e mia madre si chiama Lucia.",
            "Il mio padre si chiama Carlo e la mia madre si chiama Lucia.",
            "Mio babbo si chiama Carlo e mia mamma si chiama Lucia.",
        ],
        answer: 0,
    },
    {
        question: "Buongiorno, vorrei:",
        option: [
            "del Parmigiano Reggiano.",
            "dello Parmigiano Reggiano.",
            "dell' Parmigiano Reggiano.",
        ],
        answer: 0,
    },
    {
        question: "Di solito Giovanni si sveglia alle sette di mattina ma rimane a letto almeno venti minuti prima di alzarsi. Poi si lava, si veste e fa colazione. Esce di casa verso le 8 per andare in ufficio. Lui fa l'avvocato e lavora dal lunedì al venerdì. Quando torna a casa dall'ufficio si riposa un po' e poi va a giocare a calcetto con gli amici oppure ascolta un po' di musica. Cena a casa alle otto e mezza. In genere va a letto a mezzanotte. Ieri, sabato, come al solito Giovanni non ha lavorato. Si è alzato più tardi, verso le 9, ha fatto la doccia e ha letto il giornale. Poi ha guardato la tv e ha pranzato con sua moglie e sua figlia. Il pomeriggio lui e la sua famiglia sono andati al cinema a vedere l'ultimo film di Paolo Virzì.",
        option: [
            "Giovanni acorda às sete e trabalha a semana toda, de segunda a sábado.",
            "Giovanni descansa depois do trabalho, assiste TV ou vai ao cinema.",
            "De segunda a sexta o Giovanni acorda às sete e vai dormir à meia-noite",
        ],
        answer: 0,
    },
    {
        question: "Ho visitato l’Italia.",
        option: [
            "anno scorso",
            "fa un anno",
            "l'anno scorso",
        ],
        answer: 2,
    },
    {
        question: "Sabato scorso io e mia moglie",
        option: [
            "ci siamo alzati tardi.",
            "ci siamo alzato tardi.",
            "ci abbiamo alzato tard",
        ],
        answer: 0,
    },
    {
        question: "Scegli l'opzione corretta:",
        option: [
            "Miei fratelli abitano a Verona.",
            "Mia sorelle abitano a Verona.",
            "I miei fratelli abitano a Verona,",
        ],
        answer: 2,
    },
    {
        question: "Scegli l'opzione corretta:",
        option: [
            '"Cosa fai a Ferragosto?" "Sto a casa con la mia famiglia, mangiamo il panettone, apriamo i regali e beviamo lo spumante.!"',
            '"Cosa fai a Natale?" "Sto a casa con la mia famiglia, mangiamo il panettone, apriamo i regali e beviamo lo spumante.!"',
            '"Cosa fai a Carnevale?" "Sto a casa con la mia famiglia, mangiamo il panettone, apriamo i regali e beviamo lo spumante.!"',
        ],
        answer: 1,
    },
];
