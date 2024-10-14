let movies = [
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/05192b4e-6bfe-4140-93b2-00472a1b392f/300x', name:'Гладиатор', genre:['история','боевик','драма','приключения'],year:2000, link:'https://www.kinopoisk.ru/film/474/'},
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/7dfa6dbd-15ea-41e9-b869-63dd33ffdb0d/300x', name:'Властелин колец: Возвращение короля',genre:['фэнтези','приключения','боевик'], year:2003,link:'https://www.kinopoisk.ru/film/3498/'},
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/02c6b4cb-a610-4503-9e8c-9dee69b5a584/300x', name:'Пираты карибского моря: Проклятие Черной жемчужины', genre:['фэнтези', 'боевик', 'приключения'],year:2003,link:'https://www.kinopoisk.ru/film/4374/'},
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/b4dc319b-c605-4445-a56c-9c27b787b5f4/1920x',name:'Гордость и предубеждение',genre:['мелодрама','история'],year:2005,link:'https://www.kinopoisk.ru/film/81733/'},
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/6466f696-9b0a-458c-9367-410e3677380f/1920x',name:'Герцогиня',genre:['драма','мелодрама','биография', 'история'],year:2008,link:'https://www.kinopoisk.ru/film/393872/'},
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/10592371/7f0e6761-4635-46ad-b804-59d5cf1ae85c/300x450',name:'Титаник',genre:['мелодрама','история','триллер','драма'],year:2008,link:'https://www.kinopoisk.ru/film/2213/'},
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/022a58e3-5b9b-411b-bfb3-09fedb700401/300x450',name:'Один дома',genre:['комедия', 'семейный'],year:1990,link:'https://www.kinopoisk.ru/film/8124/'},
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/9e9e2b2c-a3c1-462e-8d84-e6a19fbe5b9c/300x450', name:'Пятый элемент',genre:['фантастика','боевик','комедия','мелодрама'],year:1997,link:'https://www.kinopoisk.ru/film/2656/'},
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/1c5afd90-ae72-4c11-b20b-971a23ca701d/orig', name:'Человек-паук',genre:['фантастика','боевик','приключения'],year:2002,link:'https://www.kinopoisk.ru/film/838/'},
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/221559d4-db98-423e-a077-ebfaeb15c510/orig', name:'Человек-паук 2',genre:['фантастика','боевик','приключения'],year:2004,link:'https://www.kinopoisk.ru/film/2898/'},
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/48f0169b-19b4-4b22-af2c-b7b5e5c6933f/orig', name:'Человек-паук 3: Враг в отражении',genre:['фантастика','боевик','приключения'],year:2007,link:'https://www.kinopoisk.ru/film/82441/'},
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/e8444e49-437f-4dad-8c7a-e056a5468ce9/orig', name:'В поисках Немо',genre:['мультфильм','комедия','приключения','семейный'],year:2003,link:'https://www.kinopoisk.ru/film/7908/'},
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/1f7b3dc7-d10b-4e2d-b5b4-ca257d3737ac/orig', name:'Кавказская пленница, или Новые приключения Шурика',genre:['комедия','приключения','мелодрамма'],year:1966,link:'https://www.kinopoisk.ru/film/44745/'},
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/a83adfd8-8051-49d7-85e3-a4f077852688/orig', name:'Маска',genre:['комедия','фентези'],year:1994,link:'https://www.kinopoisk.ru/film/6039/'},
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/cb66f2cd-d4a1-4093-8743-24c7ab2a5998/orig', name:'Мастер и Маргарита (мини–сериал)',genre:['триллер','драма','мелодрама'],year:2005,link:'https://www.kinopoisk.ru/series/79429/'},
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/9d004f06-cb4c-432a-b893-c911b5766ee3/orig', name:'Спирит: Душа прерий',genre:['приключения','семейный'],year:2005,link:'https://www.kinopoisk.ru/film/839/'},
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/9cbec89c-a80e-4e1c-99b9-89e5c46074ce/orig', name:'Анна и король',genre:['драма','мелодрама','история'],year:1999,link:'https://www.kinopoisk.ru/film/5336/'},
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/eca32434-6bff-4dde-b3a6-db37e5920368/orig', name:'Основатель',genre:['биография','драма'],year:2016,link:'https://www.kinopoisk.ru/film/893245/'},
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/0e6d2ab8-3e03-4461-92f2-c9224677ffcb/orig', name:'Алеша Попович и Тугарин Змей',genre:['комедия','приключения','фентези','мелодрама','семейный'],year:2004,link:'https://www.kinopoisk.ru/film/81041/'},
    {pic:'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/9f72f545-9b1f-4280-8e98-f9673fb0fb05/orig', name:'Анна Каренина',genre:['драма','мелодрама'],year:2012,link:'https://www.kinopoisk.ru/film/575195/'},
]
let containerMovies = document.querySelector('.movies__container');
containerMovies.classList.add('container_list');

//функция вывода фильмов на экран
function getMovies(arr) {
        containerMovies.innerHTML = '';
        arr = arr.sort(() => Math.random() - 0.5);
        for (let i = 0; i < arr.length; i++) { 
            
            let item = document.createElement('div'); 
            item.classList.add('item-movie');           
            containerMovies.appendChild(item);

            if (arr.length == 1) {
                containerMovies.classList.remove('container_list');
                containerMovies.classList.add('container_movie_random');
            } else {
                containerMovies.classList.remove('container_movie_random');
                containerMovies.classList.add('container_list');                
            }
            

            for (let key in arr[i]) {              
                if (key == "pic") {
                    createElement(arr, item, 'img', i);
                } else if (key == "name") {
                    createElement(arr, item, 'h3', i);
                } else if (key == "genre") {
                    createElement(arr, item, 'p', i);
                } else if (key == "link") {
                    createElement(arr, item, 'a', i);
                }      
        }                
    }
    return containerMovies;   
}
//первичный вывод списка фильмов
document.querySelector('h1').addEventListener('click', function() {
    getMovies(movies);
})
getMovies(movies);

//функция добавления фильма в контейнер
function createElement(arr, parent, elem, i) {    
    switch (elem) {        
        case 'img': {
            let img = document.createElement(elem);
            img.src = arr[i].pic;            
            img.classList.add('img-style');
            parent.appendChild(img);
        } break;
        case 'h3': {
            let h3 = document.createElement(elem);
            h3.innerHTML = `"${arr[i].name}" ${arr[i].year} г.`;            
            parent.appendChild(h3);
        } break;
        case 'p': {
            let genre = document.createElement(elem);
            genre.innerHTML += 'Жанр: ';
            genre.classList.add('p-style');
            for (let word of arr[i].genre) {
                genre.innerHTML += word+' ';
            }
            parent.appendChild(genre);                        
        } break;
        case 'a': {
            let a = document.createElement(elem);
            a.classList.add('a-style')
            a.innerHTML = 'Фильм на кинопоиске';
            a.href = arr[i].link;
            parent.appendChild(a); 
        }
    }       
}

let button = document.querySelector('.button_style');
let select = document.querySelector('#genre');

let genres = {
    "history":"история",
    "action":"боевик",
    "drama":"драма",
    "adventures":"приключения",
    "fantasy":"фэнтези",
    "melodrama":"мелодрама",
    "biography":"биография",
    "thriller":"триллер",
    "comedy":"комедия",
    "family":"семейный",
    "fantastic":"фантастика",
}

//действия при нажатии на кнопку
button.addEventListener('click', function() {  
    containerMovies.innerHTML ='';
    let genre = select.value;    
    getFilter(genres[genre]);    
});

//фильтр фильмов
function getFilter(g){    
    let res = movies.filter((elem)=> elem.genre.includes(g));    
    let randomNum = Math.floor(Math.random() * res.length); 
    getMovies([res[randomNum]]);
}

