let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function increaseHomeScoreBy1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreBy2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreBy3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function increaseGuestScoreBy1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreBy2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreBy3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function startNewGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}