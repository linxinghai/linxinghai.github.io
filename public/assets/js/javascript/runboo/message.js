function tip(){
    var x;
    var person=prompt("请输入","tip");
    if(person!=null && person!=""){
        x="tip1"+person+"tip2";
        document.getElementById("tip").innerHTML=x;
    }
}