function setCookie(cname,cvalue,exdays) {
    var d = new Data();
    d.setTime(d.getTime()+(exdays*24*60*60*1000))
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    return document.cookie;
}

function checkCookie(params) {
    var user=getCookie("username");
    if(user!="")
    {
        alert("欢迎 "+user+"再次访问");
    }else{
        user=prompt("请输入你的名字:","");
        if(user!=""&&user!=null)
        {
            setCookie("username",user,30);
        }
    }
}

function deleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

function displayCookie(params) {
    
}