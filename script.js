// Write Javascript code!

function addScript() {
    var idName = 'temporary';
    var script = document.getElementById(idName);
    if (script) script.parentNode.removeChild(script);
    var script = document.createElement('script');
    script.src = this.parentNode.parentNode.id + '/' + this.innerHTML;
    script.id = idName;
    document.head.appendChild(script);
}

var elem = document.querySelectorAll("a[href='#']");
for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', addScript, false);
}

function toggleDocs(event) {
    if (event.target && event.target.className == 'clickable-heading') {
        var next = event.target.nextElementSibling;
        if (next.style.display == "none") {
            next.style.display = "block";
        } else {
            next.style.display = "none";
        }
    }
}

document.addEventListener('click', toggleDocs, true);