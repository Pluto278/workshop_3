# workshop_3

Link: https://pluto278.github.io/workshop_3

# Tasks

- Load a set of images dynamically.
- Generate a random collage layout each time the sketch runs.
- Apply random filters such as grayscale, invert, blur, and threshold.
- Allow users to regenerate the collage by clicking on the canvas.
- Control image placement and randomness using variables and conditional statements.

# Notes

## 1. Preloading and Displaying Images

Use preload() to load images before the sketch starts and store them in an array.
```
function preload() {
  for (let i = 1; i <= 5; i++) {
    images.push(loadImage('images/'+i+'.jpg'));
  }
}
```

## 2. Creating a Random Collage

Use random() to position images dynamically and assign filters before displaying them.
```
function draw() {
  background(220);
  for (let i = 0; i < images.length; i++) {
    let img = images[i];
    let x = random(width - img.width/10);
    let y = random(height - img.height/10);
    image(img, x, y, 300, 300);
    applyFilter(img, currentFilters[i]);
  }
}
```
## 3. Applying Random Filters

Use the filter() function to apply effects like grayscale, invert, blur, and threshold.
```
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
```

## 4. Generating a New Collage on Click

Use mousePressed() to refresh the collage with new positions and filters.
```
function mousePressed() {
  generateCollage();
}

function generateCollage() {
  currentFilters = [];
  for (let i = 0; i < images.length; i++) {
    currentFilters.push(getRandomFilter());
  }
  redraw();
}
```
