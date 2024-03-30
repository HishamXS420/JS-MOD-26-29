// Option - 1: Directly Set on the HTML

// <button onclick="document.body.style.backgroundColor='yellow'"> Yellowweeee </button>

// Option - 2: Add onclick function on the html element
/// [We will use sometime]
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// Option - 3:
// <button id="make-blue">Make Blue</button>
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue; // Onclick এ সরাসরি ফাংশন এর নাম বসায়ে দেওয়া

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// Option - 4: 
// <button id="make-purple">Make Purple</button>
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
  // Onclick এ সরাসরি ফাংশন বসায়ে দেওয়া
  document.body.style.backgroundColor = "purple";
};

// Option - 5:
// <button id="make-pink">Make Pink</button>
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// Option - 6:
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click',function makeGreen(){
  document.body.style.backgroundColor = 'green';
})

// Option - 7 & Final:
/// [We will use sometime]
// <button id="make-golden-rod">Make goldenRod</button>
  //   document.getElementById('make-goldenrod').addEventListener('click',function(){})
  document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';
})