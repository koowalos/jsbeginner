function makeAdder(x) {
    function add(y) {
        return y + x;
    };

    return add;
}
var plusOne = makeAdder(1);

var plusTen = makeAdder(10);

console.log(plusOne(12));
console.log(plusTen(1));