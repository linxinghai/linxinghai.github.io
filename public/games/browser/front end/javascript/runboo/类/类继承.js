// class Animal{

// };

// class Dog extends Animal{

// };

class Site{
    constructor(name){
        this.sitename = name;
    }
    present(){
        return '123' + this.sitename;
    }
}

/**用extends声明Runboo类将继承site类 */
class Runboo extends Site{
    constructor(name,age){
        super(name);
        this.age = age;
    }
    show(){
        return this.present() + ' ' + this.age + ' ';
    }
}
let noob = new Runboo("a",5);
document.getElementById("demo").innerHTML = noob.show();

// getter和setter
class {
    constructor(name){
        this.sitename = name;
    }
    get s_name(){
        return this.sitename;
    }
    set s_name(x){
        this.sitename = x;
    }
}
let noob = new Runboo("a");
document.getElementById("demo").innerHTML = noob.s_name;

提升
函数声明能提升,但是类声明不能