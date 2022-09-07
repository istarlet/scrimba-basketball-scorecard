const homeBtn1 = document.getElementById("home-btn-1");
const homeBtn2 = document.getElementById("home-btn-2");
const homeBtn3 = document.getElementById("home-btn-3");
const homeScoreEl = document.getElementById("home-score");
let homeScore = 0;

const guestBtn1 = document.getElementById("guest-btn-1");
const guestBtn2 = document.getElementById("guest-btn-2");
const guestBtn3 = document.getElementById("guest-btn-3");
const guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

// Home Score
function increaseHomeScoreOne() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreTwo() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreThree() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

homeBtn1.addEventListener("click", increaseHomeScoreOne);
homeBtn2.addEventListener("click", increaseHomeScoreTwo);
homeBtn3.addEventListener("click", increaseHomeScoreThree);

// Guest Score
function increaseGuestScoreOne() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreTwo() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreThree() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

guestBtn1.addEventListener("click", increaseGuestScoreOne);
guestBtn2.addEventListener("click", increaseGuestScoreTwo);
guestBtn3.addEventListener("click", increaseGuestScoreThree);
