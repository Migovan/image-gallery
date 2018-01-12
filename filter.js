myInput.onkeyup = function myFunction() {
  let input, li, a, i, windowSearch;
  // windowSearch = document.getElementsByClassName('windowSearch');
  input = document.getElementById("myInput");
  filter = input.value.toLowerCase();
  li = document.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
