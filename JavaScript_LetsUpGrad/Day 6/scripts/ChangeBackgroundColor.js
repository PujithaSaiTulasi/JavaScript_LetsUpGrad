var c = ["blue", "black", "yellow", "red"];
var currentColorIndex = 0;

function changeColor() {
  document.bgColor = c[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % c.length;
  setTimeout(changeColor, 5000);
}
