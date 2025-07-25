for (var i = 1; i <= 9; i++) {
    document.getElementById("pic" + i).onmouseover = aaa;
}

function aaa() {
    for (var i = 1; i <= 9; i++) {
        if (this.id == "pic" + i) { document.getElementById("pic"+i).src = "images/ice0" + i + "-1.jpg" }
    }
}

for (var i = 1; i <= 9; i++) {
    document.getElementById("pic" + i).onmouseout = bbb;
}

function bbb() {
    for (var i = 1; i <= 9; i++) {
        if (this.id == "pic" + i) { document.getElementById("pic"+i).src = "images/ice0" + i + ".jpg" }
    }
}



