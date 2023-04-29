

const API_KEY = "d7e10b4437e0e449d46c170de6d598f4"
const YOUTUBE_API_KEY = "AIzaSyBpuThUpEN9Jiq4XpiyrTPbDraAnOb9Sac"
// const new_api = "AIzaSyB9A4Hz9R1P0GEeljojgkIiYn1vvZUL534" --alternate youtube api key
const IMG_URL = "https://image.tmdb.org/t/p/original";
const bannerTitle = document.querySelector(".banner-title")
const bannerDesc = document.querySelector(".banner-desc")
const banner = document.querySelector(".bannerImgs")
const rows = document.querySelector(".rows")


// URLs from TMDB API
const requests = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  popularTV: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
}



// fetching the queries and assigning it to the variables
const trendingMovies = axios.get(requests.popular);
const popularMovies = axios.get(requests.topRated);
const topRatedMovies = axios.get(requests.trending);
const tvshows = axios.get(requests.popularTV);



// Function to show only 150 charcters for Banner Description
let truncate = (sentences) => {
  let char_list = sentences.split('')
  let result = char_list.length > 150 ? sentences.substr(0, 150) + "..." : sentences
  return result
}


// Objects with functions as values
const functionObject={
  banners : function popularBanners()
  {  //Fetching the banners
    axios.get(requests.popular)
    .then(res => {
      let movies = res.data.results;
      let setMovieBanners = movies[Math.floor(Math.random() * movies.length - 1)]
      if(bannerTitle){
      bannerTitle.innerHTML = setMovieBanners.original_title}
      if(bannerDesc){
      bannerDesc.innerHTML = setMovieBanners.overview}
      if(banner){
      banner.src = IMG_URL + setMovieBanners.backdrop_path
      banner.srcset = IMG_URL + setMovieBanners.backdrop_path
      }

    })

  },

  //Function to get the title of the each sections
  titles : function(row)
  {
    switch(row) {
      case 0:
       return 'Trending'
        break;
      case 1:
         return 'Popular'
        break;
      case 2:
         return 'Top rated'
        break;
      case 3:
         return 'TV shows'
        break;
    }
  },
   // Fetching the data of all Trending movies, Popular, Top Rated and TV shows using axios and displaying them 
  movies :  function()
  {
  axios.all([trendingMovies, popularMovies, topRatedMovies, tvshows]).then(axios.spread((...responses) => {
let i = 0;
 let mainFragment = document.createDocumentFragment();
while(i< 4){
 let data = responses[i].data.results;
 
    let row = document.createElement('div');
    row.classList.add('row')
    let title = document.createElement('h2');
    title.innerHTML = functionObject.titles(i);
    title.classList.add('row-title')
    let poster = document.createElement('div');
    poster.classList.add('row-poster');
    let grid = document.createElement('div');
    grid.classList.add('row-posters-grid');
    
     
    let fregment = document.createDocumentFragment();
    data.forEach((item, index) => {
      
      let movieTitle = document.createElement('h6');
      movieTitle.className = 'movie-title-name';
      movieTitle.textContent = item.title;
      
      let moviePoster = document.createElement('img');
      moviePoster.className = 'img-fluid';
      moviePoster.src = item.poster_path ? IMG_URL + item.poster_path : " ";
    
    
    
      let imgContainer = document.createElement('div');
      imgContainer.className = 'img-container-tv';
      
       imgContainer.appendChild(movieTitle);
       imgContainer.appendChild(moviePoster);
       
       fregment.appendChild(imgContainer);

         // Movie trailer from youtube will load on clicking the movie poster      
         moviePoster.addEventListener('click', () => {
                  let itemName = item.title ? item.title : item.name
                  
                  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${itemName}&key=${YOUTUBE_API_KEY}`;
                  // let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${itemName}&key=${new_api }`;
                  fetch(url)
          .then(res => res.json())
          .then(data => {
            let result = data.items[0];
            let iframe = document.createElement('iframe');
            iframe.className = 'movie-trailer';
            iframe.src = `https://www.youtube.com/embed/${result.id.videoId}?autoplay=1&mute=1`;
            imgContainer.appendChild(iframe);
           
            //Movie Trailer will NOT be shown when mouse leaves the movie poster
            iframe.addEventListener('mouseleave', () => {
              iframe.remove();
            });
          });
                });
})

    grid.appendChild(fregment);
    poster.appendChild(grid);
    row.appendChild(title);
    row.appendChild(poster);
    mainFragment.appendChild(row);
    
i++;
}
rows.appendChild(mainFragment);

})).catch(errors => {
  console.log(errors)

})
}
}

document.addEventListener("DOMContentLoaded",()=>{
  //calling the functions defined in the object
  functionObject.banners()
  functionObject.movies()
 
  

})

export default functionObject


