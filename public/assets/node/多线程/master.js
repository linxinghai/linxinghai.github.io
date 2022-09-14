const fs = require('fs');
const child_process = require('child_process');

for (var i = 0; i < 3; i++) {
    var workerProcess = child_process.exec('node support.js ' + i, function (error, stdout, stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code: ' + error.code);
            console.log('Signal received: ' + error.signal);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    });

    workerProcess.on('exit', function (code) {
        console.log('子进程已退出，退出码 ' + code);
    });
}

process.on('exit', function () {
    setTimeout(() => {
        console.log('This will not run');
    }, 100);
    console.log('exit');
});

// process.on('uncaughtException', function (err) {
//     console.log('Caught exception: ' + err);
// });
// setTimeout(function () {
//     console.log('This will still run.');
// }, 500);
// // Intentionally cause an exception, but don't catch it.
// nonexistentFunc();
// console.log('This will not run.');