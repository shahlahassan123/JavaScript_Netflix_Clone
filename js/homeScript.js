const mobBrowse = document.querySelector(".mobileNav")
const menuLinks = document.querySelector(".navbar-links")
const browseButton = document.querySelector(".browse")
const searchButton = document.querySelector(".searchIcon")
const tvLink = document.querySelector(".tv")
const signOutButton = document.querySelector(".sign-out")
const userProfileIcon = document.querySelector(".profileIcon")
const bannerTitle = document.querySelector(".banner-title")
const bannerDesc = document.querySelector(".banner-desc")
const moviePoster = document.querySelector(".movie-poster");

//MAKING NAVBAR RESPONSIVE FOR MOBILE
if(mobBrowse){
    mobBrowse.addEventListener('click', ()=>{
        menuLinks.classList.toggle("active")
        browseButton.classList.toggle("inactive")
    })
}


//SIGN OUT BUTTON SHOWING ON CLICKING USER PROFILE ICON
if(userProfileIcon){
    userProfileIcon.addEventListener("click", ()=>{
        signOutButton.classList.toggle("active")
    })
}


