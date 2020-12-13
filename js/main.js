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

function Winner(spotOne, spotTwo, spotThree, spotFour, move){
    var result = false;
    if(giveMeSpot(spotOne) == move && giveMeSpot(spotTwo) == move && giveMeSpot(spotThree) == move && giveMeSpot(spotFour) == move){
        result = true;
    }

    return result;
}

function checkWinner(move){
    var result = false
    if( Winner(1,2,3,4, move)||
        Winner(7,8,9,10,move)||
        Winner(13,14,15,16,move)||
        Winner(19,20,21,22,move)||
        Winner(25,26,27,28,move)||
        Winner(31,32,33,34,move)||
        Winner(3,4,5,6,move)||
        Winner(9,10,11,12,move)||
        Winner(15,16,17,18,move)||
        Winner(21,22,23,24,move)||
        Winner(27,28,29,30,move)||
        Winner(33,34,35,36,move)||
        Winner(2,3,4,5,move)||
        Winner(8,9,10,11,move)||
        Winner(14,15,16,17,move)||
        Winner(20,21,22,23,move)||
        Winner(26,27,28,29,move)||
        Winner(32,33,34,35,move)||
        Winner(2,8,14,20,move)){
            result = true;
        }
    return result;
}



// Create event for button when i clicked return me to page menu

$("#menu").on('click', function(){
    location.href = "index.html";
})


//Create event for button when i clicked restart game
//check
$('#restart').on('click', function(){
    $('#container .container-game button').text("");
    $('.boardInst').text("");
});


//Create button  for when i clicked quit game

$('#quit').on('click', function(){
    window.close()
})