    const emailField= document.querySelector("#email")
    const passwordField = document.querySelector("#password")

    const emailValidation = document.querySelector(".email-validation")
    const passwordValidation = document.querySelector(".password-validation")
    const submitButton = document.querySelector("#submit")



    //Validations for Email and Password Fields on clicking Submit Button
    submitButton.addEventListener('click',(event)=>{  
        event.preventDefault()
        
    
        if(emailField.value == "" && passwordField.value == ""){
            
            emailValidation.style.display="block"
            passwordValidation.style.display="block"
            
        }else if(emailField.value == ""){
           
            emailValidation.style.display="block"
        }
        else if (passwordField.value == ""){
            passwordValidation.style.display="block"
        }else
        {
            window.location.href = 'home.html'
        }
    
        emailField.addEventListener("input",()=>{
            emailValidation.style.display="none"
        })

        passwordField.addEventListener("input",()=>{
            passwordValidation.style.display="none"
        })
    
    
    })