'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

document.addEventListener('click', (e) => {
  const minX = 0;
  const maxX = wallWidth - spiderWidth;
  const minY = 0;
  const maxY = wallHeight - spiderHeight;

  const wallPosition = wall.getBoundingClientRect();

  let x = e.clientX - wallPosition.left - spiderWidth / 2;
  let y = e.clientY - wallPosition.top - spiderHeight / 2;

  x = Math.min(Math.max(x, minX), maxX);
  y = Math.min(Math.max(y, minY), maxY);

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
