//
/**/

function displayContent (eventId, eventValue) {
  document.getElementById(eventId).style.display = eventValue
}
function displayInnerHTML (eventId, eventValue) {
  document.getElementById(eventId).innerHTML = eventValue
}
function addOpacity (eventId, eventValue) {
  document.getElementById(eventId).style.opacity = eventValue
}

// DOM elements
const allGridBoxes = document.querySelectorAll(".grid_box")
//
const setPlayerNameBtn = document.getElementById("set_player_name_btn")
const resetGameScoreBtn = document.getElementById("reset_game_score_btn")
const changePlayersBtn = document.getElementById("change_players_btn")
const aboutGameBtn = document.getElementById("about_game_btn")
const closeAboutGameBtn = document.getElementById("close_about_game_btn")
const exitGameBtn = document.getElementById("exit_game_btn")
// Name 
const playerOneName = document.getElementById("player_one_name")
const playerTwoName = document.getElementById("player_two_name")
// Score
let playerOneScore = 0
let playerTwoScore = 0
// Booleans
let playerOneBoolean = false
// Text Values
let playerOneText = "White"
let playerTwoText = "Black"




// Position Player Correctly
function getReadyToPlay () {
  allGridBoxes.forEach(eachGridBox => {
    let eachGridBoxClassList = eachGridBox.classList
    
    // Remove all payers 
    if (eachGridBoxClassList.toString().includes("active_player active_black_player")) eachGridBoxClassList.remove("active_player", "active_black_player")
    if (eachGridBoxClassList.toString().includes("active_player active_white_player")) eachGridBoxClassList.remove("active_player", "active_white_player")
    // Remove any king
    if (eachGridBoxClassList.toString().includes("active_king black_king")) eachGridBoxClassList.remove("active_king", "black_king")
    if (eachGridBoxClassList.toString().includes("active_king white_king")) eachGridBoxClassList.remove("active_king", "white_king")
    
    // Set players to their default position
    // Black player default position
    if (parseFloat(eachGridBox.id) <= 20) return eachGridBox.classList.add("active_player", "active_black_player")
    // White player default position
    if (parseFloat(eachGridBox.id) > 30) return eachGridBox.classList.add("active_player", "active_white_player")
  })
}
// getReadyToPlay()
// Reset game function
function resetGameScoreFunction () {
  playerOneScore = 0
  playerTwoScore = 0
  playerOneBoolean = false
  updatePlayersTurnFunction()
  updatePlayersScoreFunction()
  getReadyToPlay()
}
// Update and display players score
function updatePlayersScoreFunction () {
  displayInnerHTML("player_one_score", ` <span class="big_font_2">  ${playerOneName.value}'s (${playerOneText}) Score </span> : <span class="big_font_1"> ${playerOneScore} </span> `)                                                                                            //
  displayInnerHTML("player_two_score", ` <span class="big_font_2"> ${playerTwoName.value}'s (${playerTwoText})  Score </span> : <span class="big_font_1"> ${playerTwoScore} </span> `)
}
// Check next players turn and display it to the gamers 
function updatePlayersTurnFunction () {
  if (playerOneBoolean) {
    displayInnerHTML("players_turn", ` <span class="big_font_2"> ${playerTwoName.value}'s (${playerTwoText}) </span> turn`)
  } else {
    displayInnerHTML("players_turn", ` <span class="big_font_2"> ${playerOneName.value}'s (${playerOneText}) </span> turn`)
  }
}
// Display player name modal box function
function changePlayerNamesFunction () {
  let confirmNewSetOfPlayers = confirm("Are you sure you want to change players and restart game?")
  if (confirmNewSetOfPlayers) {
    addOpacity("game_container", .1)
    displayContent("player_names", "block")
  } else return
}
// Set new player name and start new game function
function startNewGameFunction () {
  if (!playerOneName.value || !playerTwoName.value) return alert("Check for empty input field")
  if (playerOneName.value.length < 3) return alert("Player One name cannot be less than three (3) character")
  if (playerTwoName.value.length < 3) return alert("Player Two name cannot be less than three (3) character")
  if (playerOneName.value == playerTwoName.value) return alert("Player Names can't be the same")
  
  addOpacity("game_container", 1)
  displayContent("player_names", "none")
  resetGameScoreFunction()
}


// Onclick events
// Reset game button
resetGameScoreBtn.onclick = () => {
  let confirmReset = confirm("Are you sure you want to reset your score?")
  if (confirmReset) {
    resetGameScoreFunction()
  } else return 
}
// Change player button
changePlayersBtn.onclick = () => changePlayerNamesFunction() 
// Set new player button
setPlayerNameBtn.onclick = () => startNewGameFunction() 
// About game button
aboutGameBtn.onclick = () => {
  displayContent("about_game", "block")
  addOpacity("game_container", .1)
}
// Close about game modal box button
closeAboutGameBtn.onclick = () => {
  displayContent("about_game", "none")
  addOpacity("game_container", 1)
}
// Exit game button
exitGameBtn.onclick = () => {
  let confirmExit = confirm("Are you sure you want to exit this game?")
  if (confirmExit) {
    alert("Game reset activated ... We don't want you to leave our page 🌚🌚... Thank you 🤗🤗... We love you 💖💖")
    resetGameScoreFunction()
  } else return 
}








/**/