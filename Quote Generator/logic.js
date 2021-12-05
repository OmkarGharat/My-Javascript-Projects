let quote = document.querySelector('#quote');
let author = document.querySelector('#author');

window.addEventListener('load', () => {

    const url = 'https://type.fit/api/quotes';

    fetch(url)

        .then(response => response.json())
        .then(data => {
            randNumber = Math.floor(Math.random() * 1643) + 0;
            quote.innerHTML = data[randNumber].text;
            author.innerHTML = `- ${data[randNumber].author}`;

        })
        .catch(error => console.log('ERROR:', error));

});