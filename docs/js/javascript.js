function age() {
    let person = prompt("Hur gammal är du?", "Din ålder");
    if (person != null) {
        return person;
    }
}

function gender() {
    let person = prompt("Vad identifierar du dig som?", "Ditt kön");
    if (person != null) {
        return person;
    }
}

function fritid() {
    let person = prompt("Vad gör du mest på fritiden?", "Din hobby");
    if (person != null) {
        return person;
    }
}

function getRandomColor() {

    var color = "#00ff00";
    return color;


}

function getRedColor() {

    var color = "#ff0000";
    return color;


}// ends getRandomColor Function


function sendResult(url) {
    if (!url) return;
    fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(answerObject),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

let answerObject = {
    gender: false,
    age: 0,
    gamer: false,
    roundOne: {
        data: [],
        average: 0
    },
    roundTwo: {
        data: [],
        average: 0
    }
};

var data; var age; var gender; var fritid; var active = 0; var average1 = 0; var average2 = 0; var round = 0; var clickedTime; var createdTime; var reactionTime;

function makeBox() {
    let time = Math.random() * 4000 + 1000;

    setTimeout(function () {
        document.getElementById("test").style.backgroundColor = getRandomColor();

        document.getElementById("box").style.display = "block";

        createdTime = Date.now();

    }, time);

}

document.getElementById("box").onclick = function () {
    active = 0;
    round += 5;
    clickedTime = Date.now();

    reactionTime = (clickedTime - createdTime) / 1000;

    if (round < 3) {
        average1 += reactionTime;
        answerObject.roundOne.data.push(reactionTime);
    } else if (round == 3) {
        answerObject.roundOne.data.push(reactionTime);
        answerObject.roundOne.average = answerObject.roundOne.data.reduce((a, b) => a + b, 0) / answerObject.roundOne.data.length;

        //average1 = average1 / 3;
        alert("Din genomsnittliga reaktionstid var " + answerObject.roundOne.average + " sekunder");
        document.getElementById("test").classList.add("hw-100")
        document.getElementById("red").classList.add("hw-100")
    } else if (round > 3 && round < 6) {
        average2 += reactionTime;
    } else {
        average2 += reactionTime;
        average2 = average2 / 3;
        alert("Din genomsnittliga reaktionstid var " + answerObject.roundOne.average + " sekunder och " + average2 + " sekunder");
        data = confirm("Får jag spara din data?");
        if (data == true) {
            answerObject.age = age();
            answerObject.gender = gender();
            answerObject.gamer = fritid();
            // spara data om Data = true


            sendResult('https://pewter-shy-anglerfish.glitch.me/');

        }
        round = 0;
        average1 = 0;
        average2 = 0;
        reactionTime = 0;
        document.getElementById("test").classList.remove("hw-100")
        document.getElementById("red").classList.remove("hw-100")
        alert("Tack för att du körde mitt test 😁😁😁");
        console.log(answerObject)
    }

    document.getElementById("printReactionTime").innerHTML = "Round " + round + " Din reaktionstid var: " + reactionTime + " sekunder";

    this.style.display = "none";

    document.getElementById("red").innerHTML = "Klicka för att starta nästa runda.";
    document.getElementById("red").onclick = function () {

        document.getElementById("red").innerHTML = "";
        if (active == 0) {
            active = 1;
            makeBox();
        } else {
            alert("Du klickade för tidigt!");
        }
    }

}
document.getElementById("red").onclick = function () {
    if (active == 0) {
        active = 1;
        document.getElementById("red").innerHTML = "";
        makeBox();
    } else {
        alert("Du klickade för tidigt!");
    }
}