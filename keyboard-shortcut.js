document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.shiftKey && event.key === "ArrowUp") {
    Spicetify.Player.setVolume(100);
  } else if (event.ctrlKey && event.shiftKey && event.key === "ArrowDown") {
    Spicetify.Player.setVolume(0);
  }
});
// -

let isMuted = false; 

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.code === "Backquote") {
    isMuted = !isMuted;
    if (isMuted) {
      Spicetify.Player.setVolume(0);
    } else {
      Spicetify.Player.setVolume(100);
    }
  }
});
// -



