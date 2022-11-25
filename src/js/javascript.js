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


var data;var age;var gender; var fritid;var active = 0;var average1 = 0;var average2 = 0;var round = 0;var clickedTime; var createdTime; var reactionTime; 

function makeBox() {
        var time=Math.random();
        time=time*4000+1000;
    
    setTimeout(function() {
        document.getElementById("test").style.backgroundColor=getRandomColor();
    
        document.getElementById("box").style.display="block";
        
        createdTime=Date.now();
        
    }, time); 

}

document.getElementById("box").onclick=function() {
    active = 0;
    round += 1;
    clickedTime=Date.now();
    
    reactionTime=(clickedTime-createdTime)/1000;
    
    if (round<3) {
        average1 += reactionTime;
    } else if (round == 3){
        average1 += reactionTime;
        alert("your average reaction time was " + average1/3 + " seconds");
        document.getElementById("test").classList.add("hw-100")
        document.getElementById("red").classList.add("hw-100")
    } else if (round>3 && round<6) {
        average2 += reactionTime;
    } else {
        average2 += reactionTime;
        alert("your average reaction time was " + average1/3 + " seconds and "  + average2/3 + " seconds");
        data = confirm("Får jag spara din data?");
        if (data == true) {
        age = age();
        gender = gender();
        fritid = fritid();
        }
    }

    document.getElementById("printReactionTime").innerHTML="Round " + round + " your Reaction Time was: " + reactionTime + " seconds";
    
    this.style.display="none";
    
    document.getElementById("red").innerHTML="Click to start the next round";
    document.getElementById("red").onclick=function() {
        
        document.getElementById("red").innerHTML="";
        if (active == 0) {
            active = 1;
    makeBox();
        } else {
        alert("You Clicked Too Early");
        }
    }
    
}
document.getElementById("red").onclick=function() {
    if (active == 0) {
        active = 1;
        document.getElementById("red").innerHTML="";
makeBox();
    } else {
        alert("You Clicked Too Early");
    }
}
