// Döljer eller visar listan

function showHideList() {
  var x = document.getElementById("company-group");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}