
function ShowNext() {
    const element = document.querySelector(".nextQ a");
    element.classList.remove("hidden");
  }
const correctQuestion1 = document.getElementById("answer2")
correctQuestion1.addEventListener("click", correctAnswer1 )

function correctAnswer1 (){

    document.querySelector(".answer2").style.backgroundColor = "#C1D8B5"
    document.querySelector(" form h2").innerHTML = " Correct: De bank vraagt nooit om in te loggen op Mijn ING (internetbankieren) via een sms of e-mail."
    ShowNext()
    setTimeout(function(){ 
        // window.location.replace("/overview")
    // document.getElementById("question1").style.opacity = "0"
    // document.getElementById("question1").style.height = "0"
    // 
}, 4500);
 
    
}

const wrongQuestion1 = document.getElementById("answer1")
wrongQuestion1.addEventListener("click", wrongtAnswer1 )

function wrongtAnswer1 (){

    document.querySelector(".answer1").style.backgroundColor = "red"
    document.querySelector("form h2").innerHTML = "O nee het is een nep link. De bank vraagt nooit om in te loggen op Mijn ING (internetbankieren) via een sms of e-mail."
    
    setTimeout(function(){ 
        
        // window.location.replace("/overview")
    // document.getElementById("question1").style.opacity = "0"
    // document.getElementById("question1").style.height = "0"
    // 
}, 4500);
    
}





// let answer3Question1 = document.getElementById("answer3-question1")
// answer3Question1.addEventListener("click", correctAnswer1 )

// function correctAnswer1 (){

//     document.querySelector(".answer3").style.backgroundColor = "#C1D8B5"
//     document.querySelector("#question1 section h2").innerHTML = "Een boekje is het meest veilig manier om alle wachtwoorden op te slaan. Een internetcrimineel kan er nooit bijkomen"
//     setTimeout(function(){ 
//     document.getElementById("question1").style.opacity = "0"
//     document.getElementById("question1").style.height = "0"
//     }, 6000);
    
// }