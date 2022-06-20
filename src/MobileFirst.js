document.getElementById("nav-toggle").onclick = function () {
  document.getElementById("nav-content").classList.toggle("hidden");
};

document.getElementById("cross").onclick = function () {
  document.getElementById("nav-content").classList.toggle("hidden");
};

function formVisibility() {
  if (document.getElementById("my-form").style.display == "none") {
    document.getElementById("my-form").style.display = "block";
  } else if (document.getElementById("my-form").style.display == "block") {
    document.getElementById("my-form").style.display = "none";
  }
}
function searchVisibility() {
  if (document.getElementById("nav").style.display != "none") {
    document.getElementById("nav").style.display = "none";
    document.getElementById("search").style.display = "block";
  } else {
    document.getElementById("nav").style.display = "block";
    document.getElementById("search").style.display = "none";
  }
}

function ChangeImageNavBar() {
  if (document.getElementById("nav-toggle").style.display != "none") {
    document.getElementById("nav-toggle").style.display = "none";
    document.getElementById("cross").style.display = "block";
  } else {
    document.getElementById("nav-toggle").style.display = "block";
    document.getElementById("cross").style.display = "none";
  }
}
