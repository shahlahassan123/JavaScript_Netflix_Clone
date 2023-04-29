
//Showing all the movies from Trending Movies, Popular and Top Rated without the titles

import functionObject from "./requests.js"

document.addEventListener("DOMContentLoaded",()=>{
  //calling the movie function from the imported file
  functionObject.movies()
const rowTitle = document.getElementsByTagName("h2")
const moviePoster = document.getElementsByTagName("img")

setTimeout(() => {
  const rowTitle = document.getElementsByTagName("h2")
  const moviePoster = document.querySelectorAll(".movie-poster")
  const rowGrid = document.querySelectorAll(".row-posters-grid")
  const rows= document.querySelector(".rows")
  rows.style.width = "100%"
  let n = rowTitle.length
 
  for(let i=0;i<n;i++){
    rowTitle.item(i).style.display="none" // NOT displaying the title of the section.
  }
  for(let j=0;j<rowGrid.length;j++){
    rowGrid.item(j).style.flexWrap="wrap"   //wrapping to show 4 movie posters per row 
  
  }
    for(let j=0;j<moviePoster.length;j++){
      moviePoster.item(j).style.maxWidth="23%"
      moviePoster.item(j).style.height="23rem"
    }
}, 1000); // timeout for all the movie posters to load

})


