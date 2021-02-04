function topMoviesReceiver() {
    document.querySelector('#topMovies').innerHTML = '';
    async function topMoviesDataHandler(data) {
        let result = await data.json();
        console.log(result);
        for (let i = 0; i < 10; i++) {
            const movieId = result[i];

            await fetch('https://imdb8.p.rapidapi.com/title/auto-complete?q='+movieId,options).then(async function(newData){
            let movie = await newData.json();
            console.log(movie)
            let card = `
            <a href = "${movie.d.imageUrl}">
            <div class="topMovies">
                <img src = "${movie.title.d.imageUrl}"
            </div>
            </a>
            `
            document.querySelector('#topMovies').insertAdjacentHTML('beforeend',card);
            })
            
            
            
        }
    }

    function errorHandler(err) {
        console.log(err);
    }

    let url = 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US"'+document.getElementById('search').value;
    let options = {
        'method':'GET',
        'headers': {
            'x-rapidapi-key': "ad560d2758mshea3a392b9b06bb4p1dd47fjsnfd9c3537b79f",
            'x-rapidapi-host': "imdb8.p.rapidapi.com"
        }
    };

    fetch(url, options).then(topMoviesDataHandler).catch(errorHandler);
}

export default topMoviesReceiver;