function GetLoaclIpAddress() {
    var obj = null;
    var rslt = "";
    try {
        obj = new ActiveXObject("rcbdyctl.Setting");
        rslt = obj.GetIpAddress;
        obj = null;
    }
    catch (e) {

    }
    return rslt;
}