document.addEventListener('keydown', moveleft)
document.addEventListener('keydown', moveright)

function moveleft(event) {
    if (event.key == "ArrowLeft") {
        let left = parseInt(window.getComputedStyle(character).getPropertyValue('left'))
        if (left > 0) {
            character.style.left = left - 100 + 'px'
        }
    }
}

function moveright(event) {
    if (event.key == "ArrowRight") {
        let left = parseInt(window.getComputedStyle(character).getPropertyValue('left'))
        if (left < 200) {
            character.style.left = left + 100 + 'px'
        }
    }
}
var counter = 0;
block.addEventListener('animationiteration', () => {
    let random = (Math.floor(Math.random() * 3)) * 100
    block.style.left = random + 'px'
    counter++;
    console.log(counter)
})
let interval = setInterval(() => {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue('left'))
    let bleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    let btop = parseInt(window.getComputedStyle(block).getPropertyValue('top'))
        // console.log(bleft, btop, left)
    if (btop > 300 && btop < 500 && bleft == left) {
        clearInterval(interval)
        alert('game over: your score is ' + counter)
    }
}, 1);
document.getElementById('left').addEventListener('touchstart', moveleft)
document.getElementById('right').addEventListener('touchstart', moveright)