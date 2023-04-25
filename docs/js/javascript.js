function doFunction() {
    console.log(guessnum)
    guess = document.getElementsByTagName("input")[0].value;
    guesses++;
    document.getElementById("printGuesses").innerHTML = "You have made " + guesses + " guesses.";
    let hints = document.getElementById("hints");
    let hint = document.createElement("p");
hints.append(hint);
if (fickstuscturtoauhertuahertaretuihaeriuthaeruithaeruitheairut)
    hint.innerText += "ad: " + items.mythics.ad[itemnum];
    console.log("Your guess: " + guess);
    console.log("guesses = " + guesses)
    if (guess.toLowerCase() === answer.toLowerCase()) {
        alert("You won!\nThe item was: " + answer + "\nYou did it in " + guesses + " guesses.");
    }
}
let items = {
    mythics: {
        int: [0,1,2,3,4],
        name: ["Goredrinker","Duskblade","Liandrys","Prowlers","Jak'Sho"],
        ad: [1,1,0,1,0],
    }
};
let list = document.getElementById("myUL");
let searchnum = 0;
items.mythics.int.forEach((item)=>{

    let li = document.createElement("li");
    let a = document.createElement("a");
    
    a.innerText = items.mythics.name[item];
    a.setAttribute('onclick','searchItem("' + items.mythics.name[item] + "," + item + '");')
    list.appendChild(li);
    li.appendChild(a);
  })

function searchItem(name, num) {
    console.log(searchnum)
    console.log(guessnum);
    document.getElementById("myInput").value = name;
}


let guesses = 0;
let guessnum = 0;
let guess = "";
let itemnum = Math.round(Math.random() * 3);
let answer = items.mythics.name[itemnum];

console.log(answer)

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }