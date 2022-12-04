let inpt = document.querySelectorAll(".form-control")
document.querySelector("form").addEventListener('submit',(event)=>{
    submitForm()
})

console.log(inpt[0].value)

function submitForm(){
    if(inpt[0].value!="0"){
        if(inpt[1].value!="0"){
            if(inpt[2].value!="0"){
                if(inpt[3].value!="") {
                    document.querySelector(".sent-message").style.display="block"
                    // location.href="#contact"
                }
            }
        }
    }
}