function spin(object) {
    setInterval(function() {
        object.style.transform += "rotate(15deg)";
    }, 1);
}