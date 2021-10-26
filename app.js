
const app = Vue.createApp({

    data(){
        return{
            quote: `I'm Batman`,
            author: `Bruce Wayne`
        }
    },
    methods:{
        changeQuote(){
            console.log('Hola');
            this.author = `Francisco Acosta`;
            this.capitalize();
        },
        capitalize(){
            this.quote = this.quote.toUpperCase();
        }
    }
});

app.mount('#myApp');