//Showing only TV Shows

const API_KEY = "d7e10b4437e0e449d46c170de6d598f4"
const IMG_URL = "https://image.tmdb.org/t/p/original";
const YOUTUBE_API_KEY ="AIzaSyBpuThUpEN9Jiq4XpiyrTPbDraAnOb9Sac"
const rows= document.querySelector(".rows")

// URLs from TMDB API
const requests ={
    popular : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    topRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    trending : `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    popularTV : `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
}


//fetching data from only Popular TV URL
axios.get(requests.popularTV)
.then(res=>{
    let data = res.data.results

    let row = document.createElement("div")
    row.className="row"
    rows.appendChild(row)
    row.innerHTML = `<h2 class="row-title"></h2>
    <div class ="row-poster">
    <div class ="row-posters-grid"></div></div>`
    const latestRow = document.querySelector(".row-posters-grid")
    latestRow.style.flexWrap ="wrap"
    latestRow.style.alignItems ="center"
    latestRow.style.justifyContent ="center"
    rows.style.width = "100%"
    
    data.forEach(item=>{
      let imgContainer = document.createElement("div")
        imgContainer.className ="img-container-tv"
        latestRow.appendChild(imgContainer)

        let moviePoster = document.createElement("img")
        moviePoster.className = "img-fluid"
        moviePoster.src = item.poster_path ? IMG_URL + item.poster_path : " ";

        imgContainer.appendChild(moviePoster)

        let movieTitle = document.createElement("h6")
        movieTitle.className ="movie-title-name"
        movieTitle.textContent = item.name
        moviePoster.appendChild(movieTitle)
       
         // Movie trailer from youtube will load on clicking the movie poster  
         moviePoster.addEventListener("click", () =>{
               let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${item.name}&key=${YOUTUBE_API_KEY}`
               fetch(url).then(res=> res.json()).then(data=>{
               let result = data.items[0]
               let iframe = document.createElement("iframe")
               iframe.className ="movie-trailer"
               iframe.src=`https://www.youtube.com/embed/${result.id.videoId}?autoplay=1&mute=1`
              
               imgContainer.appendChild(iframe)

              //Movie Trailer will NOT be shown when mouse leaves the movie poster
               iframe.addEventListener('mouseleave',()=>{
               
                 iframe.remove()
              })
              })
              })

         })
  })




    