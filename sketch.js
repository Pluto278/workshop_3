let images = [];
let currentFilters = [];

function preload() {
  for (let i = 1; i <= 5; i++) {
    images.push(loadImage('images/'+i+'.jpg'));
  }
}

function setup() {
  createCanvas(800, 600);
  noLoop(); // 只在需要时重绘
  generateCollage();
}

function draw() {
  background(220);

  // 绘制拼贴画
  for (let i = 0; i < images.length; i++) {
    let img = images[i];
    let x = random(width - img.width/3);
    let y = random(height - img.height/3);
    image(img, x, y,300,300);

    // 应用随机过滤器
    applyFilter(img, currentFilters[i]);
  }
}

function generateCollage() {
  currentFilters = [];
  for (let i = 0; i < images.length; i++) {
    currentFilters.push(getRandomFilter());
  }
  redraw(); // 重绘画布
}

function applyFilter(img, filter) {
  if (filter === 'GRAY') {
    img.filter(GRAY);
  } else if (filter === 'INVERT') {
    img.filter(INVERT);
  } else if (filter === 'BLUR') {
    img.filter(BLUR, 3);
  } else if (filter === 'THRESHOLD') {
    img.filter(THRESHOLD);
  }
}

function getRandomFilter() {
  let filters = ['GRAY', 'INVERT', 'BLUR', 'THRESHOLD'];
  return random(filters);
}

function mousePressed() {
  generateCollage(); // 点击鼠标生成新的拼贴画
}