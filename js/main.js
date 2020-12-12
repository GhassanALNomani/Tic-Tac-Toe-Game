// Function navigate to another page
$('#butGame').on('click', () =>{
    location.href = "game.html"
})

//-===========================================================================





function setMessage(msg){
    $('.boardInst').text(msg);
}

var turn = "X";
//Start move
function move(spot){ 
    if(spot.innerText == ""){
        spot.innerText = turn;
        switchTurn();
    }else{
        alert("Select another spot, It's already selected")
    }
}
// function switch turn between player one and two
function switchTurn(){
    if(checkWinner(turn)){
        alert("Win!")
    }
    if(turn == "X"){
        turn = "O";
        setMessage("Player Two turn" );
    }else{
        turn = "X";
        setMessage("Player One turn");
    }
    
}

//create funtion to give me spot

function giveMeSpot(num){
    return $('#spot' + num).text();
}


//create function checkWinner

function Winner(spotOne, spotTwo, spotThree, spotFour, spotFive, spotSix, move){
    var result = false;
    if(giveMeSpot(spotOne) == move && giveMeSpot(spotTwo) == move && giveMeSpot(spotThree) == move
        && giveMeSpot(spotFour) == move && giveMeSpot(spotFive) == move && giveMeSpot(spotSix) == move){
        result = true;
    }

    return result;
}

function checkWinner(move){
    var result = false
    if( Winner(1,2,3,4,5,6,move)||
        Winner(7,8,9,10,11,12,move)||
        Winner(13,14,15,16,17,18,move)||
        Winner(19,20,21,22,23,24,move)||
        Winner(25,26,27,28,29,30,move)||
        Winner(31,32,33,34,35,36,move)||
        Winner(1,7,13,19,25,31,move)||
        Winner(2,8,14,20,26,32,move)||
        Winner(4,10,16,22,28,34,move)||
        Winner(5,11,17,23,29,35,move)||
        Winner(6,12,18,24,30,36,move)||
        Winner(1,8,15,22,29,36,move)||
        Winner(6,11,16,21,26,31,move)){
            result = true;
        }
    return result;
}