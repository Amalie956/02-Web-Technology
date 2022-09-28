const button = document.querySelector("button");
console.log(button);
button.addEventListener('click', function () {

    let input1 = parseInt(document.querySelector("#tal1").value);
    let input2 = parseInt(document.querySelector("#tal2").value);
    let op = document.querySelector("#operator").value;
    console.log(input1 + " " + input2 + " " + op);
    let calculate;

    if (op == "+") {
        calculate = input1 + input2;
    } else if (op == "-") {
        calculate = input1 - input2;
    } else if (op == "*") {
        calculate = input1 * input2;
    } else if (op == "/") {
        calculate = input1 / input2;
    }
    document.querySelector("#result").innerHTML = calculate;
});
/*
function calc(operator) {
    let a = parseInt(document.querySelector("#tal1").value);
    let b = parseInt(document.querySelector("#tal2").value);
    let op = document.querySelector("#operator").value;
    console.log(a + " " + b + " " + op);
    let calculate;

    if (op == "+") {
        calculate = a + b;
    } else if (op == "-") {
        calculate = a - b;
    }else if (op == "*") {
        calculate = a * b;
    } else if (op == "/") {
        calculate = a / b;
    }
    document.querySelector("#result").innerHTML = calculate;
}
*/