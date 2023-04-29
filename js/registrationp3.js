const basicWithAds = document.querySelector(".basic-with-ads")
const basicWithAdsValues = document.querySelectorAll(".basic-with-ads-col")

const basic = document.querySelector(".basic")
const basicValues = document.querySelectorAll(".basic-col")

const standard = document.querySelector(".standard")
const standardValues = document.querySelectorAll(".standard-col")


const premium = document.querySelector(".premium")
const premiumValues = document.querySelectorAll(".premium-col")

const downArrow = document.querySelectorAll(".fa-caret-down")



document.addEventListener("DOMContentLoaded",()=>{
    premium.classList.add("active")

    premiumValues.forEach(element =>{
        element.classList.add("enabled")
    })
 
    // Enabling Basic with Ads column
    basicWithAds.addEventListener("click",()=>{

        //Disabling the active plan
        const activePlan = document.querySelector(".active")
        const activePlanValues = document.querySelectorAll(".enabled")
        if(activePlan){
        activePlan.classList.remove("active")
        activePlanValues.forEach(element =>{
            element.classList.remove("enabled")
        })
        }
      

        basicWithAds.classList.toggle("active")
        basicWithAdsValues.forEach(element =>{
            element.classList.toggle("enabled")
        })
    })


    //Enabling Basic plan
    basic.addEventListener("click",()=>{

        //Disabling the active plan
        const activePlan = document.querySelector(".active")
        const activePlanValues = document.querySelectorAll(".enabled")
        if(activePlan){
        activePlan.classList.remove("active")
        activePlanValues.forEach(element =>{
            element.classList.remove("enabled")
        })
        }

        basic.classList.toggle("active")
        basicValues.forEach(element =>{
            element.classList.toggle("enabled")
        })
    })

    //Enabling Standard plan
    standard.addEventListener("click",()=>{

        //Disabling the active plan
        const activePlan = document.querySelector(".active")
        const activePlanValues = document.querySelectorAll(".enabled")
        if(activePlan){
        activePlan.classList.remove("active")
        activePlanValues.forEach(element =>{
            element.classList.remove("enabled")
        })
        }
        
        standard.classList.toggle("active")
        standardValues.forEach(element =>{
            element.classList.toggle("enabled")
        })
    })

    //Enabling Premium plan
    premium.addEventListener("click",()=>{

        //Disabling the active plan
        const activePlan = document.querySelector(".active")
        const activePlanValues = document.querySelectorAll(".enabled")
        if(activePlan){
        activePlan.classList.remove("active")
        activePlanValues.forEach(element =>{
            element.classList.remove("enabled")
        })
        }
        
        premium.classList.toggle("active")
        premiumValues.forEach(element =>{
            element.classList.toggle("enabled")
        })
    })





})