const button = document.querySelector("#submit");
button.addEventListener('click', function (event) {
    event.preventDefault();

    let input1 = parseFloat(document.querySelector("#tal1").value);
    let input2 = parseFloat(document.querySelector("#tal2").value);
    let op = document.querySelector("#operator").value;

    if (input1.toString() === "NaN") {
        let x = document.querySelector("#tal1").value;
        if (x.trim() === "") {
            alert("Ups, du har skrevet forkert. Prøv igen.");
        } else {
            alert("Ups, du har skrevet forkert. Prøv igen. Du skrev: " + x.trim() + " venligst skriv et tal");
        }
        return;
    }

    if (input2.toString() === "NaN") {
        alert("Ups, du har skrevet forkert. Prøv igen");
        return;
    }

    if (op === "") {
        alert("Indtast en operator");
        return;
    }

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


