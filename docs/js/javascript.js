function doFunction() {
    console.log(guessnum)
    guess = document.getElementsByTagName("input")[0].value;
    guesses++;
    document.getElementById("printGuesses").innerHTML = "You have made " + guesses + " guesses.";
    let hints = document.getElementById("hints");
    let hint = document.createElement("p");
hints.append(hint);
    hint.innerText += "ad: " + items.mythics.ad[itemnum];
    console.log("Your guess: " + guess);
    console.log("guesses = " + guesses)
    if (guess.toLowerCase() === item.toLowerCase()) {
        alert("You won!\nThe item was: " + item + "\nYou did it in " + guesses + " guesses.");
        guesses = 0;
    }
}
let items = {
    mythics: {
        data: ["Goredrinker","Duskblade","Liandrys","Prowlers","Jak'Sho"],
        ad: ["Yes","Yes","No","Yes","No"],
    }
};

let list = document.getElementById("myUL");
items.mythics.data.forEach((item)=>{
    let li = document.createElement("li");
    let a = document.createElement("a");
    
    a.innerText = item;
    a.setAttribute('onclick','searchItem("' + item + '");')
    list.appendChild(li);
    li.appendChild(a);
  })

function searchItem(item) {
    console.log("gordink")
    document.getElementById("myInput").value = item;
}


let guesses = 0;
let guessnum = 0;
let guess = "";
let itemnum = Math.round(Math.random() * 3);
let item = items.mythics.data[itemnum];

console.log(item)

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