let width = window.innerWidth
let height = window.innerHeight
let hand
let angle

let body = document.querySelector('body')

let line = document.querySelector('header')
let rect = line.getBoundingClientRect()
let rectHeight = rect.height

let title = document.querySelector('header section.title')
let subtitle = document.querySelector('header section.subtitle')
let rect2 = title.getBoundingClientRect()
let rightSide = rect2.right

let links = document.querySelectorAll('a')
let underline = document.querySelectorAll('u')

function setup() {
  createCanvas(width, height);
  smooth();
  hand = loadImage("assets/hand.png");
}

function draw() {
  clear();
  strokeWeight(10);
  point(rightSide + 32, rectHeight / 2);
  //point(width/3*2, 20);
  //point(mouseX, mouseY);

  noFill();
  strokeWeight(4);
  beginShape();
  vertex(rightSide + 32, rectHeight / 2);
  quadraticVertex(width / 3 * 2, rectHeight / 2, mouseX, mouseY);
  endShape();

  let diffX = (width / 3 * 2) - mouseX;
  let diffY = mouseY - 20;

  angle = Math.atan2(diffY, diffX)





  colorChange()
}

socialMedia.forEach(tag => {
  this.addEventListener("mouseMoved()", function() {
    tag.style.color = "#35AC7D"
    console.log("hello");
  })
})

function pushPop() {
  push()
  angleMode(RADIANS)
  translate(mouseX, mouseY)
  rotate(-angle + radians(90));
  image(hand, -30, -30);
  pop()
}



function colorChange() {
  links.forEach(tag => {
    let rect = tag.getBoundingClientRect()
    if (mouseX > rect.left && mouseX < rect.right && mouseY < rect.bottom && mouseY > rect.top) {
      tag.style.color = "#E7511C"
      tag.style.textDecorationColor = "#E7511C"
      image(hand, rect.left - 40, rect.top - 100);
    } else {
      pushPop()
      tag.style.color = "black"
    }
  })
  underline.forEach(tag => {
    let rect = tag.getBoundingClientRect()
    if (mouseX > rect.left && mouseX < rect.right && mouseY < rect.bottom && mouseY > rect.top) {
      tag.style.color = "#35AC7D"
      tag.style.textDecorationColor = "#35AC7D"

    } else {
      pushPop()
      tag.style.color = "black"
    }
  })


}
