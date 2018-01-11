
let images = Array.from(document.getElementsByTagName("img"));
function sliderChange(val) {
  let i,a;
    for (i = 0; i < images.length; i++) {
  a = images[i];
  a.style.width = val+"%";
 }
}
