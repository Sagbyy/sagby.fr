const txtAnim = document.getElementById("anim");

new Typewriter(txtAnim, {
    loop: true,
})
.typeString("Developpeur.")
.pauseFor(500)
.deleteChars(12)
.typeString("Designer.")
.pauseFor(500)
.deleteChars(7)
.start()