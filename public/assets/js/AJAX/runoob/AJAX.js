function loadXMLDoc(xmlhttp,url,func) {
    if (window.XMLHttpRequest) {
        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //readyState
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //请求完成,响应就绪,启动回调
            // RequestJSON(JSON.parse(this.responseText));
            // responseText(xmlhttp.responseText);
            func(this);
        }
    }
    //请求
    xmlhttp.open("GET", url, true);
    //xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
}

// xmlhttp.open("POST", url, true);
// xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// xmlhttp.send("fname=Henry&lname=Ford");

//response响应
//TXT
//document.getElementById("id").innerHTML=this.responseText;

//XML
function responseXML(xmlhttp, tagName) {
    xmlDoc = xmlhttp.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName(tagName);
    for (i = 0; i < x.length; i++) {
        txt = txt + x[i].childNodes[0].nodeValue + "<br>";
    }
    return txt;
}
//document.getElementById("id").innerHTML=responseXML(this,"ARTIST");


function showCustomer(url,str) {
    var xmlhttp;
    if (str=="") {
        document.getElementById("txtHint").innerHTML="";
        return;
    }
    loadXMLDoc(xmlhttp,url,document.getElementById("txtHint").innerHTML=xmlhttp.responseText);
}
//showCustomer("/try/ajax/getcustomer.php?q="+this.value,this.value);

function jsonsend() {
    xmlhttp.send(JSON.stringify({ "email": "admin@runoob.com", "response": { "name": "runoob" } }));
}
