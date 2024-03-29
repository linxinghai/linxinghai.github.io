var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('连接成功');
    eventEmitter.emit('data_received');
}
eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function () {
    console.log('数据接收成功');
});

setTimeout(function () {
    eventEmitter.emit('connection');
}, 1000);

console.log("程序执行结束");