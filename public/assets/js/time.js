function startTime() {
    Date.prototype.format = function (fmt) {
        var o = {
            "y+": this.getFullYear, //年
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds() //秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    setInterval("document.getElementById('time').innerHTML = (new Date()).format('yyyy-MM-dd hh:mm:ss');", 1000);
}    
// function checkTime(i){
//     if (i<10) {
//         i="0"+i;
//     }
//     return i;
// }

// setTimeout

// function func() {
//     alert("请勿长时间或频繁访问");
// }

function timerInterval(state,func,times) {
    if (state == true) {
        setInterval(function(){func()},times)
    }else{
        clearInterval()
    }
}