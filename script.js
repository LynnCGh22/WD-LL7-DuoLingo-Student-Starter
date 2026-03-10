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

// ==============================
// STEP 2: DOM Elements
// ==============================

const xpDisplay = document.getElementById("xp-total");
const button = document.getElementById("complete-lesson");
const feedback = document.getElementById("feedback");

// ==============================
// STEP 3: Event Listener
// ==============================

button.addEventListener("click", function () {

  // STEP 4: Random XP reward
const earnedXP = xpRewards[Math.floor(Math.random() * xpRewards.length)];

  xpTotal += earnedXP;
  xpDisplay.textContent = xpTotal;

  var LessonsCompleted = ["Beginner", "Intermediate", "Advanced"];
  var randomIndex = Math.floor(Math.random() * LessonsCompleted.length);
  var randomLesson = LessonsCompleted[randomIndex];
  feedback.textContent = `You completed a ${randomLesson} lesson and earned ${earnedXP} XP!`;

  // STEP 5: CONDITIONAL LOGIC (YOU WRITE THIS)
  // Requirements:
  // - At least 3 user states
  // - Use comparisons
  // - Feedback must change based on progress

  // TODO:
  // if (...)
  // else if (...)
  // else (...)

  if(xpTotal < 100)
  {
    console.log(LessonsCompleted[0]);
    feedback.textContent = "Level: " + LessonsCompleted[0] + ". " + "Keep going! You're just getting started.";
  }
  else if(xpTotal >= 100 && xpTotal < 200)
  {
    console.log(LessonsCompleted[1]);
    feedback.textContent = "Congratulations! You've reached " + LessonsCompleted[1] + " level. Keep up the great work!";
  }
  else
  {
    console.log(LessonsCompleted[2]);
    feedback.textContent = "Amazing! You've achieved " + LessonsCompleted[2] + " level. You're a language learning pro!";
  }

});

/*
  TEAM QUESTIONS TO DISCUSS:
  --------------------------
  - Are these XP thresholds right?
  - How many learner states should exist?
  - What feels motivating vs annoying?
  - What would Duolingo want users to FEEL here?
*/
