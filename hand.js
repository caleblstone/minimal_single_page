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
let socialMedia = document.querySelectorAll('section.socialmedia div')
let button = document.querySelectorAll('section.button')

let popup = document.querySelector('div.popup')



function setup() {
  createCanvas(width, height);
  smooth();
  hand = loadImage("assets/hand.png");
  let mousex = mouseX
  let mousey = mouseY
}

function draw() {
  clear();

  links.forEach(tag => {
    let rect = tag.getBoundingClientRect()
    if (mouseX > rect.left && mouseX < rect.right && mouseY < rect.bottom && mouseY > rect.top) {
      mousex = rect.left
      mousey = rect.top
      console.log(mousex,mousey);
      pushPop()
    } else {
      mousex = mouseX
      mousey = mouseY
      pushPop()
    }
  })




  strokeWeight(10);
  point(rightSide + 32, rectHeight / 2);
  //point(width/3*2, 20);
  //point(mouseX, mouseY);



  let diffX = (width / 3 * 2) - mousex;
  let diffY = mousey - 20;

  angle = Math.atan2(diffY, diffX)





  colorChange()
}

function pushPop() {
  noFill();
  strokeWeight(4);
  beginShape();
  vertex(rightSide + 32, rectHeight / 2);
  quadraticVertex(width / 3 * 2, rectHeight / 2, mousex, mousey);
  endShape();
  push()
  angleMode(RADIANS)
  translate(mousex, mousey)
  rotate(-angle + radians(90));
  image(hand, -30, -30);
  pop()
}



function colorChange() {
  button.forEach(tag => {
    let rect = tag.getBoundingClientRect()
    if (mouseX > rect.left && mouseX < rect.right && mouseY < rect.bottom && mouseY > rect.top) {
      tag.classList.add("jiggle")
      //console.log(tag.classList)
    } else {
      tag.classList.remove("jiggle")
      popup.style.backgroundImage = "url('')"
    }
  })
  socialMedia.forEach(tag => {
    let rect = tag.getBoundingClientRect()
    if (mouseX > rect.left && mouseX < rect.right && mouseY < rect.bottom && mouseY > rect.top) {
      tag.classList.add("jiggle")
      //console.log(tag.classList)
    } else {
      tag.classList.remove("jiggle")
    }
  })

  links.forEach(tag => {
    let rect = tag.getBoundingClientRect()
    if (mouseX > rect.left && mouseX < rect.right && mouseY < rect.bottom && mouseY > rect.top) {
      tag.style.color = "#E7511C"
      tag.style.textDecorationColor = "#E7511C"
      //console.log(tag.classList)
    } else {
      tag.style.color = "black"

    }
  })


  underline.forEach(tag => {
    let rect = tag.getBoundingClientRect()
    if (mouseX > rect.left && mouseX < rect.right && mouseY < rect.bottom && mouseY > rect.top) {
      tag.style.color = "#35AC7D"
      tag.style.textDecorationColor = "#35AC7D"
      // var img = document.createElement('img')
      // img.src = "assets/rock.png"
      // var src = document.getElementById("popup")
      // src.appendChild(img)
      let face
      if (tag.id == "Lee") {
        face = "url('assets/lee.png')"
      }
      if (tag.id == "Maya") {
        face = "url('assets/maya.png')"
      }
      if (tag.id == "Caleb") {
        face = "url('assets/caleb.png')"
      }
      popup.style.backgroundImage = face
    } else {
      //popup.style.backgroundImage = "url('')"
      tag.style.color = "black"

    }
  })


}
