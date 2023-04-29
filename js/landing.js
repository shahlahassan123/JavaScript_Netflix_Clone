const questions = document.querySelectorAll(".question")
const answers = document.querySelectorAll(".answer")
const crossButtons = document.querySelectorAll(".crossButton")
const plusButtons = document.querySelectorAll(".plusButton")



const emailDiv = document.querySelectorAll(".email")
const emailInput=document.querySelectorAll(".emailInput")
const getStartedBtn = document.querySelectorAll(".getStartedBtn")
const validation_msg = document.querySelectorAll(".validation")

//Validation on Get Started Button for Email field
for(let i=0;i<emailDiv.length;i++){
getStartedBtn[i].addEventListener('click',(event)=>{  
    
    if(emailInput[i].value == ""){
        validation_msg[i].style.display="block"
    }else{
        sessionStorage.setItem("EMAIL", emailInput[i].value)
        window.location.href = 'regPage1.html'
    }

    emailInput[i].addEventListener("input",()=>{
        validation_msg[i].style.display="none"
    })


})
}

//Expanding and Collapsing of FAQ
for(let i=0;i<questions.length;i++){
    questions[i].addEventListener('click',()=>{
        answers[i].classList.toggle("active")
        crossButtons[i].classList.toggle("active")
        plusButtons[i].classList.toggle("inactive")
    })
}
