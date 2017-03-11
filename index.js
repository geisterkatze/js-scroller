let textColor = 'white'; // enable input
let fontSize = 32; // enable input
let text = 'Hello World'; // enable input
let screenWidth = document.body.clientWidth || 800;

let start = null;
const wavePeriod = screenWidth / 4;
const scrollSpeed = 1 / 4;
const amplitude = 200;
const offsetY = 200;

// function getSprites(text) {
//     text.
// }


function createSprite() {
  const sprite = document.createElement('div');
  const box = document.getElementById('scrollerBox');

  Object.assign(sprite.style, {
    width: '10px',
    height: '10px',
    backgroundColor: 'red',
    position: 'absolute',
  });
  sprite.id = 'sprite';

  box.appendChild(sprite);

  return sprite;
}

const sprite = createSprite();


function step(timestamp) {
  if (!start) start = timestamp;
  const progress = timestamp - start;
  const x = screenWidth - ((scrollSpeed * progress) % screenWidth);
  const alpha = 2 * Math.PI * (x / wavePeriod);
  const y = (amplitude * Math.sin(alpha)) + offsetY;
  sprite.style.left = `${x}px`;
  sprite.style.top = `${y}px`;
  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
