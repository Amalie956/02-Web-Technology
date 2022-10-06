const button = document.querySelector("#submit");
button.addEventListener('click', function (event) {
    event.preventDefault();

    let input1 = parseFloat(document.querySelector("#tal1").value);
    let input2 = parseFloat(document.querySelector("#tal2").value);
    let op = document.querySelector("#operator").value;

    if (input1.toString() === "NaN") {
        let x = document.querySelector("#tal1").value;
        if (x.trim() === "") {
            alert("Ups, du har skrevet forkert i boksen. Prøv igen.");
        } else {
            alert("Ups, du har skrevet forkert. Du skrev: " + x.trim() + " venligst skriv et tal");
        }
        return;
    }

    if (input2.toString() === "NaN") {
        let y = document.querySelector("#tal2").value;
        if (y.trim() === "") {
            alert("Ups, du har skrevet forkert i boksen. Prøv igen");
        } else {
            alert("Ups, du har skrevet forkert. Du skrev: " + y.trim() + " venligst skriv et tal");
        }
        return;
    }
        if (op === "") {
            alert("Du har glemt at indtaste en perator. Vælg venligst en af nedestående:");
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
    }
)
    ;


