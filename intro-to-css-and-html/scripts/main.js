// PART I //
// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World';

// // let myVariable = 'Bob'; STRING 
// // let myVariable = true  BOOLEAN
// // let myVariable = 10; NUMBER
// // let myVariable = [1, 'Bob', 'Steve', 10]; ARRAY 
// // let myVariable = document.query-Selector('h1'); OBJECT

// // Function 
// let myVariable = document.querySelector('h1');

// alert("This ain't clickbait") // Function that pops up in web browser
// // This function above is so annoying tbh

// PART II //
let myImage = document.querySelector('img'); 

myImage.onclick = function() { 
    // set event handler property equal to a function with no name 
    // this makes it an "anonymous" function 

    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/where-lambo.jpg') {
        myImage.setAttribute( 'src', 'images/bitcoin.jpg');
    } else {
        myImage.setAttribute('src', 'image/where-lambo.jpg');
    }
};



let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');



function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

myButton.onclick = function() {
setUserName();
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
  


