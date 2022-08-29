var obj = { "name": "runboo", "alexa": function () { return 10000; }, "site": "url" };
obj.alexa = obj.alexa.toString();
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;