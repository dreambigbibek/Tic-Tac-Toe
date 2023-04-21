
console.log('hi')
let clickPoint="X"
gameOver=false
function changeText(clickedId) {
    if(gameOver==true){
        alert("Game over")
        return null;
    }
    var element = document.getElementById(clickedId);
      element.innerHTML = clickPoint;
      checkWinner(clickPoint);
      clickPoint=="X"?clickPoint="0":clickPoint="X"

    // checkWinner(clickPoint);
  }

let winningSequence=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
function checkWinner(clickPoint){
     winningSequence.map((item,id)=>{
        let filteredList=item.filter((itemInside,idInside)=>{
           
            
           return((document.getElementById(itemInside.toString()).innerHTML==clickPoint)?(itemInside): (false)) ;
        
        })
        // debugger;
        if(filteredList.length==3)
        {
            gameOver=true;
            document.getElementById("displayWinner").innerHTML=`winner is ${clickPoint}`;
        }

     })
}