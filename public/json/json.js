function getJson(src,func) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            console.log(myObj);
            func(myObj);
        }
    };
    xmlhttp.open("GET", src, true);
    xmlhttp.send();

}

function footer(myObj) {
    document.getElementById("emaila").innerHTML = myObj.email;
    document.getElementById("phones").innerHTML = myObj.phone;
    document.getElementById("addresss").innerHTML = myObj.address;
}
