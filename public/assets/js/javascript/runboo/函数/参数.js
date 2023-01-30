// parameters
// arguments

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    var max = arguments[0];
    if (arguments.length < 2) {
        return max;
    }
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < max) {
            max = arguments[i];
        }
    }
    return max;
}

x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
    var sum = 0;
    for(var i =0;i < arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}