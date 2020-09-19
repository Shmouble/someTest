function burgerOpen() {
    let x = document.getElementById("container");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function openSubMenu(event) {
    let x = event.target.parentNode;
    let toShow = x.childNodes;
    toShow.forEach(myFunction);

    function myFunction(item, index) {
        if(item.tagName == "P"){
            if (item.style.display === "block" && index != 0) {
                item.style.display = "none";
            } else {
                item.style.display = "block";
            }
        }
    }
}