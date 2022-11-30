const API_KEY = `04ec85a684eae5ff819855d99f118b3b`
const image_path = `https://image.tmdb.org/t/p/w1280`
// const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=%22`

const input = document.querySelector('.search input')
const btn = document.querySelector('.search button')
const main_grid_title = document.querySelector('.favorites h1')
const main_grid = document.querySelector('.favorites .movies-grid')

get_movie_by_search('game')
async function get_movie_by_search (search_term) {
    const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search_term}`)
    const respData = await resp.json()
    console.log(respData.results);
    return respData.results
}

btn.addEventListener('click', add_searched_movies_to_dom)

async function add_searched_movies_to_dom () {
    const data= await get_movie_by_search(input.value)
    console.log(data);

    main_grid_title.inerText = `Search Results...`
    main_grid.innerHTML = data.map(e => {
        console.log(e.title);
    })
}