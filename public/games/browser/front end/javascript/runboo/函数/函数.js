/**函数声明 */
function fun(char){
    alert(char);
}
function func(){
    return ("ok");
}
function mul(a,b){
    return a*b;
}
/**函数表达式 */
var x = fmul (a,b) {
    return a * b;
};
var z = mul(4,3);

/**构造函数 */
var myFunction = new Function("a","b","return a*b");

var x = myFunction(4,3);

/**函数提升 */
//函数可在其声明前使用

/**自调用函数 */
//匿名自我调用
(function(){
    var x = "Hello!!";
})();

/**函数可作为一个值使用 */

/**函数是对象 */

/**箭头函数 */