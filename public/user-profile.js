function hover(element, path, id) {
  var a = document.getElementById(id);
  a.setAttribute("src", path);
}

function unhover(element, path, id) {
  var a = document.getElementById(id);
  a.setAttribute("src", path);
}
