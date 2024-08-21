var spinSpeed = 0.01

function spin(object) {
    setInterval(function() {
        object.style.transform += "rotate(spinSpeed+deg)";
        spinSpeed + 0.01;
    }, 1);
}