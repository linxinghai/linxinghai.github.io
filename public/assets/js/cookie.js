function setCookie(cname,cvalue,exdays) {
    var d = new Data();
    d.setTime(d.getTime()+(exdays*24*60*60*1000))
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    
}

function checkCookie(params) {
    
}

function deleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

function displayCookie(params) {
    
}