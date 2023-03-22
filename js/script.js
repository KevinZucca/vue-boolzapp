const { createApp } = Vue

createApp({
  data() {
    return {
        contacts: [
            {
                name: 'Michele',
                avatar: '../img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        showMenu: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        showMenu: false,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        showMenu: false,
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        showMenu: false, 
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        showMenu: false,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        showMenu: false,
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        showMenu: false,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        showMenu: false,
                    
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        showMenu: false,
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        showMenu: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        showMenu: false,
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        showMenu: false, 
                   
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        showMenu: false,
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        showMenu: false,                
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        showMenu: false,
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        showMenu: false,                 
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        showMenu: false,                 
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        showMenu: false,
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        showMenu: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        showMenu: false,                 },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                        showMenu: false,
                    }
                ]
            }
        ],
        selectedContactIndex: 0,
        newMessageText: "",     
        searchText: "",
        

        botAnswers: [
            {
                date: new Date().toLocaleString('it-IT'),
                message: 'Ehilà!',
                status: 'received',
                showMenu: false,
            },
            {
                date: new Date().toLocaleString('it-IT'),
                message: 'Non ne ho idea',
                status: 'received',
                showMenu: false,
            },
            {
                date: new Date().toLocaleString('it-IT'),
                message: 'Ti risponderò sempre la stessa cosa mi sa',
                status: 'received',
                showMenu: false,
            },
            {
                date: new Date().toLocaleString('it-IT'),
                message: 'Ma una partita online piuttosto?',
                status: 'received',
                showMenu: false,
            },
            {
                date: new Date().toLocaleString('it-IT'),
                message: 'E te che gli hai detto?',
                status: 'received',
                showMenu: false,
            },
            {
                date: new Date().toLocaleString('it-IT'),
                message: 'Non so cosa dirti',
                status: 'received',
                showMenu: false,
            },
            {
                date: new Date().toLocaleString('it-IT'),
                message: 'Beh, io ieri non stavo al massimo quindi',
                status: 'received',
                showMenu: false,
            },
            {
                date: new Date().toLocaleString('it-IT'),
                message: 'Direi perchè è così che la penso',
                status: 'received',
                showMenu: false,
            },
            {
                date: new Date().toLocaleString('it-IT'),
                message: 'Un gatto e un frullatore',
                status: 'received',
                showMenu: false,
            },
            {
                date: new Date().toLocaleString('it-IT'),
                message: 'Cambiamo argomento, che ne pensi dei tik toker?',
                status: 'received',
                showMenu: false,
            },
            {
                date: new Date().toLocaleString('it-IT'),
                message: 'Ho fatto quello che andava fatto',
                status: 'received',
                showMenu: false,
            },
            {
                date: new Date().toLocaleString('it-IT'),
                message: 'Guarda, penso che sia meglio un sabato sera con Netflix',
                status: 'received',
                showMenu: false,
            }
        ],

        hours: "", 
        lastAccess: "Ultimo accesso oggi alle " + this.getMessageHour(new Date().toLocaleString('it-IT')),
        showMic: true,
        showPlane: false,
    }
  },

  methods: {
    selectContact(contactIndex) {
       this.selectedContactIndex = contactIndex;
    },

    sendMessage() {
        const selectedContact = this.contacts[this.selectedContactIndex];
        const newMessage = {
                date: new Date().toLocaleString('it-IT'),
                message: this.newMessageText,
                status: 'sent',
                showMenu: false,          }
        if(this.newMessageText == "" || this.newMessageText == null) {
            return false
        } else {
            selectedContact.messages.push(newMessage)
            setTimeout(() => {
                const selectedContact = this.contacts[this.selectedContactIndex];
                const answer = {
                    date: new Date().toLocaleString('it-IT'),
                    message: this.generateRandomAnswer(),
                    status: 'received',
                    showMenu: false,
                }
                this.lastAccess = new Date().toLocaleString('it-IT'),
                selectedContact.messages.push(answer);
                setTimeout(() => {
                    this.lastAccess = "Ultimo accesso oggi alle " + this.getMessageHour(new Date().toLocaleString('it-IT'));
                }, 2000);
                setTimeout(() => {
                    this.lastAccess = "Ultimo accesso oggi alle " + this.getMessageHour(new Date().toLocaleString('it-IT'));
                }, 2000);
                this.lastAccess = "Online"
                }, 2000);
            this.newMessageText = "";
            this.lastAccess = "sta scrivendo...";
            this.showMic = true;
            this.showPlane = false;
        }
    },

    searchContact () {
        this.contacts.forEach(contact => {
            contact.visible = contact.name.toLowerCase().includes(this.searchText.toLowerCase())
        });
    },

     getMessageHour(date) {
         return date.substring(11, 16);
     },

     getLastMessageHour(date) {
        return date.substring(11, 16);
    },


    generateRandomAnswer() {
        const randomAnswer = Math.floor(Math.random() * this.botAnswers.length)
        const answer = this.botAnswers[randomAnswer].message
        return answer
    },

    switchOption() {
        this.showMic = false;
        this.showPlane = true;
    },

    toggleShowMenu(singleMessage) {
        singleMessage.showMenu = !singleMessage.showMenu    
    },
  
    deleteMessage(messageIndex) {
        this.contacts[this.selectedContactIndex].messages.splice(messageIndex, 1)
    }
}
}).mount('#app')