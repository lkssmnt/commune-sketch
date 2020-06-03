// const distanceY = 100;
// const distanceX = 100;

// const angleRadians = Math.atan(distanceX/distanceY);
// const angleDegrees = angleRadians * (180/Math.PI);

// console.log(angleRadians);
// console.log(angleDegrees);

// window.fitText( document.querySelector("p"), 5 ); // turn the compressor up (font will shrink a bit more aggressively)

gsap.set(".circle-1", {x: "-1500", y: "-1000"});
gsap.set(".circle-2", {x: "-2000", y: "1000"});
gsap.set(".circle-3", {x: "3000", y: "2000"});

gsap.to(".circle-1", {duration: 2, x: "-5vw", y: "-30vh"});
gsap.to(".circle-2", {duration: 2, x: "-40vw", y: "20vh"});
gsap.to(".circle-3", {duration: 2, x: "50vw", y: "50vh"});

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

let i = 0;

document.addEventListener('click', (event) => {
    let width = circle1.offsetWidth;
    console.log(event.clientX);
    console.log(event.clientY);
    console.log("width:" + width);
    
    
    if(i === 0 ) {
        let r1 = Math.floor(Math.random() * (max - min)) + min;
        let g1 = Math.floor(Math.random() * (max - min)) + min;
        let b1 = Math.floor(Math.random() * (max - min)) + min;
        // circle1.style.filter = 'none';
        circle1.classList.remove('blurred');
        gsap.to(circle1, {duration: 1, x: event.clientX - width / 2, y: event.clientY - width / 2, onComplete:reBlur, onCompleteParams:[circle1]});
        circle1.style.backgroundColor = `rgb(${r1}, ${b1}, ${g1})`;

    }

    if(i === 1 ) {
        let r1 = Math.floor(Math.random() * (max - min)) + min;
        let g1 = Math.floor(Math.random() * (max - min)) + min;
        let b1 = Math.floor(Math.random() * (max - min)) + min;
        circle2.classList.remove('blurred');
        // circle2.style.filter = 'none';
        gsap.to(circle2, {duration: 1, x: event.clientX - width / 2, y: event.clientY - width / 2, onComplete:reBlur, onCompleteParams:[circle2]});
        circle2.style.backgroundColor = `rgb(${r1}, ${b1}, ${g1})`;

    }

    if(i === 2 ) {
        let r1 = Math.floor(Math.random() * (max - min)) + min;
        let g1 = Math.floor(Math.random() * (max - min)) + min;
        let b1 = Math.floor(Math.random() * (max - min)) + min;
        circle3.classList.remove('blurred');
        // circle3.style.filter = 'none';
        gsap.to(circle3, {duration: 1, x: event.clientX - width / 2, y: event.clientY - width / 2, onComplete:reBlur, onCompleteParams:[circle3]});
        circle3.style.backgroundColor = `rgb(${r1}, ${b1}, ${g1})`;

    }

    i++;

    if(i>2){
        i = 0;
    }

});

function reBlur(circle){
    console.log(circle);
    circle.classList.add('blurred');
}

const cursor = document.querySelector('.cursor');

console.log(cursor);

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
});

window.addEventListener('scroll', e => {
    console.log("firing!");
});

let scale = 1;
let scaleCounter = 0;

window.addEventListener('wheel', e => {
    const delta = Math.sign(event.deltaY);
    // console.info(e);

    

    if(delta === 1) {
        scaleCounter = scaleCounter*1.05 + 1;
    } else {
        scaleCounter = scaleCounter*0.95 - 1;
    }

    if(scaleCounter < -8){
        scaleCounter = -8;
    }
    if(scaleCounter > 250) {
        scaleCounter = 250;
    }

    scale = 1 + scaleCounter/10;

    cursor.style.transform = `scale(${scale})`

    // console.info(scaleCounter);
});