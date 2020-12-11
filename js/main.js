// Function navigate to another page
$('#butGame').on('click', () =>{
    location.href = "game.html"
})


// Start function  Start Game

var turn = "X";

$('#butStart').on('click', ()=>{
    setMessage(turn + " start game")
})

function setMessage(msg){
    $('.boardInst').text(msg);
}




// Start move
function move(spot){ 
    if(spot.innerText == ""){
        spot.innerText = turn;
        switchTurn();
    }else{
        alert("Select another spot, It's already selected")
    }
}

function switchTurn(){
    if(checkWinner()){
        alert("win");
    }else if(turn == "X"){
        turn = "O";
        setMessage("It's " + turn + " Your turn");
    }else{
        turn = "X";
        setMessage("It's " + turn + " Your turn");
    }
    
}

// create funtion to give me spot

function giveMeSpot(num){
    return $('#spot' + num).text();
}


// create function checkWinner
var Xsign = "X";
var Osign = "O";
function checkWinner(){
    var result = false;
    var rowOneOfOne = 1;
    var rowOneOfTwo = 2;
    var rowOneOfThree = 3;
    var rowTwoOfOne = 4;
    var rowTwoOfTwo = 5;
    var rowTwoOfThree = 6;
    var rowThreeOfOne = 7;
    var rowThreeOfTwo = 8;
    var rowThreeOfThree = 9;
    if(giveMeSpot(rowOneOfOne)&&giveMeSpot(rowOneOfTwo)&&giveMeSpot(rowOneOfThree) == Xsign){
        result = true;
    }else if(giveMeSpot(rowTwoOfOne)&&giveMeSpot(rowTwoOfOne)&&giveMeSpot(rowTwoOfThree) == Xsign){
        result = true;
    }else if(giveMeSpot(rowThreeOfOne)&&giveMeSpot(rowThreeOfTwo)&&giveMeSpot(rowThreeOfThree) == Xsign){
        result = true;
    }else if(giveMeSpot(rowOneOfOne)&&giveMeSpot(rowTwoOfTwo)&&giveMeSpot(rowTwoOfThree) == Xsign){
        result = true;
    }else if(giveMeSpot(rowOneOfTwo)&&giveMeSpot(rowTwoOfTwo)&&giveMeSpot(rowThreeOfTwo) == Xsign){
        result = true;
    }else if(giveMeSpot(rowOneOfThree)&&giveMeSpot(rowTwoOfThree)&&giveMeSpot(rowThreeOfThree) == Xsign){
        result = true;
    }else if(giveMeSpot(rowOneOfOne)&&giveMeSpot(rowTwoOfTwo)&&giveMeSpot(rowThreeOfThree) == Xsign){
        result = true;
    }else if(giveMeSpot(rowOneOfThree)&&giveMeSpot(rowTwoOfTwo)&&giveMeSpot(rowThreeOfOne) == Xsign){
        result = true;
    }else if(giveMeSpot(rowOneOfOne)&&giveMeSpot(rowOneOfTwo)&&giveMeSpot(rowOneOfThree) == Osign){
        result = true;
    }else if(giveMeSpot(rowTwoOfOne)&&giveMeSpot(rowTwoOfOne)&&giveMeSpot(rowTwoOfThree) == Osign){
        result = true;
    }else if(giveMeSpot(rowThreeOfOne)&&giveMeSpot(rowThreeOfTwo)&&giveMeSpot(rowThreeOfThree) == Osign){
        result = true;
    }else if(giveMeSpot(rowOneOfOne)&&giveMeSpot(rowTwoOfTwo)&&giveMeSpot(rowTwoOfThree) == Osign){
        result = true;
    }else if(giveMeSpot(rowOneOfTwo)&&giveMeSpot(rowTwoOfTwo)&&giveMeSpot(rowThreeOfTwo) == Osign){
        result = true;
    }else if(giveMeSpot(rowOneOfThree)&&giveMeSpot(rowTwoOfThree)&&giveMeSpot(rowThreeOfThree) == Osign){
        result = true;
    }else if(giveMeSpot(rowOneOfOne)&&giveMeSpot(rowTwoOfTwo)&&giveMeSpot(rowThreeOfThree) == Osign){
        result = true;
    }else if(giveMeSpot(rowOneOfThree)&&giveMeSpot(rowTwoOfTwo)&&giveMeSpot(rowThreeOfOne) == Osign){
        result = true;
    }else{
        //alert("Tie game");
    }
    return result;
}

