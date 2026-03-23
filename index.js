

let homeEl = document.getElementById("home-score")
let homeScore = 0

function addOneHome() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function addTwoHome() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function addThreeHome() {
    homeScore += 3
    homeEl.textContent = homeScore
}








let awayEl = document.getElementById("away-score")
let awayScore = 0

function addOneAway() {
    awayScore += 1
    awayEl.textContent = awayScore
}

function addTwoAway() {
    awayScore += 2
    awayEl.textContent = awayScore
}

function addThreeAway() {
    awayScore += 3
    awayEl.textContent = awayScore
}

function resetGame() {
    awayScore = 0
    awayEl.textContent = awayScore
    homeScore = 0
    homeEl.textContent = homeScore
    
}
