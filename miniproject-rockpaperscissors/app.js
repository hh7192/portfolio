class UI {
    // caching the DOM
    constructor(){
        this.userScoreEl = document.getElementById('user-score');
        this.computerScoreEl = document.getElementById('computer-score');
        this.playedEl = document.getElementById('played');
        this.scoreBoard = document.querySelector('.scoreboard');
        this.bgGlow = document.getElementById('headerBg');
        this.resultDisp = document.querySelector('.result > p');
        this.rock = document.getElementById('rock');
        this.paper = document.getElementById('paper');
        this.scissors = document.getElementById('scissors');
        this.userScore = 0;
        this.computerScore = 0;
        this.playedNum = 0;
    }

    // methods
    game(userChoice){
        const computerChoice = this.getComputerChoice();
        switch (userChoice + computerChoice) {
            case 'paperrock':
            case 'rockscissors':
            case 'scissorspaper':
                this.win(userChoice,computerChoice);
                break;
            case 'rockpaper':
            case 'scissorsrock':
            case 'paperscissors':
                this.lose(userChoice,computerChoice);
                break;
            case 'paperpaper':
            case 'rockrock':
            case 'scissorsscissors':
                this.draw(userChoice,computerChoice);
                break;
        }
    }

    getComputerChoice(){
        const choices = ['rock', 'paper', 'scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

    win(userChoice,computerChoice){
        this.userScore++;
        this.userScoreEl.innerHTML = this.userScore;
        this.computerScoreEl.innerHTML = this.computerScore;
        this.resultDisp.innerHTML = `${userChoice} beats ${computerChoice}. You Win! 🔥`
        this.bgGlow.classList.add('greenglow');
        setTimeout(()=>{
            this.bgGlow.classList.remove('greenglow');
        },1000);
    }

    lose(userChoice,computerChoice){
        this.computerScore++;
        this.userScoreEl.innerHTML = this.userScore;
        this.computerScoreEl.innerHTML = this.computerScore;
        this.resultDisp.innerHTML = `${userChoice} beats ${computerChoice}. You Lost... 💩`
        this.bgGlow.classList.add('redglow');
        setTimeout(()=>{
            this.bgGlow.classList.remove('redglow');
        },1000);
    }

    draw(userChoice,computerChoice){
        this.resultDisp.innerHTML = `${userChoice} and ${computerChoice}. Draw! 😐`
        this.bgGlow.classList.add('greyglow');
        setTimeout(()=>{
            this.bgGlow.classList.remove('greyglow');
        },1000);
    }

}






// eventlistener function
function eventListeners() {
    const ui = new UI();
    ui.getComputerChoice();
    rock.addEventListener('click', function(){
        ui.playedNum++;
        ui.playedEl.innerHTML = ui.playedNum;
        ui.game('rock')
    })
    paper.addEventListener('click', function(){
        ui.playedNum++;
        ui.playedEl.innerHTML = ui.playedNum;
        ui.game('paper')
    })
    scissors.addEventListener('click', function(){
        ui.playedNum++;
        ui.playedEl.innerHTML = ui.playedNum;
        ui.game('scissors')
    })
}


eventListeners();