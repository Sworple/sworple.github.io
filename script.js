var spinSpeed = 0.01

function spin(object) {
    setInterval(function() {
        object.style.transform += "rotate(0.1deg)";
    }, 1);
}