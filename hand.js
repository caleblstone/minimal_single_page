let width = window.innerWidth
let height = window.innerHeight
let hand
let angle

let body = document.querySelector('body')

let line = document.querySelector('header')
let rect = line.getBoundingClientRect()
let rectHeight = rect.height

let title = document.querySelector('header section.title')
let rect2 = title.getBoundingClientRect()
let rightSide = rect2.right

let socialMedia = document.querySelectorAll('section.socialmedia')


function setup() {
  createCanvas(width, height);
  smooth();
  hand = loadImage("assets/hand.png");
}

function draw() {
  clear();
  strokeWeight(10);
point(rightSide + 32, rectHeight/2);
//point(width/3*2, 20);
//point(mouseX, mouseY);

noFill();
strokeWeight(4);
beginShape();
vertex(rightSide + 32, rectHeight/2);
quadraticVertex(width/3*2, rectHeight/2, mouseX, mouseY);
endShape();

let diffX = (width/3*2)-mouseX;
let diffY = mouseY - 20;

angle = Math.atan2(diffY, diffX)


push()
angleMode(RADIANS)
translate(mouseX,mouseY)
rotate(-angle + radians(90));
image(hand,-30, -30);
pop()


}

// socailMedia.forEach(element => {
//   element.addEventListner("mouseenter", function(){
//
//   })
// })

socialMedia.forEach(tag => {
  socialMedia.addEventListener("click", function() {
    tag.style.color = "#35AC7D"
    console.log("hello");
  })
})
