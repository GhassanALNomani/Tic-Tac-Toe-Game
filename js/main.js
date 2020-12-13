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
    if(checkWinner("X")){
        alert("Win! Player One")
    }else if(checkWinner("O")){
        alert("Win! Player Two")
    }else if(turn == "X"){
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

function Winner(spotOne, spotTwo, spotThree, move){
    var result = false;
    if(giveMeSpot(spotOne) == move && giveMeSpot(spotTwo) == move && giveMeSpot(spotThree) == move){
        result = true;
    }

    return result;
}

function checkWinner(move){
    var result = false
    if( Winner(1,2,3,move)|| Winner(4,5,6,move)|| Winner(7,8,9,move)||   //in row "wins"
        Winner(1,5,9,move)|| Winner(3,5,7,move)||                        //in diagonal "wins"   
        Winner(1,4,7,move)|| Winner(2,5,8,move)|| Winner(3,6,9,move)){   // in column "wins"
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
    turn = "X";
    $('#container .container-game button').text("");
    $('.boardInst').text("");
});


//Create button  for when i clicked quit game

$('#quit').on('click', function(){
    window.close()
})
