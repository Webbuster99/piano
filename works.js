// detecting button press
let c = document.querySelectorAll(".key").length;
for (let x = 0; x < c; x++) {
  document.querySelectorAll(".key")[x].addEventListener("click", function () {
    //
    let y = this.innerHTML;
    works(y);
    animation(y);
  });
}
// detecting keyboard press/keydown
document.addEventListener("keydown", function (e) {
  works(e.key);
  animation(e.key);
});

// works function: create for both (button,keyboard)
function works(n) {
  switch (n) {
    case "c":
      let C = new Audio("notes/C.mp3");
      C.play();
      break;
    case "b":
      let Db = new Audio("notes/Db.mp3");
      Db.play();
      break;
    case "d":
      let D = new Audio("notes/D.mp3");
      D.play();
      break;
    case "e":
      let Eb = new Audio("notes/Eb.mp3");
      Eb.play();
      break;
    case "r":
      let E = new Audio("notes/E.mp3");
      E.play();
      break;
    case "f":
      let F = new Audio("notes/F.mp3");
      F.play();
      break;
    case "g":
      let Gb = new Audio("notes/Gb.mp3");
      Gb.play();
      break;
    case "k":
      let G = new Audio("notes/G.mp3");
      G.play();
      break;
    case "a":
      let Ab = new Audio("notes/Ab.mp3");
      Ab.play();
      break;
    case "l":
      let A = new Audio("notes/A.mp3");
      A.play();
      break;
    case "t":
      let Bb = new Audio("notes/Bb.mp3");
      Bb.play();
      break;
    case "s":
      let B = new Audio("notes/B.mp3");
      B.play();
      break;

    default:
      break;
  }
}
function animation(string) {
  const xu = document.querySelector("." + string);
  xu.classList.add("pressed");
  setTimeout(() => {
    xu.classList.remove("pressed");
  }, 100);
}
