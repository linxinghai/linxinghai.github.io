function myFunction(){
    var a = 4;
    return a * a;
}

计算机困境
var counter = 0;
function add(){
    return counter += 1;
}

内嵌函数
function add(){
    var counter = 0;
    function plus(){
        counter += 1;
    }
    plus();
    return counter;
}

闭包
通过匿名函数的自我调用
令函数拥有私有变量
仅能通过函数修改
var add = (function (){
    var counter = 0;//局部变量
    return function (){
        return counter += 1;
    }
})();