function ifelsefunction() {
var seltheme = document.getElementById("background-color").value;
    const header = document.getElementsByClassName('header');
     if(seltheme == "light") {
    header.style.backgroundColor = 'black';
     }
     else  if(seltheme == "dark") {
    header.style.backgroundColor = '#6161FA';
     }
    }