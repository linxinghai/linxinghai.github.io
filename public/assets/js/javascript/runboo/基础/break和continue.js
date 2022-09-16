//break
for (i = 0; i < 10; i++) {
    if (i==3) {
        break;
    }
    x = x + "The number is" + i + "<br>";
}
//continue
for(i = 0;i < 10;i++){
    if(i==3) continue;
    x = x + "The number is" + i + "<br>";
}
//标签
label:
statements

break labelname;
continue labelname;

cars["","",""];
list:
{
    document.write(cars[0] + "<br>");
    document.write(cars[1] + "<br>");
    document.write(cars[2] + "<br>");
    break list;
    document.write(cars[3] + "<br>");
    document.write(cars[4] + "<br>");
    document.write(cars[5] + "<br>");
}
