// fetch('https://www.boredapi.com/api/activity')
// .then(data => data.json())
// .then(Quotedata =>{
//     const Quotetext = Quotedata.content ;
//     const QuoteElement = document.getElementById('QuoteElement');
//     QuoteElement.innerHTML = Quotetext ;
// })


fetch('https://www.boredapi.com/api/activity')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.activity;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = jokeText;

    })