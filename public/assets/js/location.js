function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    } else {
        console.log("不支持定位");
    }
}

function showPosition(position) {
    console.log("维度:"+position.coords.latitude);
    console.log("经度:"+position.coords.longitude);
}

function showError(error) {
    switch(error.code) 
	{
		case error.PERMISSION_DENIED:
			console.log("用户拒绝对获取地理位置的请求。")
			break;
		case error.POSITION_UNAVAILABLE:
			console.log("位置信息是不可用的。")
			break;
		case error.TIMEOUT:
			console.log("请求用户地理位置超时。")
			break;
		case error.UNKNOWN_ERROR:
			console.log("未知错误。")
			break;
	}
}