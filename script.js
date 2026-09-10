function startJourney() {

    document.getElementById("welcomeScreen").classList.add("hidden");

    document.getElementById("choiceScreen").classList.remove("hidden");

}

let firstChoice = "";

function chooseOption(choice) {

    firstChoice = choice;

    document.getElementById("choiceScreen").classList.add("hidden");

    document.getElementById("question2").classList.remove("hidden");
}

let secondChoice = "";

function chooseSecond(choice) {

    secondChoice = choice;

    document.getElementById("question2").classList.add("hidden");

    document.getElementById("question3").classList.remove("hidden");
}

let thirdChoice = "";

function chooseThird(choice) {

    thirdChoice = choice;

    document.getElementById("question3").classList.add("hidden");

    document.getElementById("passwordScreen").classList.remove("hidden");
}
function checkPassword() {

    let password = document.getElementById("passwordInput").value;

    if (password === "rosy") {

        document.getElementById("passwordScreen").classList.add("hidden");

        document.getElementById("letterScreen").classList.remove("hidden");

    } else {

        document.getElementById("passwordMessage").innerText =
            "Wrong password 😭 Nice try though. Tip : i love it and it starts with R";

    }
}