var elements = document.getElementsByClassName("category");
for(i=0; i<elements.length; i++) {
    var currentElement = elements[i];
    currentElement.addEventListener("mouseover", openMenu);
    currentElement.addEventListener("mouseout", closeMenu);
}

var dropDownMenus = document.getElementsByClassName("menu-level-1");
for(i=0; i<dropDownMenus.length; i++) {
    var currentElement = dropDownMenus[i];
    currentElement.addEventListener("mouseover", openMenu);
    currentElement.addEventListener("mouseout", closeMenu);
}

function openMenu() {
    var elementId = this.id.split("-");
    var matchingSubmenu = document.getElementById("submenu-" + elementId[1]);
    matchingSubmenu.style.display = "flex";
}

function closeMenu() {
    var elementId = this.id.split("-");
  var matchingSubmenu = document.getElementById("submenu-" + elementId[1]);
  matchingSubmenu.style.display = "none";
}

