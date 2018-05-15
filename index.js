/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    I WILL REFACTOR THIS LATER. THIS
    WAS AN EXPERIMENT.

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

let Game = function (score, chips, newGame) {
    this.score = score;
    this.chips = chips;
}

let Chip = function (number, x, y) {
    this.number = number;
    this.x = x;
    this.y = y;
}



let amount = Math.round(5 + Math.random() * 10)
let arr = [];

for (let i = 0; i < amount; i++) {
    arr.push(new Chip(Math.ceil(Math.random() * 5), Math.ceil(Math.random() * 720), Math.ceil(Math.random() * 520)))
}



let board = new Game(0, arr);

console.log(board.chips[0].number)

for (let i = 0; i < board.chips.length; i++) {
    document.querySelector('.chips').innerHTML += `<div style="left: ${board.chips[i].x}px; bottom: ${board.chips[i].y}px" class="chip${board.chips[i].number}">${board.chips[i].number}</div>`
}

console.log(board.chips)

let span = document.querySelector('span');
let count = 0

document.querySelectorAll('.chip1').forEach(chip => {
    chip.addEventListener('click', () => {
        count++
        span.innerHTML = count;
        chip.style.display = 'none';        
    });
});

document.querySelectorAll('.chip2').forEach(chip => {
    chip.addEventListener('click', () => {
        count += 2
        span.innerHTML = count;
        chip.style.display = 'none';
    });
});

document.querySelectorAll('.chip3').forEach(chip => {
    chip.addEventListener('click', () => {
        count += 3
        span.innerHTML = count;
        chip.style.display = 'none';        
    });
});

document.querySelectorAll('.chip4').forEach(chip => {
    chip.addEventListener('click', () => {
        count += 4
        span.innerHTML = count;
        chip.style.display = 'none';        
    });
});

document.querySelectorAll('.chip5').forEach(chip => {
    chip.addEventListener('click', () => {
        count += 5;
        span.innerHTML = count;
        chip.style.display = 'none';        
    });
});