let movies = [
    {name:'Гладиатор', genre:['история','боевик','драма','приключения'],year:2000, link:'https://www.kinopoisk.ru/film/474/',pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/05192b4e-6bfe-4140-93b2-00472a1b392f/300x'},
    {name:'Властелин колец: Возвращение короля',genre:['фэнтези','приключения','боевик'], year:2003,link:'https://www.kinopoisk.ru/film/3498/', pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/7dfa6dbd-15ea-41e9-b869-63dd33ffdb0d/300x'},
    {name:'Пираты карибского моря: Проклятие Черной жемчужины', genre:['фэнтези', 'боевик', 'приключения'],year:2003,link:'https://www.kinopoisk.ru/film/4374/',pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/02c6b4cb-a610-4503-9e8c-9dee69b5a584/300x'},
    {name:'Гордость и предубеждение',genre:['мелодрама','история'],year:2005,link:'https://www.kinopoisk.ru/film/81733/',pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/b4dc319b-c605-4445-a56c-9c27b787b5f4/1920x'},
    {name:'Герцогиня',genre:['драма','мелодрама','биография', 'история'],year:2008,link:'https://www.kinopoisk.ru/film/393872/',pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/6466f696-9b0a-458c-9367-410e3677380f/1920x'},
    {name:'Титаник',genre:['мелодрама','история','триллер','драма'],year:2008,link:'https://www.kinopoisk.ru/film/2213/',pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/10592371/7f0e6761-4635-46ad-b804-59d5cf1ae85c/300x450'},
    {name:'Один дома',genre:['комедия', 'семейный'],year:1990,link:'https://www.kinopoisk.ru/film/8124/',pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/022a58e3-5b9b-411b-bfb3-09fedb700401/300x450'},
    {name:'Пятый элемент',genre:['фантастика','боевик','комедия','мелодрама'],year:1997,link:'https://www.kinopoisk.ru/film/2656/',pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/9e9e2b2c-a3c1-462e-8d84-e6a19fbe5b9c/300x450'},
]

let containerMovies = document.querySelector('.movies__container');

function getMovies() {
    containerMovies.innerHTML = '';
    for (let i = 0; i <= movies.length; i++) {
        containerMovies.innerHTML += `
        <div>
            <p>${movies[i].name}</p>           
        </div>
        `
    }
    return containerMovies;   
}
getMovies();

