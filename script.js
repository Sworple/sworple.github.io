
document.getElementById("defaultTab").click();

function openTab(event, tabName) {
    //declare variables
    var i, tabcontent, tablinks;

    // hide everything with "tabcontent" class
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // get everything with "navbar" class and remove active class
    navbar = document.getElementsByClassName("navbar");
    for (i = 0; i < navbar.length; i++) {
        navbar[i].className = navbar[i].className.replace("active", "");
    }

    // show selected tab and add active to tab's button
    document.getElementById(tabname).style.display = "block";
    event.currentTarget.className += "active"
}