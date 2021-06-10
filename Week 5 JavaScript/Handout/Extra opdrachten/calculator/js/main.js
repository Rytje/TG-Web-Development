console.log("Hallo");

let a = b = operator = result = "";

function checkValue(param) {
    // console.log(isNaN(param.value));
    if (!isNaN(param.value)) {
        if (operator.length === 0) {
            a += param.value;
        }
        else b += param.value;
    }
    else if (param.value !== "=") {
        operator = param.value;
    }
    else console.log(eval(a));
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("ople = " + operator.length);
    // console.log(a.length);
}
// console.log(eval("5 / 2.5"));