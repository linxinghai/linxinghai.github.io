function myFunction1(a,b){
    return a * b;
}
window.myFunction(10,2);

function myFunction2(){
    return this;
}
myFunction2();

var myObject1 = {
    firstName:"John",
    lastName:"Doe",
    fullName:function(){
        return this.firstName + " " + this.lastName;
    }
}
myObject1.fullName();

var myObject2 = {
    firstName:"John",
    lastName:"Doe",
    fullName:function(){
        return this;
    }
}
myObject2.fullName();

/**使用构造函数调用函数 */
function myFunction3(arg1,arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}
var x = new myFunction3("john","Doe");
x.firstName;

function myFunction4(a,b) {
    return a * b;
}

myArray = [10,2];
myObject4 = myFunction4.apply(myObject4,myArray);