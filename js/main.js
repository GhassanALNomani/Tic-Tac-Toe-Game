// Function navigate to another page
$('#butGame').on('click', () =>{
    location.href = "game.html"
})

//-===========================================================================





function setMessage(msg){
    $('.boardInst').text(msg);
}

var turn = "X";
var gameTie = null;
var xWins = 0;
var oWins = 0;

// $(".counterX").on('change', ()=>{
//     xWins++;
//     console.log(xWins);
// })

$('.container-game .styleButton').on('click', function(event){
    const $spot = event.target;
    
    if($spot.innerText == ""){
        $spot.innerText = turn;
        switchTurn();
    }else{
        alert("Select another spot, It's already selected")
    }
});


// function switch turn between player one and two
function switchTurn(){
    
    if(checkWinner("X")){
        alert("Win! Player One");
        
    }else if(checkWinner("O")){
        alert("Win! Player Two"); 

    }else if(checkGameTie()){
        setMessage("Game Tie");

    }else if(turn == "X"){
        turn = "O";
        setMessage("Player Two");
    }else{
        turn = "X";
        setMessage("Player One");
    }
    
    
}

//create funtion to give me spot

function giveMeSpot(num){
    return $('#spot' + num).text();
}


//create function checkWinner

function Winner(spotOne, spotTwo, spotThree, turn){
    var result = false;
    if(giveMeSpot(spotOne) == turn && giveMeSpot(spotTwo) == turn && giveMeSpot(spotThree) == turn){
        result = true;
    }

    return result;
}

function checkWinner(turn){
    var result = false
    if( Winner(1,2,3,turn)|| Winner(4,5,6,turn)|| Winner(7,8,9,turn)||   //in row "wins"
        Winner(1,5,9,turn)|| Winner(3,5,7,turn)||                        //in diagonal "wins"   
        Winner(1,4,7,turn)|| Winner(2,5,8,turn)|| Winner(3,6,9,turn)){   // in column "wins"
            result = true;
        }
    return result;
}

function checkGameTie(){
    for(var i = 1; i <= 9; i++){
        if(giveMeSpot(i) == ""){
            return false;
        }
    }
    return true;
}

// Create event for button when i clicked return me to page menu

$("#menu").on('click', function(){
    location.href = "index.html";
})

//Create event for button when i clicked restart game
//check
$('#restart').on('click', function(){
    turn = "X";
    $('.container-game button').text("");
    if(turn = "X"){
        $('.boardInst').text("Player One Start");
    }
});


//Create button  for when i clicked quit game

$('#quit').on('click', function(){
    location.reload()
})


//create function called change color

$('#color').on('change', function(){
    $('#body-game').css('background-color', $('#color').val())
})


//create function for text color change

$('#colorText').on('change', function(){
    $('#body-game').css('color', $('#colorText').val())
    $('#menu').css('color', $('#colorText').val())
    $('#restart').css('color', $('#colorText').val())
    $('.styleButton').css('color', $('#colorText').val())
})

