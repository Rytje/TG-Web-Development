console.log("Hallo");

let a, b, operator, result, oldEval;
a = b = operator = result = oldEval = "";
let display = document.getElementById("display");

function checkValue(param) {
    if (!isNaN(param.value)) {//als een nummer is geklikt
        if (operator.length === 0) {//en geen operator
            a += param.value;
        }
        else if (operator.length > 0 && a.length > 0){//als a en operator zijn ingevuld
            b += param.value;
        }
        else if(result.length > 0){//
            a += param.value;
            b = "";
            result = "";
        }
    }
    else if (param.value !== "=" && result.length == 0) {//als op operator en geen result
        a = 0;
        operator = param.value;
    }
    else if (param.value !== "=" && result.length > 0){//als operator met voorgaand result
        a = result;
        operator = param.value;
    }
    else {//als je = drukt
        // console.log(eval(a));
        console.log("a = " + a);
        console.log("b = " + b);
        console.log("oplength = " + operator.length);
        // debugger;
        console.log("Dit is de uitkomst: " + eval(a + operator + b));
        result = eval(a + operator + b);
        display.innerText = result;

        // reset
        operator = "";
        // display.innerHTML = result;
    }
}


function handleInput(input){
    //check first input
    //if a == ""
    //if is number and result exist, start new calculation aka delete oldResult, operator and b
    //if is number, a += input
    //check if not number
    //if is operator and no oldResult, a = 0, operator = input go to next step
    //if is operator and oldResult exist, a = oldResult, operator = input go to next step

    //step 2 operator is chosen, now what?
    //if press operator
    //if operator already exist, operator is input
    //if press number b += input;
    //if press operator and b exist, result = eval a + operator + b daarna a = result en operator is operator
    //if press =, do eval and result is result daarna a = "" b = ""
}