// stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

const app = new Vue(
    {
        el: '#root',
        day:'',
        input:'',
        data:{
            select:'',
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
            newTask:'',
            tasks:[
                'Fare spesa',
                'Rispondere alla mail di Matteo'
            ]
        },
        methods: {
            currentDay(){
                const current = new Date();
                const dayN = current.getDay();
                const num = current.getDate();
                
                if(dayN == 0)this.day='Domenica';
                if(dayN == 1)this.day='Lunedì';
                if(dayN == 2)this.day='Martedì';
                if(dayN == 3)this.day='Mercoledì';
                if(dayN == 4)this.day='Giovedì';
                if(dayN == 5)this.day='Venerdì';
                if(dayN == 6)this.day='Sabato';
                
                const dayNum = this.day +' '+ num;
                return dayNum;
            },
            currentMonth(){
                const newDate = new Date();
                let m = this.months[newDate.getMonth()];
                
                const month = `${m} ${newDate.getFullYear()}`;
                return month
            },
            addTask(){
                if(this.newTask == ''){
                    alert("Non puoi inserire un task vuoto");
                }else{
                    this.tasks.push(this.newTask);
                    this.newTask = '';
                    document.getElementById("task-box").className = 'op-0';
                    this.hideTaskBox();
                }
            },
            removeTask(index){
                console.log(index);
                this.tasks.splice(index, 1);
            },
            showTaskBox(){
                document.getElementById("task-box").className = 'op-1 add-task-request';
                document.getElementById("layover").className = 'lay-active';
                
                //focus on layover input
                const input = this.$refs.text;
                window.setTimeout(function(){
                    input.focus();
                }, 500);
            },
            hideTaskBox(){
                document.getElementById("task-box").className = 'op-0';
                document.getElementById("layover").className = 'lay-inactive';
            }
        }
    }
);

