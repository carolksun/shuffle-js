let img;
let input;
let squares = [];
let title_font, text_font, test_font;
let pic1, pic2, pic3, pic4, pic5, pic6;
let main_photo = false;

var titleBuffer;
var imageBuffer;
var cnv;
var button;
var x;
var y;
var box_num = 0;

function preload() {
  title_font = loadFont('GoldUnderTheMud-Regular.otf');
  text_font = loadFont('Please write me a song.ttf');
  test_font = loadFont('Rekobip.ttf');
  //beach = createImg('beach.jpg');
  //beach.hide
}

function centerCanvas(first_load) {
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  cnv.position(x, 0);
  if (first_load == false) {
    titleBuffer.remove()
    fix_other_positions();
  }
  if (main_photo == true) {
    fix_shuffle_position();
  }
}

function windowResized() {
  centerCanvas(first_load = false);
}

function setup() {
  cnv = createCanvas(1000, 1000);
  titleBuffer = createGraphics(1000, 350);
  imageBuffer = createGraphics(600, 600);
  strokeWeight(2)
  stroke(255)
  noLoop();
  centerCanvas(first_load = true)
  draw_title()
  image(titleBuffer, 0, 0, 1000, 350);
}
function fix_shuffle_position(){
  console.log(img.position)
  button.position(x + 468, 810);
}

function fix_other_positions(){
  input.position(x + 330, 185);
  custom.position(x + 570, 185)
  pic1.position(x + 175, 272)
  pic2.position(x + 285, 272)
  pic3.position(x + 395, 272)
  pic4.position(x + 505, 272)
  pic5.position(x + 615, 272)
  pic6.position(x + 725, 272)
}
function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data);
    img.hide();
  } else {
    print('Not an accepted image')
  }
}

function handleClick1() {
  console.log('clicked 1')
  img = createImg('beach.jpg', after_importing);
  img.hide()
}

function handleClick2() {
  console.log('clicked 2')
  img = createImg('waterfall jungle.jpg', after_importing);
  img.hide()
}

function handleClick3() {
  console.log('clicked 3')
  img = createImg('mountain.jpg', after_importing);
  img.hide()
}

function handleClick4() {
  console.log('clicked 4')
  img = createImg('roses.jpg', after_importing);
  img.hide()
}

function handleClick5() {
  console.log('clicked 5')
  img = createImg('flag.jpg', after_importing);
  img.hide()
}

function handleClick6() {
  console.log('clicked 6')
  img = createImg('triangles.jpg', after_importing);
  img.hide()
}

function draw() {
  console.log(main_photo);
  draw_image()
  image(imageBuffer, 200, 350);
}

function draw_title() {
  titleBuffer.fill(0, 0, 0);
  titleBuffer.textSize(110);
  titleBuffer.textAlign(CENTER, TOP);
  titleBuffer.textFont(title_font);
  titleBuffer.text('Welcome to PAtchwork!', 500, -20);
  titleBuffer.textSize(24);
  titleBuffer.textFont(text_font);
  titleBuffer.textLeading(23);
  let s = 'This project was inspired by my AP Studio Art portfolio where I demonstrated the geometric patchwork presence of our surroundings through photography and graphic design. You can find some of my portfolio pieces at carolksun.github.io/photography'
  titleBuffer.text(s, 0, 92, 1000, 50);
  titleBuffer.textAlign(CENTER, TOP);
  titleBuffer.textFont(test_font);
  titleBuffer.textSize(45);
  titleBuffer.text('Upload your own photo! (jpg or png)', 500, 138);
  input = createFileInput(handleFile);
  input.position(x + 330, 185);
  custom = createButton('Use this photo!');
  custom.position(x + 570, 185)
  custom.mousePressed(after_importing)
  titleBuffer.textSize(30);
  titleBuffer.text('OR', 500, 206);
  titleBuffer.textSize(45);
  titleBuffer.text('Choose one of my photos!', 500, 230);
  pic1 = createImg('beach small.jpg');
  pic1.position(x + 175, 272)
  pic1.size(100, 75);
  pic1.mousePressed(handleClick1)
  pic2 = createImg('waterfall jungle small.jpg');
  pic2.position(x + 285, 272)
  pic2.size(100, 75);
  pic2.mousePressed(handleClick2)
  pic3 = createImg('mountain small.jpg');
  pic3.position(x + 395, 272)
  pic3.size(100, 75);
  pic3.mousePressed(handleClick3)
  pic4 = createImg('roses small.jpg');
  pic4.position(x + 505, 272)
  pic4.size(100, 75);
  pic4.mousePressed(handleClick4)
  pic5 = createImg('flag small.jpg');
  pic5.position(x + 615, 272)
  pic5.size(100, 75);
  pic5.mousePressed(handleClick5)
  pic6 = createImg('triangles small.jpg');
  pic6.position(x + 725, 272)
  pic6.size(100, 75);
  pic6.mousePressed(handleClick6)
}

function draw_image() {
  if (img) {
    main_photo = true;
    imageBuffer.image(img, 0, 0, 600, 450);
  }
  if (main_photo == false){
    white = createImg('plain-white-background.jpg');
    imageBuffer.image(white, 0, 0, 600, 450);
  }
  imageBuffer.noFill()
  imageBuffer.strokeWeight(2)
  imageBuffer.stroke(255)
  imageBuffer.rect(50, 25, 500, 400)
  for (let i = 50; i < 500; i = i + 100) {
    imageBuffer.line(i, 25, i, 425);
  }
  for (let j = 25; j < 400; j = j + 100) {
    imageBuffer.line(50, j, 550, j);
  }
}

function fill_array() {
  console.log('filling')
  squares = []
  for (let i = 250; i < 750; i = i + 100) {
    for (let j = 375; j < 700; j = j + 100) {
      squares.push(get(i, j, 100, 100))
    }
  }
}

function shuffle_objects() {
  console.log('shuffling')
  fill_array()
  shuffle(squares, true)
  for (let i = 250; i < 750; i = i + 100) {
    for (let j = 375; j < 700; j = j + 100) {
      image(squares.pop(), i, j)
    }
  }
}

function after_importing() {
  console.log('importing')
  //img.width = 600;
  //img.height = 450;
  //redraw()
  squares = []
  fill_array()
  console.log(main_photo);
  if (main_photo == false){
    button = createButton('Shuffle!');
    console.log('in if');
    button.position(x + 468, 810);
  }
  button.size(62, 25);
  button.style('font-size', '13px');
  button.style("font-family", "Georgia");
  button.style("background-color", "#ffa6b3");
  button.style("color", "#000");
  button.mousePressed(shuffle_objects);
  redraw()
}