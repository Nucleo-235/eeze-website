function openMenu() {
  var nav = document.querySelector('nav');
  if (nav.style.margin == '' ) document.querySelector('nav').style.margin = '10px';
  else nav.style.margin = '';
}
