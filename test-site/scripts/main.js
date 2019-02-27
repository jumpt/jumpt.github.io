var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/donkeykong.gif') {
      myImage.setAttribute ('src','images/dkong.png');
    } else {
      myImage.setAttribute ('src','images/donkeykong.gif');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Donkey Kong is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Donkey Kong is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
