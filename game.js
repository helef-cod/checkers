var redwin = document.querySelector("#redwin");
var blackwin = document.querySelector("#blackwin");
var btnr = document.querySelector("#btnr");
var btnb = document.querySelector("#btnb");
var cirB = document.querySelector("#cirB");
var cirP = document.querySelector("#cirP");
var board = document.querySelector("#board");

var diva8 = document.querySelector("#a8");
var divb8 = document.querySelector("#b8");
var divc8 = document.querySelector("#c8");
var diva7 = document.querySelector("#a7");
var divb7 = document.querySelector("#b7");
var divc7 = document.querySelector("#c7");
var diva6 = document.querySelector("#a6");
var divb6 = document.querySelector("#b6");
var divc6 = document.querySelector("#c6");

var divf1 = document.querySelector("#f1");
var divg1 = document.querySelector("#g1");
var divh1 = document.querySelector("#h1");
var divf2 = document.querySelector("#f2");
var divg2 = document.querySelector("#g2");
var divh2 = document.querySelector("#h2");
var divf3 = document.querySelector("#f3");
var divg3 = document.querySelector("#g3");
var divh3 = document.querySelector("#h3");

document.addEventListener("dragend", () => {
  if (
    divf1.childNodes.length &&
    divg1.childNodes.length &&
    divh1.childNodes.length &&
    divf2.childNodes.length &&
    divg2.childNodes.length &&
    divh2.childNodes.length &&
    divf3.childNodes.length &&
    divg3.childNodes.length &&
    divh3.childNodes.length
  ) {
    if (
      divf1.childNodes[0].className == "circlep" &&
      divg1.childNodes[0].className == "circlep" &&
      divh1.childNodes[0].className == "circlep" &&
      divf2.childNodes[0].className == "circlep" &&
      divg2.childNodes[0].className == "circlep" &&
      divh2.childNodes[0].className == "circlep" &&
      divf3.childNodes[0].className == "circlep" &&
      divg3.childNodes[0].className == "circlep" &&
      divh3.childNodes[0].className == "circlep"
    ) {
      redwin.style.visibility = "visible";
    } else {
      redwin.style.visibility = "hidden";
    }
  } else {
    redwin.style.visibility = "hidden";
  }
});
document.addEventListener("dragend", () => {
  if (
    diva8.childNodes.length &&
    divb8.childNodes.length &&
    divc8.childNodes.length &&
    diva7.childNodes.length &&
    divb7.childNodes.length &&
    divc7.childNodes.length &&
    diva6.childNodes.length &&
    divb6.childNodes.length &&
    divc6.childNodes.length
  ) {
    if (
      diva8.childNodes[0].className == "circleb" &&
      divb8.childNodes[0].className == "circleb" &&
      divc8.childNodes[0].className == "circleb" &&
      diva7.childNodes[0].className == "circleb" &&
      divb7.childNodes[0].className == "circleb" &&
      divc7.childNodes[0].className == "circleb" &&
      diva6.childNodes[0].className == "circleb" &&
      divb6.childNodes[0].className == "circleb" &&
      divc6.childNodes[0].className == "circleb"
    ) {
      blackwin.style.visibility = "visible";
    } else {
      blackwin.style.visibility = "hidden";
    }
  } else {
    blackwin.style.visibility = "hidden";
  }
});

btnr.addEventListener("click", () => {
  cirP.style.visibility = "visible";
  cirB.style.visibility = "hidden";
  board.style.transform = "rotate(180deg)";
  board.style.transitionDuration = "500ms";
});

btnb.addEventListener("click", () => {
  cirB.style.visibility = "visible";
  cirP.style.visibility = "hidden";
  board.style.transform = "initial";
});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  if (!ev.target.getAttribute("ondrop") || ev.target.childNodes.length) {
    return false;
  }
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
