function startTime() {
    Date.prototype.format = function (fmt) {
        var o = {
            "y+": this.getFullYear, //��
            "M+": this.getMonth() + 1, //�·�
            "d+": this.getDate(), //��
            "h+": this.getHours(), //Сʱ
            "m+": this.getMinutes(), //��
            "s+": this.getSeconds() //��
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    setInterval("document.getElementById('time').innerHTML = (new Date()).format('yyyy-MM-dd hh:mm:ss');", 1000);
}    
function checkTime(i){
    if (i<10) {
        i="0"+i;
    }
    return i;
}
