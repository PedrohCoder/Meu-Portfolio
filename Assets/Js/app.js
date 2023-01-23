//#region Animação de titulo
const title = document.querySelector("#title-anim");

function typing(text, count) {
  if (count < text.length) {
    setTimeout(() => { //a cada um tanto tempo 
      title.textContent += text.charAt(count); //adicionando um carácter ao titulo referente ao texto
      count++; // quantidade de letras do texto
      typing(text, count); //chamando a função novamente para fazer um loop até o texto ser terminado
    }, 120);
  }
}
setTimeout(function()
{
  typing("Pedro Henrique", 0);
}, 2500);


//#endregion

//#region transições
const targets = document.querySelectorAll("[data-anim]");
const animclass = "animate";

function anim_scroll() {
  const windowtop = window.pageYOffset + (window.innerHeight * 3) / 4;
  targets.forEach(function (element) {
    if (windowtop > element.offsetTop) {
      element.classList.add(animclass);
    } else {
      element.classList.remove(animclass);
    }
  });
}

if (targets.length) {
  window.addEventListener("scroll", anim_scroll);
}

//#endregion

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
