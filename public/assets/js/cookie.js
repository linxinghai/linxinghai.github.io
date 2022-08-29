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

function deleteCookie(params) {
    
}

function displayCookie(params) {
    
}