function checkTheChecks() {
  var checkBox1 = document.getElementById("anime");
  var checkBox2 = document.getElementById("figurines");


  var animeSectie = document.getElementById("animeSectie");
  var figurinesSectie = document.getElementById("figurinesSectie");



  animeSectie.dataset.anime = checkBox1.checked;
  figurinesSectie.dataset.figurines = checkBox2.checked;



  var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
  var empty = [].filter.call( allCheckboxes, function( el ) {
    return !el.checked
 });
if(allCheckboxes.length == empty.length) {
  animeSectie.dataset.anime = true;
  figurinesSectie.dataset.figurines = true;
}
}



var modal = document.getElementById("myModal");

var btn = document.getElementsByClassName("myBtn");
Array.from(btn).forEach((e) => {
  e.onclick = function() {
    modal.style.visibility = "visible";
    modal.style.opacity = 1;
  }
})

var cross = document.getElementsByClassName("close")[0];



cross.onclick = function() {
  modal.style.visibility = "hidden";
  modal.style.opacity = 0;
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;
  }
}