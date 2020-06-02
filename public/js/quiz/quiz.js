//Question 1
const correctQuestion1 = document.getElementById("question1-answer2")
correctQuestion1.addEventListener("click", scrollToForm)

function scrollToForm() {
    document.querySelector(".question1-answer2").style.backgroundColor = "#C1D8B5"
    // let message = document.querySelector(".correct1")[0];
    // message.classList.remove("hidden");
    setTimeout(function(){ 
        document.querySelector('#question2').scrollIntoView({
            behavior: 'smooth'
        });
}, 3000);
}

const wrongQuestion1 = document.getElementById("question1-answer1")
wrongQuestion1.addEventListener("click", WrongscrollToForm)

function WrongscrollToForm() {
    document.querySelector(".question1-answer1").style.backgroundColor = "#FC5258"
    // let message2 = document.getElementsByClassName(".incorrect1")[0];
    // message2.classList.remove("hidden");
    setTimeout(function(){ 
        document.querySelector('#question2').scrollIntoView({
            behavior: 'smooth'
        });
}, 3000);
}

// --------------------------------------------



const correctQuestion2 = document.getElementById("question2-answer2")
correctQuestion2.addEventListener("click", scrollToForm2)

function scrollToForm2() {

//     var element2 = document.getElementsByClassName("correct2")[0];
//   element2.classList.remove("hidden");
    setTimeout(function(){ 
        document.querySelector('#question3').scrollIntoView({
            behavior: 'smooth'
        });
}, 3000);
    
}


const wrongQuestion2 = document.getElementById("question1-answer1")
wrongQuestion1.addEventListener("click", WrongscrollToForm2)

function WrongscrollToForm2() {
    document.querySelector(".question1-answer1").style.backgroundColor = "#FC5258"
    // let message4 = document.getElementsByClassName("incorrect2")[0];
    message4.classList.remove("hidden");
    setTimeout(function(){ 
        document.querySelector('#question2').scrollIntoView({
            behavior: 'smooth'
        });
}, 3000);
}

const correctQuestion3 = document.getElementById("question3-answer1")
correctQuestion3.addEventListener("click", scrollToForm3)

function scrollToForm3() {
    document.querySelector('#question4').scrollIntoView({
        behavior: 'smooth'
    });
}

const correctQuestion4 = document.getElementById("question4-answer1")
correctQuestion4.addEventListener("click", scrollToForm4)

function scrollToForm4() {
    document.querySelector('#question5').scrollIntoView({
        behavior: 'smooth'
    });
}

const correctQuestion5 = document.getElementById("question5-answer1")
correctQuestion5.addEventListener("click", scrollToForm5)

function scrollToForm5() {
    document.querySelector('#question6').scrollIntoView({
        behavior: 'smooth'
    });
}

const correctQuestion6 = document.getElementById("question6-answer1")
correctQuestion6.addEventListener("click", scrollToForm6)

function scrollToForm6() {
    document.querySelector('#question7').scrollIntoView({
        behavior: 'smooth'
    });
}

const correctQuestion7 = document.getElementById("question7-answer1")
correctQuestion7.addEventListener("click", scrollToForm7)

function scrollToForm7() {
    document.querySelector('#submit').click()
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