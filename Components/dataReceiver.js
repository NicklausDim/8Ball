function dataReceiver() {
    document.querySelector('#search-results').innerHTML = '';
    async function dataHandler(data) {
        let result = await data.json();
        console.log(result);
        for (let index = 0; index < result.d.length; index++) {
            const movie = result.d[index];
            let card = `
            <a href = "http://imdb.com">
            <div class="card">
                <img src = "${movie.i.imageUrl}"
            </div>
            </a>
            `
            document.querySelector('#search-results').insertAdjacentHTML('beforebegin',card);
        }
    }

    function errorHandler(err) {
        console.log(err);
    }

    let url = 'https://imdb8.p.rapidapi.com/title/auto-complete?q='+document.getElementById('search').value;
    let options = {
        'method':'GET',
        'headers': {
            'x-rapidapi-key': "ad560d2758mshea3a392b9b06bb4p1dd47fjsnfd9c3537b79f",
            'x-rapidapi-host': "imdb8.p.rapidapi.com"
        }
    };

    fetch(url, options).then(dataHandler).catch(errorHandler);
}

export default dataReceiver;