setTimeout(() => {
    console.log("hello world.");
}, 3000);
//回调函数
//回调地狱

fetch()
    .then((Response) => Response.json())
    .then((json) => {
        console.log(json);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        stopLoadingAninmation();
    })
//链式调用

async function f()
{
    const Response = await fetch();
    const json = await Response.json();
    console.log(json);
}

f();

async function f()
{
    const promiseA = fetch();
    const promiseB = fetch();

    const [a,b] = await Promise.all([promiseA,promiseB]);
}

/** */
//回调函数
function print() {
    document.getElementById("demo").innerHTML = "boom";
}
setTimeout(print, 3000);
//异步AJAX
var xhr = new XMLHttpRequest();
xhr.onload = function(){
    document.getElementById("demo").innerHTML = xhr.responseText;
}
xhr.onerror = function(){
    document.getElementById("demo").innerHTML = "请求出错";
}
xhr.open("GET","URL",true);
xhr.send();
//jQuery
$.get("URL",function(data,status){
    alert("数据:"+data+"\n状态:"+status);
});