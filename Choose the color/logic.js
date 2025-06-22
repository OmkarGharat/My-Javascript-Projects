const colors = [
  'Crimson', 'Scarlet', 'Salmon', 'Coral', 'Maroon', 'Burgundy',
  'Olive', 'Chartreuse', 'LimeGreen', 'SeaGreen', 'Teal', 'Turquoise',
  'SkyBlue', 'DodgerBlue', 'SlateBlue', 'Indigo', 'Navy', 'Periwinkle',
  'Lavender', 'Plum', 'Orchid', 'Violet', 'Magenta', 'Fuchsia',
  'Sienna', 'Tan', 'Chocolate', 'Beige', 'Moccasin', 'GoldenRod'
];


const randomColorText = document.getElementById('random-color');
const output = document.getElementById('output');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');
const timerDisplay = document.getElementById('timer');
const colorBox = document.getElementById('color-box');

let score = 0;
let lives = 3;
let timeLeft = 10;
let targetColor = '';
let timer;

// INIT
startNewRound();

// Create color buttons dynamically
function renderColorButtons() {
  colorBox.innerHTML = '';

  const displayedLabels = shuffle([...colors]).slice(0, 9); // 9 random color names
  const displayedColors = shuffle([...colors]).slice(0, 9); // 9 random colors for background

  // Pick target from one of the displayed LABELS
  targetColor = displayedLabels[Math.floor(Math.random() * displayedLabels.length)];
  randomColorText.textContent = targetColor;

  for (let i = 0; i < 9; i++) {
    const btn = document.createElement('button');

    const label = displayedLabels[i];
    const bgColorClass = displayedColors[i];

    btn.textContent = label;
    btn.className = `color ${bgColorClass}`;
    btn.setAttribute('data-color', label);

    btn.addEventListener('click', handleColorClick);
    colorBox.appendChild(btn);
  }
}

function startNewRound() {
  targetColor = getRandomColor();
  randomColorText.textContent = targetColor;
  renderColorButtons();
  resetTimer();
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function handleColorClick(e) {
  const selectedColor = e.target.getAttribute('data-color');
  clearInterval(timer); // Stop old timer

  if (selectedColor === targetColor) {
    score++;
    output.textContent = "Correct ✔️ !! You guessed it!";
  } else {
    lives--;
    output.textContent = `Wrong ❌! It was "${targetColor}"`;
  }

  updateStatus();

  if (lives <= 0) {
    gameOver();
  } else {
    setTimeout(startNewRound, 1000);
  }
}

function updateStatus() {
  scoreDisplay.textContent = score;
  livesDisplay.textContent = lives;
}

function resetTimer() {
  timeLeft = 10;
  timerDisplay.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      lives--;
      output.textContent = `⏰ Time’s up! The color was "${targetColor}"`;
      updateStatus();

      if (lives <= 0) {
        gameOver();
      } else {
        setTimeout(startNewRound, 1000);
      }
    }
  }, 1000);
}

function gameOver() {
  output.textContent = `💔 Game Over! Your Score: ${score}`;
  colorBox.innerHTML = '';
  randomColorText.textContent = '—';
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
