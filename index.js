// document.getElementsByClassName("clickDiv").innerHTML="0";
console.log('hi')
let clickPoint="X"
function changeText(clickedId) {
    var elements = document.getElementById(clickedId);
      elements.innerHTML = clickPoint;
      clickPoint=="X"?clickPoint="0":clickPoint="X"

    console.log("clicked");
  }