const button = document.querySelector("#submit");
button.addEventListener('click', function (event) {
        event.preventDefault();

        let inputLeft = parseFloat(document.querySelector("#box1").value);
        let inputRight = parseFloat(document.querySelector("#box2").value);
        let operator = document.querySelector("#operator").value;

        if (inputLeft.toString() === "NaN") {
            let input1Value = document.querySelector("#box1").value;
            if (input1Value.trim() === "") {
                alert("Ups, indsæt et tal. Prøv igen.");
            } else {
                alert("Ups, du har skrevet forkert. Du skrev:  " + input1Value.trim() + ". Du skal rette det til et tal");
            }
            return;
        }

        if (inputRight.toString() === "NaN") {
            let input2Value = document.querySelector("#box2").value;
            if (input2Value.trim() === "") {
                alert("Ups, indsæt et tal. Prøv igen");
            } else {
                alert("Ups, du har skrevet forkert. Du skrev: " + input2Value.trim() + ". Du skal rette det til et tal");
            }
            return;
        }
        if (operator === "") {
            alert("Du har glemt at indtaste en operator. Vælg venligst en af dem");
            return;
        }

        let calculate;

        if (operator === "+") {
            calculate = inputLeft + inputRight;
        } else if (operator === "-") {
            calculate = inputLeft - inputRight;
        } else if (operator === "*") {
            calculate = inputLeft * inputRight;
        } else if (operator === "/") {
            calculate = inputLeft / inputRight;
        }

        document.querySelector("#finalResult").value = calculate;
    }
)
