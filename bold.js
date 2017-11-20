words = document.getElementsByTagName('strong');
for (var x = 0; x < words.length; x++) {
    words[x].onmouseover = function () {
        this.style.color = "red";
    };
}