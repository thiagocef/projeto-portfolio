function opennav() {
    var x = document.getElementById("navigation");
    
    if (x.className === "navigation") {
        x.className += " menujs";
        document.getElementById("treslinhas").innerHTML = "&Cross;";
    } else {
        x.className = "navigation";
        document.getElementById("treslinhas").innerHTML = "&#9776;";
    }


}