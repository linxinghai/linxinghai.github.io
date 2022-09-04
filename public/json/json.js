function getJson(src,id) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            document.getElementById(id).innerHTML = myObj.name;
        }
    };
    xmlhttp.open("GET", src, true);
    xmlhttp.send();

}