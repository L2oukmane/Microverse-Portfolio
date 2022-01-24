function openCloseMenu() {
    var x = document.querySelector(".desktop-nav-bar");
    if (x.style.display === "flex")
        x.style.display = "none";
    else 
        x.style.display = "flex";
}
