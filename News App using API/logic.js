const main_container = document.querySelector('.main_container');

const main_part = document.querySelector('.columns .main_part');

const row = document.querySelector('.row');


const API_key = "648d8bf3e1c04c90934df194bcff3d77";


window.addEventListener('load', () => {

    // const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_key}`;
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_key}`;

    fetch(url)
        .then(response => response.json() )
        .then(data => {

            let articles = data.articles;

            articles.forEach(function (element, index) {

                let markup = `
            <div class="container">
                <h3>${data.articles[index].title}</h3>
            </div>
            <div class="container my-4 img-fluid">
                <img src="${data.articles[index].urlToImage}" alt="">
            </div>
            <div class="container text-start mb-4">
            ${data.articles[index].description}
            </div>
            `;

                const col = document.createElement('div');
                col.classList.add('col');
                col.innerHTML = markup;
                row.appendChild(col);

            });

        })
        .catch(error => console.log('ERROR:', error))

})

