function myFunction1(){
    var x="",i;
    for (i=1;; i++){
        if(i==5)continue;
        x=x + "<h" + i + ">Heading " + i + "</h" + i + ">";
        if(i>=6)break;
    }
    document.getElementById("demo1").innerHTML=x;
}
function myFunction2(){
    var x;
    var txt="";
    var person={fname:"Bill",lname:"Gates",age:56}; 
    for (x in person){
        txt=txt + person[x];
    }
    document.getElementById("demo2").innerHTML=txt;
}