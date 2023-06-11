const app = Vue.createApp({
    data() {
        return {
            quote:'Im Batman',
            author:'Bruce Wayne'
        }
    },
    methods: {
        changeQuote(){
            console.log('Hola Mundo');
        }
    },
})

app.mount('#myApp')