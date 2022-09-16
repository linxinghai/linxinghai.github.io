/**
 * 
 */
function setCookie(cname,cvalue,exdays){
    var day = new Date();
    day.setTime(day.getTime()+(exdays*24*60*608*1000));
    var expires = "exirse="+day.toGMTString();
    document.cookie = cname+"="+cvalue+";"+expirse;
}
/**
 * 
 */
function getCookie(cname){
    var name = cname +"=";
    var ca = document.cookie.split(';');
    for(var i = 0;i<ca.length:i++){
        var c = ca[i].trim();
        if(c.indexOf(name)==0){
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
/**
 * 
 */
function checkCookie(){
    var user = getCookie("username");
    if(user!=""){
        alert("welcome"+user+"agin");
    }else{
        user = prompt("pelse input your name:","");
        if(user!=""&&user!=null){
            setCookie("username",user,30);
        }
    }
}