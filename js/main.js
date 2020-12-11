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
    spot.innerText = turn;
    switchTurn();
}

function switchTurn(){
    if(turn == "X"){
        turn = "O";
    }else{
        turn = "X";
    }
}





