// const distanceY = 100;
// const distanceX = 100;

// const angleRadians = Math.atan(distanceX/distanceY);
// const angleDegrees = angleRadians * (180/Math.PI);

// console.log(angleRadians);
// console.log(angleDegrees);

gsap.from(".circle-1", {duration: 2, x: 1000, y: -1000, ease: "slow"});
gsap.from(".circle-2", {duration: 2, x: -1000, y: -1000, ease: "slow"});
gsap.from(".circle-3", {duration: 2, x: -1000, y: 1000, ease: "slow"});

const min = 0;
const max = 255;
let r1 = Math.floor(Math.random() * (max - min)) + min;
let g1 = Math.floor(Math.random() * (max - min)) + min;
let b1 = Math.floor(Math.random() * (max - min)) + min;

let r2 = Math.floor(Math.random() * (max - min)) + min;
let g2 = Math.floor(Math.random() * (max - min)) + min;
let b2 = Math.floor(Math.random() * (max - min)) + min;

let r3 = Math.floor(Math.random() * (max - min)) + min;
let g3 = Math.floor(Math.random() * (max - min)) + min;
let b3 = Math.floor(Math.random() * (max - min)) + min;

circle1 = document.querySelector('.circle-1');
circle2 = document.querySelector('.circle-2');
circle3 = document.querySelector('.circle-3');

circle1.style.backgroundColor = `rgb(${r1}, ${b1}, ${g1})`;
circle2.style.backgroundColor = `rgb(${r2}, ${b2}, ${g2})`;
circle3.style.backgroundColor = `rgb(${r3}, ${b3}, ${g3})`;