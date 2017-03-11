
let textColor = 'white'; // enable input
let fontSize = 32; // enable input
let text = 'Hello World'; // enable input
let screenWidth = window.screen.width || 800;

const wavePeriod = 2 * Math.PI;
const scrollSpeed = 1/20000;



let start = null;
const sprite = document.getElementById('sprite');;
sprite.style.position = 'absolute';

// function getSprites(text) {
//     text.
// }


function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    sprite.style.left = Math.min(progress / 10, 200) + 'px';
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
