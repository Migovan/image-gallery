range.oninput = function sliderChange() {
  let i, a, images, val, range;
  range = document.getElementById('range');
  val = range.value;
  images = Array.from(document.getElementsByTagName("img"));
  for (i = 0; i < images.length; i++) {
    a = images[i];
    a.style.width = val + "px";
  }
}
