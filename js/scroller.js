const fontSize = 50;
const text = 'Hey there...   isn\'t this a nice text scroller? ...   made in JavaScript...   PS: Fuck Trump...  \u2764 \u2764 \u2764';
let screenWidth = document.body.clientWidth || 1000;
let screenHeight = document.body.clientHeight || 800;

const wavePeriod = screenWidth / 2;
const scrollSpeed = 1 / 4;
const amplitude = screenHeight / 8;
const offsetY = amplitude + (screenHeight / 2);
const offsetAlphaPerCharacter = 0.1 * Math.PI;
const offsetXPerCharacter = fontSize;
const textWidth = offsetXPerCharacter * text.length;

let start = null;

function createSprite(character) {
  const sprite = document.createElement('div');
  sprite.classList.add('sprite');
  sprite.innerHTML = character;
  const box = document.getElementById('scrollerBox');

  Object.assign(sprite.style, {
    position: 'absolute',
    fontSize: `${fontSize}px`,
  });
  box.appendChild(sprite);

  return sprite;
}

const sprites = Array.from(text).map(createSprite);

function step(timestamp) {
  if (!start) start = timestamp;
  const progress = timestamp - start;

  const backgroundHue = (progress / 60) % 360;
  window.document.body.style.backgroundColor = `hsl(${backgroundHue}, 20%, 80%)`;

  sprites.forEach((sprite, i) => {
    const offsetX = i * offsetXPerCharacter;
    const x = screenWidth - (
      (scrollSpeed * progress) % (screenWidth + textWidth)
    );
    const alpha = 2 * Math.PI * (x / wavePeriod);
    const y = amplitude * Math.sin(alpha + (i * offsetAlphaPerCharacter));
    const hue = x % 360;
    const color = `hsl(${hue}, 100%, 80%)`;

    sprite.style.left = `${x + offsetX}px`;
    sprite.style.top = `${y + offsetY}px`;
    sprite.style.color = color;
  });
  window.requestAnimationFrame(step);
}

function updateScreenSize() {
  screenHeight = document.body.clientHeight || 800;
  screenWidth = document.body.clientWidth || 1000;

  start = null;
  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
