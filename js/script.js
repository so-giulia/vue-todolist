// stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

const app = new Vue(
    {
        el: '#root',
        data:{
            months:[
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
            days:[
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
            currentDay() {
              const newDate = new Date();
              let d = this.days[newDate.getDay()];
              
              const today = `${d} ${newDate.getDay()}`;
              return today
            },
            currentMonth() {
                const newDate2 = new Date();
                let m = this.months[newDate2.getMonth()];
                
                const month = `${m} ${newDate2.getFullYear()}`;
                return month
            }
        }
    }
);

