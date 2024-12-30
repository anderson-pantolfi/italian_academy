interface typequestion {
    question: string,
    option: Array<string>,
    answer: number,
}

const teste1: typequestion[] = [
    {
        question:"Di dove sei?",
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
        answer:1,
    },

    {
        question: "Dove fai la spesa di solito?",
        option: [
            "La faccio il sabato al supermercato.",
            "Lo faccio il sabato al supermercato.",
            "Faccio il sabato al supermercato."
        ],
        answer:1,
    },
    {
        question: "Qual è l'orario della lezione di italiano?",
        option: [
            "Dalle 19:15 alle 22:30.",
            "Da 19:15 a 22:30.",
            "Da 19:15 alle 22:30."
        ],
        answer:0,
    },
    {
        question: "Senta, scusi, per andare al Duomo?",
        option:[
            "Davanti alla stazione.",
            "Deve andare dritto per questa strada e al primo incrocio gira a destra.",
            "No, non è vicino."
        ],
        answer:1,
    },
    
    {
        question:"Cosa hai comprato al mercato?",
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
        option:[
            "Due cornetti e un caffè.",
            "Una Margherita e un cappuccino.",
            "Una bistecca ai ferri e un bicchiere di vino."
        ],
        answer: 0,
    }
]

const teste2:typequestion[] = [
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
    question:"Quant'è?",
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
    question:"Dov'è il libro di Maria?",
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
    question:"Benissimo. Qualcos'altro?",
    option: [
        "Sì, quant'è?",
        "Ne vorrei due etti, per favore.",
        "No, basta così. Quant'è?",
    ],
    answer: 2,
 },

 {
    question:"Sai, domani devo fare un esame.",
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
    question:"Esci con noi stasera?",
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
    question:"Quando siete andati in montagna tu e tua moglie?",
    option: [
        "Ci siamo andati sabato scorso.",
        "Ci andiamo sabato scorso.",
        "Ci siamo andati sabato prossimo.",
    ],
    answer: 0,
 },

 {
    question:"Cosa ha fatto Paola ieri sera?",
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
    question:"Buongiorno, vorrei:",
    option: [
        "del Parmigiano Reggiano.",
        "dello Parmigiano Reggiano.",
        "dell' Parmigiano Reggiano.",
    ],
    answer: 0,
 },

 {
    question:"Leggi il seguente testo e scegli l'opzione corretta: Di solito Giovanni si sveglia alle sette di mattina ma rimane a letto almeno venti minuti prima di alzarsi. Poi si lava, si veste e fa colazione. Esce di casa verso le 8 per andare in ufficio. Lui fa l'avvocato e lavora dal lunedì al venerdì. Quando torna a casa dall'ufficio si riposa un po' e poi va a giocare a calcetto con gli amici oppure ascolta un po' di musica. Cena a casa alle otto e mezza. In genere va a letto a mezzanotte. Ieri, sabato, come al solito Giovanni non ha lavorato. Si è alzato più tardi, verso le 9, ha fatto la doccia e ha letto il giornale. Poi ha guardato la tv e ha pranzato con sua moglie e sua figlia. Il pomeriggio lui e la sua famiglia sono andati al cinema a vedere l'ultimo film di Paolo Virzì.",
    option: [
        "Giovanni acorda às sete e trabalha a semana toda, de segunda a sábado.",
        "Giovanni descansa depois do trabalho, assiste TV ou vai ao cinema.",
        "De segunda a sexta o Giovanni acorda às sete e vai dormir à meia-noite",
    ],
    answer: 0,
 },

 {
    question: "Ho visitato l'Italia.",
    option: [
        "anno scorso",
        "fa un anno",
        "l'anno scorso",
    ],
    answer: 2,
 },

 {
    question:"Sabato scorso io e mia moglie",
    option: [
        "ci siamo alzati tardi.",
        "ci siamo alzato tardi.",
        "ci abbiamo alzato tard",
    ],
    answer: 0,
 },

 {
    question:"Scegli l'opzione corretta:",
    option: [
        "Miei fratelli abitano a Verona.",
        "Mia sorelle abitano a Verona.",
        "I miei fratelli abitano a Verona,",
    ],
    answer: 2,
 },

 {
    question:"Scegli l'opzione corretta:",
    option: [
        '"Cosa fai a Ferragosto?" "Sto a casa con la mia famiglia, mangiamo il panettone, apriamo i regali e beviamo lo spumante.!"',
        '"Cosa fai a Natale?" "Sto a casa con la mia famiglia, mangiamo il panettone, apriamo i regali e beviamo lo spumante.!"',
        '"Cosa fai a Carnevale?" "Sto a casa con la mia famiglia, mangiamo il panettone, apriamo i regali e beviamo lo spumante.!"',
    ],
    answer: 1,
 },
]

const teste3:typequestion[] = [
    {
        question:"Da piccolo:",
        option: [
            "giocavo a calcio tutti i giorni.",
            "ho giocato a calcio tutti I giorni.",
            "gioco a calcio tutti i giorni.",
        ],
        answer: 0,
    },

    {
        question:"Oggi Claudia:",
        option: [
            "si è messa un paio di camicie nere di pelle.",
            "si è messa un paio di cinture nere di pelle.",
            "si è messa un paio di pantaloni neri di pelle.",
        ],
        answer: 2,
    },


    {
        question:"Com'è Alessandra?",
        option: [
            "È giovane, snella, alta, bella con i capelli lunghi e castani. Ha gli occhi azzurri ed è molto simpatica.",
            "È giovane, snella, alta, bella con i capelli lungo e castano. Ha gli occhi azzurri ed è molto simpatica.",
            "È giovane, snello, alto, bello con i capelli lunghi e castani. Ha gli occhi azzurri ed è molto simpatica.",
        ],
        answer: 0,
    },


    {
        question:"Dove hai comprato il tuo computer?",
        option: [
            "Lo ho comprato in un negozio del centro.",
            "L'ho comprato in un negozio del centro.",
            "Ho comprato in un negozio del centro",
        ],
        answer:1,
    },

    {
        question:"Senti, ti volevo fare una proposta.",
        option: [
            "Dimmi pure.",
            "Mi dica.",
            "Non fa niente.",
        ],
        answer: 0,
    },

    {
        question:"Mentre io...",
        option: [
            "ho studiato, mia madre ha cucinato.",
            "ho studiato, mia madre cucinava.",
            "studiavo, mia madre cucinava.",
        ],
        answer: 2,
    },

    {
        question:"Scegli l'opzione corretta:",
        option: [
            '"Quante ore dura il volo Roma-Londra?" "Circa due".',
            '"Quanto viene il biglietto scontato del volo Roma-Londra?" "Circa due".',
            '"Vorrei delle informazioni sulla durata del volo Roma-Londra." "Circa due".',
        ],
        answer: 2,
    },

    {
        question:"Lui è il ragazzo:",
        option: [
            "di cui ti ho parlato.",
            "che ti ho parlato.",
            "cui ti ho parlato.",
        ],
        answer: 0,
    },

    {
        question:"Mi sento sempre stanca e stressata. Cosa posso fare?",
        option: [
            "Evita di fare sport, non bere acqua e mangia molta carne.",
            "Fa' sport, bevi molta acqua e non mangiare troppa carne",
            "Fa' sport, bevi molta acqua e non mangia molta carne.",
        ],
        answer: 1,
    },

    {
        question:"Non mi piace il caffè:",
        option: [
            "salato, ci metto sempre due cucchiaini di zucchero.",
            "dolce, metto sempre due cucchiaini di zucchero.",
            "amaro, ci metto sempre due cucchiaini di zucchero.",
        ],
        answer: 2,
    },

    {
        question:"Secondo me le diete:",
        option: [
            "non servono a niente.",
            "non serve a niente.",
            "servono a niente.",
        ],
        answer: 0,
    },

    {
        question:"È stata una vacanza infernale! L'albergo era sporco, faceva brutto tempo e io e mio marito abbiamo litigato!",
        option: [
            "Che bello!",
            "Che peccato, mi dispiace.",
            "Complimenti!",
        ],
        answer: 1,
    },

    {
        question:"Davvero?",
        option: [
            "Non sapevo che avevi vissuto a Londra!",
            "Non ho saputo che avevi vissuto a Londra!",
            "Non conoscevo che avevi vissuto a Londra!",
        ],
        answer: 0,
    },

    {
        question:"Te lo chiedo per favore:",
        option: [
            "sei gentile con gli ospiti stasera.",
            "sii gentile con gli ospiti stasera.",
            "sta' gentile con gli ospiti stasera.",
        ],
        answer: 1,
    },

    {
        question:"Dottore, ho un terribile mal di schiena, cosa posso fare?",
        option: [
            "Rimani a letto, riposati, prendi questi antidolorifici e torna fra una settimana.",
            "Non resti a casa, prenda un'aspirina e faccia dello sport.",
            "Rimanga a letto, prenda questi antidolorifici e torni fra una settimana.",
        ],
        answer: 2,
    },

    {
        question:"Per imparare una lingua straniera:",
        option: [
            "è migliore fare un corso e studiare con impegno.",
            "è benissimo fare un corso e studiare con impegno.",
            "è meglio fare un corso e studiare con impegno.",
        ],
        answer: 2,
    },

    {
        question:"Per trovare un buon lavoro oggigiorno:",
        option: [
            "bisogna essere flessibili e laboriosi.",
            "bisogno essere flessibili e laboriosi.",
            "si bisogna essere flessibili e laboriosi.",
        ],
        answer: 0,
    },

    {
        question:"Dottore quando devo mettere la pomata?",
        option: [
            "La metti due volte al giorno, la mattina e la sera.",
            "Mattala due volte al giorno, la mattina e la sera.",
            "La metta due volte al giorno, la mattina e la sera.",
        ],
        answer: 2,
    },

    {
        question:"Leggi il seguente testo e scegli l'opzione corretta: Mi chiamo Gianni, ho 38 anni e ultimamente mi sento molto stanco e stressato. Purtroppo con i ritmi frenetici che ho non riesco a rilassarmi. Sono imprenditore e lavoro almeno dodici ore al giorno tutta la settimana, vado a letto molto tardi la sera e non ho mai tempo per qualche passatempo come fare sport, leggere o ascoltare musica. In media dormo solo 5 ore per notte. A colazione prendo solo un caffè e a pranzo e a cena mangio molta carne e molti dolci. Il fine settimana quando esco con gli amici bevo molti alcolici e fumo almeno dieci sigarette. Quando lavoravo come impiegato guadagnavo di meno ma ero meno stressato. Avevo il tempo di andare in palestra e facevo lunghe passeggiate nel parco. Inoltre non fumavo e bevevo qualche bicchiere di vino ogni tanto. Bevevo al massimo due caffè al giorno mentre adesso ne bevo almeno sei. La scorsa settimana sono andato dal medico, il quale mi ha consigliato di tornare allo stile di vita precedente e mi ha ordinato di smettere di bere e di fumare.",
        option: [
            "Com o trabalho do empresário Gianni, ele melhorou seu estilo de vida.",
            "Com o trabalho precedente, Gianni teve um estilo de vida pejorativo.",
            "Quando trabalhava como funcionário, o estilo de vida de Gianni era mais saudável.",
        ],
        answer:2,
    },

    {
        question:"Sandra, andiamo a fare yoga insieme?",
        option: [
            "Mi sembra un'ottima idea.",
            "Mi sembra una bene idea.",
            "Mi sembra una meglio idea.",
        ],
        answer: 0,
    },

    {
        question:"Dobbiamo portare il vino alla festa?",
        option: [
            "Certo, portate.",
            "Certo, lo portate.",
            "Certo, portatelo.",
        ],
        answer: 2,
    },

    {
        question:"Vorrei visitare una bella città italiana. Dove mi consigli di andare?",
        option: [
            "Va' a Venezia e visita Piazza San Marco.",
            "Anda a Venezia e visita Piazza San marco.",
            "Va' a Venezia e visiti Piazza San marco.",
        ],
        answer: 0,
    },

    {
        question:"Cosa pensi di fare dopo l'Università?",
        option: [
            "Penso che andare a fare un master in Inghilterra.",
            "Penso che anderò a fare un master in Inghilterra.",
            "Penso che andrò a fare un master in Inghilterra.",
        ],
        answer: 2,
    },

    {
        question:"La mia giornata ieri è stata così:",
        option: [
            "Prima ho messo in ordine la casa, poi, mentre mio fratello dormiva, ho giocato con il computer e dalle 6 alle 8 ho fatto lezione di inglese.",
            "Prima mettevo in ordine la casa, poi, mentre mio fratello ha dormito, giocavo con il computer e dalle 6 alle 8 facevo lezione di inglese.",
            "Prima ho messo in ordine la casa, poi, mentre mio fratello ha dormito, ho giocato con il computer e dalle 6 alle 8 ho fatto lezione di inglese."
        ],
        answer: 0,
    },

]

const teste4:typequestion[] = [
    {
        question:"Fra quattro anni:",
        option: [
            "sono andato in Italia.",
            "andrò in Italia.",
            "anderò in Italia.",
        ],
        answer: 1,
    },

    {
        question:"Scegli l'opzione corretta:",
        option: [
            "Stavo per uscire ma poi ha cominciato a piovere e allora ho deciso di rimanere a casa.",
            "Sto per uscire ma poi ha cominciato a piovere e allora ho deciso di rimanere a casa.",
            "Sto uscendo ma poi ha cominciato a piovere e allora ho deciso di rimanere a casa.",
        ],
        answer: 0,
    },


    {
        question:"Ieri Marta stava male e dunque:",
        option: [
            "non è potuta andare alla festa.",
            "non è potuto andare alla festa.",
            "non ha potuto andare alla festa",
        ],
        answer: 0,
    },


    {
        question:"Ieri eravamo molto occupati e dunque:",
        option: [
            "abbiamo dovuto lavorare molto.",
            "siamo dovuti lavorare molto.",
            "abbiamo dovuti lavorare molto.",
        ],
        answer: 0,
    },

    {
        question:"Gregorio non aveva studiato:",
        option: [
            "però non ha superato l'esame.",
            "perché non ha superato l'esame.",
            "quindi non ha superato l'esame.",
        ],
        answer: 2,
    },

    {
        question:"Dove abita Alessandro?",
        option: [
            "Penso che abita in centro.",
            "Penso che vive in centro.",
            "Penso che abiti in centro.",
        ],
        answer: 2,
    },

    {
        question:"Se pioverà:",
        option: [
            "prenederei l'ombrello.",
            "prenderò l'ombrello.",
            "prendevo l'ombrello."
        ],
        answer: 1,
    },

    {
        question:"Michele ha:",
        option: [
            "un lavoro molto buono con uno stipendio alto, le ferie pagate e un contratto a tempo indeterminato.",
            "un lavoro molto buono con uno stipendio basso, senza ferie pagate e un contratto a termine non rinnovabile.",
            "un lavoro pessimo con uno stipendio alto, le ferie pagate e un contratto a tempo indeterminato.",
        ],
        answer: 0,
    },

    {
        question:"Mi dà fastidio quando:",
        option: [
            "la gente parli al cellulare al cinema.",
            "la gente parlano con il cellulare al cinema.",
            "la gente parla al cellulare al cinema.",
        ],
        answer: 2,
    },

    {
        question:"Leggi il seguente testo e scegli l'opzione corretta: Cara Francesca, ti scrivo per dirti che ho deciso di lasciare il mio lavoro. Lo so, forse è stata una decisione un po' affrettata in quanto non ho ancora finito di pagare la casa e ho due figli piccoli. Comunque mio marito Marco crede che abbia fatto bene non solo perché mi pagavano poco ma anche perché ultimamente secondo lui ero troppo stressata. Secondo lui I'unica cosa positiva era che potevo contare su un contratto a tempo determinato. Ora dobbiamo affrontare un periodo pieno di sacrifici e difficoltà però sono fiduciosa per il futuro. Ho già mandato la mia domanda di lavoro a varie aziende e attendo con speranza. E tu cosa mi racconti? Come va con Alfredo e la piccola Giada? Un abbraccio forte, Antonella",
        option: [
            "Para o marido de Antonella, deixar o emprego foi uma decisão precipitada.",
            "Para o marido de Antonella ela fez bem em deixar o emprego apesar do alto salário.",
            "O marido de Antonella concorda com a decisão dela de deixar o emprego.",
        ],
        answer: 2,
    },

    {
        question:"Spero che domani:",
        option: [
            "faccia caldo e ci sia il sole.",
            "fa caldo e c'è il sole.",
            "faccia caldo e c'è il sole.",
        ],
        answer: 0,
    },

    {
        question:"Credo che Paolo sia uno studente molto preparato:",
        option: [
            "perché sono convinto che passerà l'esame.",
            "però sono convinto che passerà l'esame.",
            "quindi sono convinto che passerà l'esame.",
        ],
        answer: 0,
    },

    {
        question:"Il mio appartamento si trova al quinto:",
        option: [
            "piano di un palazzo antico del centro di Roma.",
            "scale di un palazzo antico del centro di Roma.",
            "livello di un palazzo antico del centro di Roma.",
        ],
        answer: 0,
    },

    {
        question:"Scegli l'opzione corretta:",
        option: [
            "Samanta stava per telefonare a Silvia ma poi si è ricordata che l'aveva già avvisata della festa.",
            "Samanta stava telefonando a Silvia ma poi si è ricordata che l'aveva già avvisata della festa.",
            "Samanta sta telefonando a Silvia ma poi si è ricordata che l'aveva già avvisata della festa.",
        ],
        answer: 0,
    },

    {
        question:"Scegli l'opzione corretta:",
        option: [
            "Nella cucina di casa mia c'è il lavello, il frigorifero, un tavolo, la credenza e un forno.",
            "Nel soggiorno di casa mia c'è l'armadio, il letto, la cassettiera e due comodini.",
            "Nel bagno di casa mia c'è una scrivania, un computer, una stampante e una libreria.",
        ],
        answer: 0,
    },

    {
        question:"Sono certo che Martina e Gabriella:",
        option: [
            "arrivino fra poco.",
            "sono arrivate fra poco.",
            "arrivano fra poco.",
        ],
        answer: 2,
    },

    {
        question:"Io preferisco andare al cinema:",
        option: [
            "del teatro.",
            "al teatro.",
            "che al teatro.",
        ],
        answer: 2,
    },

    {
        question:"Con l'autobus:",
        option: [
            "ci metto almeno un'ora per arrivare all'Università.",
            "metto almeno un'ora per arrivare all'Università.",
            "mi metto almeno un'ora per arrivare all'Università.",
        ],
        answer: 0,
    },

    {
        question:"Per essere un buon professore:",
        option: [
            "bisogna conoscere bene la materia.",
            "deve conoscere bene la materia.",
            "si serve conoscere bene la materia.",
        ],
        answer: 0,
    },

    {
        question:"Secondo te quanti anni ha Roberto?",
        option: [
            "Mah, avrà più o meno quarant'anni.",
            "Mah, averà più o meno quarant'anni.",
            "Mah, sarà più o meno quarant'anni",
        ],
        answer: 0,
    },

    {
        question:"È importante che il mio appartamento ideale:",
        option: [
            "è ben illuminato.",
            "sia ben illuminato.",
            "siano ben illuminato.",
        ],
        answer: 1,
    },

    {
        question:"Ma perché non:",
        option: [
            "siete voluti provare le melanzane?",
            "avete volute provare le melanzane?",
            "avete voluto provare le melanzane?",
        ],
        answer: 1,
    },

    {
        question:"Scegli l'opzione corretta:",
        option: [
            "Secondo me Carlo e Franca lavorano insieme.",
            "Credo che Carlo e Franca lavorano insieme.",
            "Secondo me Carlo e Franca lavorino insieme.",
        ],
        answer: 0,
    },

    {
        question:"Scegli l'opzione corretta:",
        option: [
            "Caro Dottor Rossi, in riferimento a...",
            "Eccellente Dottor Rossi, in riferimento a...",
            "Egregio Dottor Rossi, in riferimento a...",
        ],
        answer: 2,
    }

]

const teste5:typequestion[] = [
    {
        question:"Prima di trasferirmi a Londra...",
        option: [
            "Ho già fatto vari corsi di inglese.",
            "Avevo già fatto vari corsi di inglese.",
            "Avrei già fatto vari corsi di inglese.",
        ],
        answer: 1,
    },

    {
        question:"Sono del parere che le parole inglesi in italiano siano sempre più comuni.",
        option: [
            "Hai ragione, sono d'accordo con te!",
            "Concordo all'opinione.",
            "Non mi sembra proprio di no.",
        ],
        answer: 0,
    },

    {
        question:"Chi ti ha dato quelle chiavi?",
        option: [
            "Me l'ha data Giuseppe.",
            "Me le hanno date Giuseppe.",
            "Me le ha date Giuseppe",
        ],
        answer: 2,
    },

    {
        question:"Mi servirebbe il tuo dizionario...",
        option: [
            "me li presti?",
            "me la presti?",
            "me lo presti?",
        ],
        answer: 2,
    },

    {
        question:"Anziché costruire un centro commerciale...",
        option: [
            "io avrei costruito un parco giochi.",
            "io avessi costruito un parco giochi.",
            "io avrebbe costruito un parco giochi.",
        ],
        answer: 0,
    },

    {
        question:"Marta, tu e Antonio avete deciso se vivrete in campagna o in città?",
        option: [
            "Dopo tante discussioni, l'ho spuntato io e dunque andremo a vivere in campagna.",
            "Dopo tante discussioni, l'ho spuntata io e dunque andremo a vivere in campagna.",
            "Dopo tante discussioni, l'ha spuntata io e dunque andremo a vivere in campagna",
        ],
        answer: 1,
    },

    {
        question:"Senta, lascio la macchina in doppia fila solo 5 minuti per andare in farmacia e torno subito.",
        option: [
            "Il vigile: 'Guarda che è vietato parcheggiare qui'.",
            "Il vigile: 'Guardi che è vietato parcheggiare qui'.",
            "Il vigile: 'Guardi che ha vietato parcheggiare qui'.",
        ],
        answer: 1,
    },

    {
        question:"Luca è stato assunto in quello studio medico?",
        option: [
            "Credo che abbia fatto il colloquio, ma non so l'esito.",
            "Credo che ha fatto il colloquio, ma non so l'esito.",
            "Credo che avesse fatto il colloquio, ma non so l'esito.",
        ],
        answer: 0,
    },

    {
        question:"Può darsi che...",
        option: [
            "abbia successo qualcosa alla tua amica, è molto in ritardo.",
            "sia successo qualcosa alla tua amica, è molto in ritardo.",
            "è successo qualcosa alla tua amica, è molto in ritardo.",
        ],
        answer: 1,
    },

    {
        question:"Secondo l'impiegato del reparto spedizioni:",
        option: [
            "il pacco non è arrivato al cliente perché lui era noioso.",
            "il pacco non è arrivato al cliente perché l'indirizzo era sbagliato.",
            "il pacco non è arrivato al cliente perché vive troppo vicino.",
        ],
        answer: 1,
    },

    {
        question:"Finalmente! Pensavo che tu...",
        option: [
            "non sarai arrivato più.",
            "non arriveresti più.",
            "non arrivassi più.",
        ],
        answer: 2,
    },

    {
        question:"Non le ho dato la precedenza all'incrocio, e dunque lei...",
        option: [
            "mi ha fatto un gestaccio.",
            "mi ha fatto una parolaccia.",
            "mi ha detto la linguaccia.",
        ],
        answer: 0,
    },

    {
        question:"Leggi il seguente testo e scegli l'opzione corretta: La nuova iniziativa del comune di Avellino è lasciare dei libri disponibili su panchine della città, tavolini di bar e stazioni di treno e metropolitana affinché i passanti possano usufruirne in modo gratuito, leggerli e lasciarli in quello o in un altro posto per futuri lettori. I generi spaziano dai gialli ai romanzi rosa, ma i primi sono in netta prevalenza tra le preferenze dei lettori. Sulle copertine dei libri vi è una piccola scheda in modo tale che chi li legge può inserire il proprio nome e nazionalità, pur non essendo obbligatorio farlo.",
        option: [
            "A prefeitura de Avellino deixa livros espalhados pela cidade para que os leitores deixem sua opinião em um cartão inserido dentro do livro.",
            "O município de Avellino distribui livros policiais para quem os encontra na cidade.",
            "O município de Avellino deixa tipos de livros espalhados pela cidade, para que os leitores possam lê-los sem ter que pagar nenhuma contribuição financeira.",
        ],
        answer: 2,
    },

    {
        question:"Gianluca ha scritto un messaggio a Fabiana per...",
        option: [
            "dirgli che stasera lui andrà al cinema da solo.",
            "dirle che stasera lui verrà al cinema da solo.",
            "dirle che stasera lui andrà al cinema da solo.",
        ],
        answer: 2,
    },

    {
        question:"Il calo delle nascite in Italia è evidente...",
        option: [
            "nonostante c1è un aumento dei matrimoni.",
            "anche se c1è un aumento dei matrimoni.",
            "sebbene c1è un aumento dei matrimoni",
        ],
        answer: 0,
    },

    {
        question:"Vieni a giocare con me...",
        option: [
            "ti fai usare i miei giocattoli!",
            "ti fanno usare i miei giocattoli!",
            "ti faccio usare i miei giocattoli!",
        ],
        answer: 2,
    },

    {
        question:"Il libro narra di una persona anziana...",
        option: [
            "che fu vittima di un incidente aereo.",
            "che fui vittima di un incidente aereo.",
            "che fummo vittima di un incidente aereo.",
        ],
        answer: 0,
    },

    {
        question:"In Italia, prima della mezzanotte del 31 dicembre...",
        option: [
            "si mangia spesso il cotechino con le lenticchie.",
            "ci mangia spesso il cotechino con le lenticchie.",
            "si mangi spesso il cotechino con le lenticchie.",
        ],
        answer: 0,
    },

    {
        question:"Un tuo amico arriva di nuovo in ritardo all'appuntamento. Tu gli dici:",
        option: [
            "Mi avevi promesso che saresti arrivato in orario oggi!",
            "Mi avevi promesso che arrivassi in orario oggi!",
            "Mi avevi promesso che sarebbe arrivato in orario oggi!",
        ],
        answer: 0,
    },

    {
        question:"Se potessi trasformarmi in un uccello,...",
        option: [
            "sarò volato libero per tutta la città osservando le persone dall'alto.",
            "avessi volato libero per tutta la città osservando le persone dall'alto.",
            "volerei libero per tutta la città osservando le persone dall'alto.",
        ],
        answer: 2,
    },

    {
        question:"Scegli l'opzione corretta (discorso diretto con il suo relativo discorso indiretto):",
        option: [
            '"Mio padre le ha detto: sbrigati o farai tardi!" = Mio padre le ha detto che si sbriga o farà tardi.',
            '"Mio padre le ha detto: sbrigati o farai tardi!" = Mio padre le ha detto che se si sbrigherà farà tardi.',
            '"Mio padre le ha detto: sbrigati o farai tardi!" = Mio padre le ha detto di sbrigarsi o farà tardi.',
        ],
        answer: 2,
    },

    {
        question:"Scegli l'opzione corretta:",
        option: [
            "le regioni italiane sono ricche di monumenti storici, con numerose opzioni di piatti tipici, paesaggi mozzafiato e un mosaico di colori.",
            "le regioni italiane sono ricche di monumenti storici, con dubbie opzioni di piatti tipici, paesaggi mozzafiato e un abisso di colori.",
            "le regioni italiane sono ricche di monumenti storici, con esigue opzioni di piatti tipici, paesaggi strabilianti e un pollice di colori.",
        ],
        answer: 0,
    },

    {
        question:"Giovanni ha fatto un incidente:",
        option: [
            "guidando la macchina.",
            "guidandola la macchina.",
            "guidendo la macchina.",
        ],
        answer: 0,
    },

    {
        question:"Dicono che l'imperatore Nerone:",
        option: [            
            "abbia incendiato Roma per tanti giorni, radendola al suolo.",
            "abbia incendiato Roma per tanti giorni, radendo al suolo.",
            "abbia incendiato Roma per tanti giorni, radendoli al suolo.",
        ],
        answer:0,
    },
]

const teste6:typequestion[] = [
    {
        question:"Scegli l'opzione corretta:",
        option: [
            "Se avessi studiato di più, mi sarei laureato tre anni fa.",
            "Se avessi studiato di più, mi avrei laureato tre anni fa.",
            "Se avrei studiato di più, mi sarei laureato tre anni fa.",
        ],
        answer: 0,
    },

    {
        question:"Scegli l'opzione corretta:",
        option: [
            "I genitori devono sempre ascoltati.",
            "I genitori vanno sempre ascoltati.",
            "I genitori devono essere sempre ascoltati",
        ],
        answer: 2,
    },


    {
        question:"Sono andato al ristorante con mia moglie...",
        option: [
            "dopo aver lasciato nostro figlio alla festa del suo amico Paolo.",
            "dopo di lasciare nostro figlio alla festa del suo amico Paolo.",
            "dopo lasciare nostro figlio alla festa del suo amico Paolo.",
        ],
        answer: 0,
    },


    {
        question:"Luca:",
        option: [
            "ce l'è messa tutta ma non ha passato l'esame.",
            "ce l'ha messa tutta ma non ha passato l'esame.",
            "ce la messa tutta ma non ha passato l'esame.",
        ],
        answer: 1,
    },

    {
        question:"Lo sapevi che Maria ha lasciato Luca dopo 3 giorni di matrimonio?",
        option: [
            "Sarà pure vero?",
            "Non ci posso immaginare!",
            "Davvero? Non ci posso credere!",
        ],
        answer: 2,
    },

    {
        question:"Mi domando quante...",
        option: [
            "...squadre di calcio esistano al mondo.",
            "...squadre di calcio esistevano al mondo.",
            "...squadre di calcio esistessero al mondo.",
        ],
        answer: 0,
    },

    {
        question:"Qual è la tua opinione sull'incidente?",
        option: [
            "Ciò che dovevo dire l'ho detto!",
            "Coloro che dovevo dire l'ho detto!",
            "Colui dovevo dire l'ho detto!",
        ],
        answer: 0,
    },

    {
        question:"Cosa ti piacerebbe mangiare?",
        option: [
            "Vorrei qualche di dolce.",
            "Vorrei qualsiasi di dolce.",
            "Vorrei qualcosa di dolce.",
        ],
        answer: 2,
    },

    {
        question:"Nel 2015...",
        option: [
            "si è letti pochi libri in Italia.",
            "si sono letti pochi libri in Italia.",
            "sono letti pochi libri in Italia.",
        ],
        answer: 1,
    },

    {
        question:"Come mai Gianluca non è andato a scuola?",
        option: [
            "Non lo so, non si sarà sentito molto bene!",
            "Non lo so, sarà sentito poco bene!",
            "Non lo so, è sentito poco bene!",
        ],
        answer: 0,
    },

    {
        question:"Scegli l'opzione corretta (discorso diretto con il suo relativo discorso indiretto):",
        option: [
            "Il Professore disse: 'Domani ci sarà l'esame scritto.' = Il professore disse che il giorno successivo ci sarebbe stato l'esame scritto.",
            "Il Professore disse: 'Domani ci sarà l'esame scritto.' = Il professore disse che il giorno successivo ci sarà l'esame scritto.",
            "Il Professore disse: 'Domani ci sarà l'esame scritto.' = Il professore disse che il giorno successivo ci sarà stato l'esame scritto.",
        ],
        answer: 0,
    },

    {
        question:"Leggi il seguente testo e scegli l'opzione corretta: La stampa internazionale può rivestire un ruolo essenziale nell'incentivare il turismo in Italia, soprattutto di quei luoghi meno noti al grande pubblico. Ogni anno, giornali esteri di rinomata fama stilano una specie di classifica di mete turistiche imperdibili, e tra di esse vi sono sempre alcune italiane, il che funge da spinta alla visita di questi luoghi da parte di turisti provenienti da tutto il mondo. Giacché alcuni blog, siti e giornali esteri godono della fiducia di migliaia di lettori, le destinazioni da loro indicate possono divenire facilmente bersagli di un boom di visitatori. Tutto ciò non fa che fornire un grande slancio al turismo italiano.",
        option: [
            "Alguns destinos turísticos na Itália são recomendados pela imprensa estrangeira porque há um grande boom de visitantes todos os anos.",
            "Alguns destinos turísticos da Itália recebem um boom de visitantes graças à sua popularização pela imprensa internacional.",
            "A imprensa internacional contribui para o aumento do turismo na Itália, tanto em locais menos conhecidos como em locais já famosos.",
        ],
        answer: 1,
    },

    {
        question:"Mi piacerebbe che:",
        option: [
            "la mia opinione sarebbe presa in considerazione.",
            "la mia opinione sia stata presa in considerazione.",
            "la mia opinione fosse presa in considerazione.",
        ],
        answer: 2,
    },

    {
        question:"Cosa ti sembra di quel romanzo?",
        option: [
            "È il libro più noioso che avessi mai letto.",
            "È il libro più noioso che abbia mai letto.",
            "È il libro più noioso che avrei mai letto.",
        ],
        answer: 1,
    },

    {
        question:"Mauro e Marta hanno avuto una brutta discussione. Lei gli dice:",
        option: [
            "Quando trovi queste scuse mi fai davvero imbestialire!",
            "Ho un debole per le tue scuse!",
            "Quando trovi queste scuse mi faccio davvero incavolare!",
        ],
        answer: 0,
    },

    {
        question:"Se una persona è presuntuosa, allora:",
        option: [
            "se la tira.",
            "va su di giri.",
            "è al settimo cielo.",
        ],
        answer: 0,
    },

    {
        question:"Andrai al mare quest'anno?",
        option: [
            "Benché mi diano le ferie, sì!",
            "Qualora mi dessero le ferie, sì!",
            "Purché non mi diano le ferie, sì!",
        ],
        answer: 1,
    },

    {
        question:"Questo è il film...",
        option: [
            "di che ti avevo parlato.",
            "che ti avevo parlato.",
            "di cui ti avevo parlato.",
        ],
        answer: 2,
    },

    {
        question:"Se vedi Chiara...",
        option: [
            "dille che dopo aver usato la bici può lasciarla a casa.",
            "dille che dopo usare la bici può lasciarla a casa.",
            "digli che dopo aver usato la bici può lasciare a casa",
        ],
        answer: 0,
    },

    {
        question:"Non posso dire se le rane fritte mi piacciano o no...",
        option: [
            "non avendo mai assaggiato.",
            "non avendole mai assaggiato.",
            "non avendole mai assaggiate.",
        ],
        answer: 2,
    },

    {
        question:"Antonio è più intelligente...",
        option: [
            "di quanto pensassi.",
            "che quanto pensassi.",
            "che quello che pensassi.",
        ],
        answer: 0,
    },

    {
        question:"Ho cambiato la data della festa...",
        option: [
            "per far sì che lui può venire.",
            "per far sì che lui potesse venire.",
            "per far sì che lui potrà venire.",
        ],
        answer: 1,
    },

    {
        question:"Scegli l'opzione corretta:",
        option: [
            "due lavastoviglie, tre cavitappi e quattro cavolfiori",
            "due lavastoviglia, tre cavitappi e quattro cavolfiore",
            "due lavastoviglie, tre cavatappi e quattro cavolfiori",
        ],
        answer: 2,
    },

    {
        question:"Com'è andato l'esame di geografia politica?",
        option: [
            "Il prof. mi ha fatto domande troppo difficili e io mi sono un po' arrampicata sugli specchi.",
            "Il prof. mi ha fatto domande troppo difficili e io non me la sono sbrigata da sola.",
            "Il prof. mi ha fatto domande troppo difficili e io non me la sono presa.",
        ],
        answer: 0,
    },
]