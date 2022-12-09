function age() {
    let person = prompt("Hur gammal är du?", "Din ålder");
    if (person != null) {
        data = false;
        return person;
    }
}

function gender() {
    let person = prompt("Vad identifierar du dig som?", "Ditt kön");
    if (person != null) {
        data = false;
        return person;
    }
}

function fritid() {
    let person = prompt("Spelar du dator spel på fritiden? (Ja/Nej)");
    return person;
}

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



let startButton = document.querySelector('#click-to-start');
let endButton = document.querySelector('#click-to-end');
let failButton = document.querySelector('#click-to-fail');

let last = 0;
let activeTime = 0;
let start = false;
let active = false;
let end = undefined;
let round = 1;
let reactionTime = 0;

failButton.addEventListener('mousedown', (e) => {
    start = false;
    active = false;
    activeTime = 0;
    end = undefined;
    console.log('fail');
    startButton.classList.toggle('hide');
    failButton.classList.toggle('hide');
});

endButton.addEventListener('mousedown', (e) => {
    start = false;
    active = false;
    end = undefined;
    endButton.classList.toggle('hide');
    reactionTime = Date.now() - activeTime;
    console.log(activeTime, Date.now(), reactionTime)
    startButton.classList.toggle('hide');
    document.getElementById("printReactionTime").innerHTML = "Runda " + round + " var din reaktionstid: " + reactionTime + " ms";

    if (round < 3) {
        answerObject.roundOne.data.push(reactionTime);
    } else if (round == 3) {
        answerObject.roundOne.data.push(reactionTime);
        answerObject.roundOne.average = answerObject.roundOne.data.reduce((a, b) => a + b, 0) / answerObject.roundOne.data.length;

        //average1 = average1 / 3;
        alert("Din genomsnittliga reaktionstid var " + Math.round(answerObject.roundOne.average) + " ms." + "\nKlicka OK för att börja Test 2");
        document.getElementById("click-to-start").classList.add("hw-100")
        document.getElementById("click-to-end").classList.add("hw-100")
        document.getElementById("click-to-fail").classList.add("hw-100")
    } else if (round > 3 && round < 6) {
        answerObject.roundTwo.data.push(reactionTime);
    } else {
        answerObject.roundTwo.data.push(reactionTime);
        answerObject.roundTwo.average = answerObject.roundTwo.data.reduce((a, b) => a + b, 0) / answerObject.roundTwo.data.length;
        console.log(answerObject)
        alert("Din genomsnittliga reaktionstid var " + Math.round(answerObject.roundOne.average) + " ms och " + Math.round(answerObject.roundTwo.average) + " ms");
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
        answerObject.roundOne.data = [];
        answerObject.roundTwo.data = [];
        document.getElementById("click-to-start").classList.remove("hw-100")
        document.getElementById("click-to-end").classList.remove("hw-100")
        document.getElementById("click-to-fail").classList.remove("hw-100")
        document.getElementById("printReactionTime").innerHTML = "";
        alert("Tack för att du körde mitt test 😁😁😁");
    }

    round += 1;
});

startButton.addEventListener('mousedown', (e) => {
    start = true;
    active = false;
    end = Date.now() + 1000 + Math.random() * 2000;
    startButton.classList.toggle('hide');
    failButton.classList.toggle('hide');
});

function step(timestamp) {
    if (timestamp >= last + 1000) {
        last = timestamp;
    }

    if (end !== undefined && Date.now() >= end && !active && start) {
        active = true;
        console.log('active');
        activeTime = Date.now();
        failButton.classList.toggle('hide');
        endButton.classList.toggle('hide');
    }

    window.requestAnimationFrame(step);
}
step();