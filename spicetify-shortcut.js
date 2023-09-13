document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.shiftKey && event.key === "ArrowUp") {
    Spicetify.Player.setVolume(100);
  } else if (event.ctrlKey && event.shiftKey && event.key === "ArrowDown") {
    Spicetify.Player.setVolume(0);
  } else if (event.key === "l") {
    document.querySelector("button[aria-label='Lyrics']").click();
  }
  // Add more shortcuts here
});
