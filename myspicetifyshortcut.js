// https://github.com/spicetify/spicetify-cli/blob/master/globals.d.ts

function eventTriggerWithKey(key, functionToExecute) {
Spicetify.Mousetrap.bind(key, functionToExecute)
}

eventTriggerWithKey("ctrl+shift+up", () => {
Spicetify.Player.setVolume(100);
})

eventTriggerWithKey("ctrl+shift+down", () => {
Spicetify.Player.setVolume(0);
})

eventTriggerWithKey("l", () => {
document.querySelector("button[aria-label='Lyrics']").click();
})

eventTriggerWithKey("f11", () => {
document.querySelector("button[aria-label='Full screen']").click();
document.querySelector("button[aria-label='Exit full screen']").click();
})

eventTriggerWithKey("q", () => {
document.querySelector("button[aria-label='Queue']").click();
})