/*
  Duolingo Team Prototype
  ----------------------
  Your goal is NOT to copy the instructor demo.
  Your goal is to make PRODUCT DECISIONS using logic.

  Focus on:
  - conditionals
  - comparisons
  - randomness
  - feedback
*/

/*
  Duolingo Team Prototype
  ----------------------
  Your goal is NOT to copy the instructor demo.
  Your goal is to make PRODUCT DECISIONS using logic.
*/

// ==============================
// STEP 1: App State
// ==============================

let xpTotal = 0;
const xpRewards = [10, 15, 20];
const levelRewards = [
  { level: "Beginner", symbol: "🌱", badge: "Starter Badge" },
  { level: "Intermediate", symbol: "🔥", badge: "Streak Shield" },
  { level: "Advanced", symbol: "🚀", badge: "Fluency Star" },
  { level: "Expert", symbol: "👑", badge: "Master Crown" },
];

// ==============================
// STEP 2: DOM Elements
// ==============================

const xpDisplay = document.getElementById("xp-total");
const button = document.getElementById("complete-lesson");
const resetButton = document.getElementById("reset-progress");
const feedback = document.getElementById("feedback");

// ==============================
// STEP 3: Event Listener
// ==============================

button.addEventListener("click", function () {
  // STEP 4: Random XP reward
  const earnedXP = xpRewards[Math.floor(Math.random() * xpRewards.length)];

  xpTotal += earnedXP;
  xpDisplay.textContent = xpTotal;

  // STEP 5: CONDITIONAL LOGIC (YOU WRITE THIS)
  // Requirements:
  // - At least 3 user states
  // - Use comparisons
  // - Feedback must change based on progress

  // TODO:
  // if (...)
  // else if (...)
  // else (...)

  if (xpTotal < 100) {
    console.log(levelRewards[0].level);
    feedback.textContent =
      `${levelRewards[0].symbol} Level: ${levelRewards[0].level}. ` +
      `Reward unlocked: ${levelRewards[0].badge}. ` +
      "Keep going! You're just getting started.";
  } else if (xpTotal >= 100 && xpTotal < 200) {
    console.log(levelRewards[1].level);
    feedback.textContent =
      `${levelRewards[1].symbol} Congratulations! You've reached ${levelRewards[1].level} level. ` +
      `Reward unlocked: ${levelRewards[1].badge}. Keep up the great work!`;
  } else if (xpTotal >= 200 && xpTotal < 300) {
    console.log(levelRewards[2].level);
    feedback.textContent =
      `${levelRewards[2].symbol} Amazing! You've achieved ${levelRewards[2].level} level. ` +
      `Reward unlocked: ${levelRewards[2].badge}. You're a language learning pro!`;
  } else if (xpTotal >= 300) {
    console.log(levelRewards[3].level);
    feedback.textContent =
      `${levelRewards[3].symbol} Incredible! You've reached ${levelRewards[3].level} level. ` +
      `Reward unlocked: ${levelRewards[3].badge}. You're a language learning master!`;
  }

  console.log("XP Total: " + xpTotal);

  // Activate the Reset Button
  resetButton.style.display = "block";
});

resetButton.addEventListener("click", function () {
  xpTotal = 0;
  xpDisplay.textContent = xpTotal;
  feedback.textContent = "Progress reset. Start learning again!";
  resetButton.style.display = "none";
});

/*
  TEAM QUESTIONS TO DISCUSS:
  --------------------------
  - Are these XP thresholds right?
  - How many learner states should exist?
  - What feels motivating vs annoying?
  - What would Duolingo want users to FEEL here?
*/
