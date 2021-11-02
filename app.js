const quotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight', image: 'https://i.ytimg.com/vi/xGcfBRkJSWQ/maxresdefault.jpg' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight', image: 'https://i.ytimg.com/vi/xGcfBRkJSWQ/maxresdefault.jpg' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins', image: 'https://dam.smashmexico.com.mx/wp-content/uploads/2020/07/batman.begins-ras-al-ghul-destino-david-s-goyer-COVER.jpg' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight', image: 'http://images2.fanpop.com/image/photos/9400000/Harvey-Dent-the-dark-knight-9471370-543-359.jpg' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight', image: 'https://i.ytimg.com/vi/xGcfBRkJSWQ/maxresdefault.jpg' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One', image: 'https://static3.cbrimages.com/wordpress/wp-content/uploads/2019/12/batman-christian-bale-featured.jpg'},
]

const app = Vue.createApp({

    data(){
        return {
            quotes,
        }
    },
});

app.mount('#myApp');