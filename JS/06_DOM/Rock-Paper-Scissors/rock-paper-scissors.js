const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

const scoreElement = document.querySelector('.js-score');
const resultElement = document.querySelector('.js-result');
const movesElement = document.querySelector('.js-moves');
scoreElement.innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;

function pickComputerMove() {
    computer = Math.floor(Math.random() * 10 % 3);
    if (computer == 0) {
        return 'rock';
    }
    else if (computer == 1) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
}

function checkResult(you, computer = pickComputerMove()) {
    if (you === computer) {
        score.ties++;
        resultElement.innerHTML = 'It\'s a tie';
        movesElement.innerHTML = `You <img class="move-icon" src="assets/imgs/${you}.png" alt="${you}"> <img class="move-icon" src="assets/imgs/${computer}.png" alt="${computer}"> Computer`;
        scoreElement.innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
    }
    else {
        if (computer === 'rock' && you === 'paper') {
            score.wins++;
            resultElement.innerHTML = 'You won';
            movesElement.innerHTML = `You <img class="move-icon" src="assets/imgs/${you}.png" alt="${you}"> <img class="move-icon" src="assets/imgs/${computer}.png" alt="${computer}"> Computer`;
            scoreElement.innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
        }
        else if (computer === 'paper' && you === 'scissors') {
            score.wins++;
            resultElement.innerHTML = 'You won';
            movesElement.innerHTML = `You <img class="move-icon" src="assets/imgs/${you}.png" alt="${you}"> <img class="move-icon" src="assets/imgs/${computer}.png" alt="${computer}"> Computer`;
            scoreElement.innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
        }
        else if (computer === 'scissors' && you === 'rock') {
            score.wins++;
            resultElement.innerHTML = 'You won';
            movesElement.innerHTML = `You <img class="move-icon" src="assets/imgs/${you}.png" alt="${you}"> <img class="move-icon" src="assets/imgs/${computer}.png" alt="${computer}"> Computer`;
            scoreElement.innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
        }
        else {
            score.losses++;
            resultElement.innerHTML = 'You lost';
            movesElement.innerHTML = `You <img class="move-icon" src="assets/imgs/${you}.png" alt="${you}"> <img class="move-icon" src="assets/imgs/${computer}.png" alt="${computer}"> Computer`;
            scoreElement.innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
        }
    }

    localStorage.setItem('score', JSON.stringify(score));
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    localStorage.removeItem('score');
    scoreElement.innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}