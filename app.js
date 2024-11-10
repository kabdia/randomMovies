let movies = [];
fetch('./data-movies.json')
    .then(response => response.json())
    .then(data => {        
        movies.push(...data);
    })
    .catch(error => {
        console.log('Ошибка при загрузке JSON', error);
    })
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
    "history": "история",
    "action": "боевик",
    "drama": "драма",
    "adventures": "приключения",
    "fantasy": "фэнтези",
    "melodrama": "мелодрама",
    "biography": "биография",
    "thriller": "триллер",
    "comedy": "комедия",
    "family": "семейный",
    "fantastic": "фантастика",
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

