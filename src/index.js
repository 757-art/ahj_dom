import './css/style.css';

import './js/app';

const wrap = document.getElementsByClassName('wrapper')[0];
const img = document.images[0];
img.parentElement.removeChild(img);

for (let i = 0; i < 4 * 4; i += 1) {
  const div = document.createElement('div');
  wrap.appendChild(div);
}

function getPosition() {
  return Math.floor(Math.random() * (15 + 1));
}
function insertImg() {
  if (document.images[0]) {
    const activeDiv = document.images[0].parentElement;
    activeDiv.removeChild(img);
  }
  const childDivs = wrap.children;
  const index = getPosition();
  childDivs[index].appendChild(img);
}

const timerId = setInterval(insertImg, 1000);

setTimeout(() => clearInterval(timerId), 100000);