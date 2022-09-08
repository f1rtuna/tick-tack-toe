const buttons = document.querySelectorAll('button')
const userDisplay = document.querySelector(".user_choice")
const compdisplay = document.querySelector(".computer_choice")
let userChoice
let compChoice
let randres

let userScore = 0
let compScore = 0

let userGameChoice
let compGamechoice

const ourScoreDisplay = document.querySelector(".ourScore")
const compScoreDisplay = document.querySelector(".compScore")

let winner
const winnerDisplay = document.querySelector(".winner")

buttons.forEach(button=>button.addEventListener('click', (e)=>{
  userChoice = e.target.id
  generate_user(userChoice)
  generate_comp()
  play_game()
}))

function generate_user(c){
  let res
  if (c == "rock"){
    res = "&#9994;"
    userGameChoice = 0
  }
  else if(c == "paper"){
    res = "&#9995;"
    userGameChoice = 1
  }
  else{
    res = "&#129310;"
    userGameChoice = 2
  }
  userDisplay.innerHTML = res
}
function generate_comp(){
  randres = Math.random() * 10
  compGamechoice = Math.floor(randres%3)
  compChoice = display_comp(compGamechoice)
  compdisplay.innerHTML = compChoice
}

function display_comp(c){
  if(c == 0){
    return "&#9994;"
  }
  else if (c == 1){
    return "&#9995;"
  }
  else if (c == 2){
    return "&#129310;"
  }
  else{
    return "something is very wrong"
  }
}



function play_game(){
  // rock 0
  if (userGameChoice == 0){
    if(compGamechoice == 1){
      winner = "comp"
      compScore+=1
    }
    else if(compGamechoice == 0){
      winner = "tie"
    }
    else{
      winner = "user"
      userScore+=1
    }
  }
  // paper 1
  else if (userGameChoice == 1){
    if(compGamechoice == 0){
      winner = "user"
      userScore+=1
    }
    else if(compGamechoice == 1){
      winner = "tie"
    }
    else{
      winner = "comp"
      compScore+=1
    }
  }
  // scissors 2
  else if (userGameChoice == 2){
    if(compGamechoice == 0){
      winner = "comp"
      compScore+=1
    }
    else if(compGamechoice == 1){
      winner = "user"
      userScore+=1
    }
    else{
      winner = "tie"
    }
  }
  winnerDisplay.innerHTML = ("Results are in: " + winner)
  ourScoreDisplay.innerHTML = userScore
  compScoreDisplay.innerHTML = compScore

  if (userScore == 5){
    winnerDisplay.innerHTML = ("Congrats you won the 5 rounds!")
    alert("Congrats game is over and scores will be reset")
    userScore = 0
    compScore = 0
    ourScoreDisplay.innerHTML = userScore
    compScoreDisplay.innerHTML = compScore
  }
  else if(compScore == 5){
    winnerDisplay.innerHTML = ("Sorry the computer won the 5 rounds!")
    alert("Sorry game is over and scores will be reset")
    userScore = 0
    compScore = 0
    ourScoreDisplay.innerHTML = userScore
    compScoreDisplay.innerHTML = compScore
  }
}