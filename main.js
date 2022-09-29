const button = document.querySelector("#submit");
console.log(button);

button.addEventListener('click', function (event) {
    event.preventDefault();

    let input1 = parseFloat(document.querySelector("#tal1").value);

    let input2 = parseFloat(document.querySelector("#tal2").value);
   // if() skriv alert her i
    //onsubmit="event.preventDefault();

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
    const p = document.querySelector('p');
    p.innerHTML = "Resultat er";

    document.querySelector("#result").innerHTML = calculate;
});


