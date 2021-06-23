// stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

const app = new Vue(
    {
        el: '#root',
        data:{
            mesi:[
                "Gennaio",
                "Febbraio",
                "Marzo",
                "Aprile",
                "Maggio",
                "Giugno",
                "Luglio",
                "Agosto",
                "Settembre",
                "Ottobre",
                "Novembre",
                "Dicembre"
            ],
            giorni:[
                "Lunedì",
                "Martedì",
                "Mercoledì",
                "Giovedì",
                "Venerdì",
                "Sabato",
                "Domenica"
            ]
        },
        methods: {
            dataDiOggi() {
              const d = new Date();
              let mese = this.mesi[d.getMonth()];
              let giorno = this.giorni[d.getDay()];
              
              const data = `${giorno}, ${d.getMonth()} ${mese} ${d.getFullYear()}`;
              return data;
            }
        }
    }
);

