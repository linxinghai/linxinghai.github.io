function getAJAX(url, id, func) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            func(this, id);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
