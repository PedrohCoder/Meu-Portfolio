//#region navbar menu



  const hamburguer = document.querySelector("button.hamburguer");
  hamburguer.addEventListener("click", hambopen);
  function hambopen() {
    hamburguer.classList.toggle("active");
  }
    
//#endregion

//#region Portfólio

let OnScreen = 1;
const videoitens = document.getElementsByClassName("videos")[0];
const devitens = document.getElementsByClassName("dev")[0];
const devitem1 = document.getElementById("dev1");

if (OnScreen == 1) {
  devitens.style.display = "none";
  videoitens.style.display = "grid";
}
function videos() {
  OnScreen = 1;
  if (OnScreen == 1) {
    devitens.style.display = "none";
    videoitens.style.display = "grid";
    document.getElementById("btn-videos").style.border = "#f1c4d0 solid 3px";
    document.getElementById("btn-dev").style.border = "none";
  }
}
function dev() {
  OnScreen = 0;
  if (OnScreen == 0) {
    videoitens.style.display = "none";
    devitens.style.display = "grid";
    document.getElementById("btn-dev").style.border = "#f1c4d0 solid 3px";
    document.getElementById("btn-videos").style.border = "none";
  }
}

//#endregion
