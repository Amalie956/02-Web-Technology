const button = document.querySelector("#submit");
console.log(button);

button.addEventListener('click', function (event) {
    event.preventDefault();

    let input1 = parseFloat(document.querySelector("#tal1").value);
    let input2 = parseFloat(document.querySelector("#tal2").value);
    /*
        console.log("inputtet som en streng " + typeof input1.toString());
        console.log("længden er som en streng " + input1.toString().length);
        console.log(input1.toString() === "NaN");
    */
    //Beregn = intet skevet i inputene, log ud:
    //if (submit.toString() === "NaN")


    //Input1 = skrevet bogstav stedet for tal, log ud:
    if (input1.toString() === "NaN") {
        alert("Ups, du har skrevet forkert. Prøv igen");
    }
    //Input2 = skrevet bogstav stedet for tal, log ud:
    else if (input2.toString() === "NaN") {
        alert("Ups, du har skrevet forkert. Prøv igen");
    }
//Vælg imellem = nul valgte, log ud:


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


