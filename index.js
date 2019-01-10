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